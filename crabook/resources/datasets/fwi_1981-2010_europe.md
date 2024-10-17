# FWI simulations with CMIP6-informed perturbations (mirror)


## General

Dataset ID
: `fwi_1981-2010_europe`

Spatial coverage
: Europe

In workflows
: [<img src="../../images/icon_s/icon_s_fire.png" class="hazard-icon"> TODO](../../notebooks/workflows/FIRE/03_FWI_TODO)

Original source
: 30-Year Canadian Fire Weather Index Simulations over Europe: CMIP6-Informed Temperature and Precipitation Perturbations (DOI [10.5281/zenodo.10458186](https://doi.org/10.5281/zenodo.10458186))

Author
: El Garroussi, Siham [<img decoding="async" src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em" alt="ORCID iD icon">](https://orcid.org/0000-0002-7437-0608)

Year
: 2024

License
: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

Related publication
: El Garroussi, S., Di Giuseppe, F., Barnard, C. et al. Europe faces up to tenfold increase in extreme fires in a warming climate. npj Clim Atmos Sci 7, 30 (2024). https://doi.org/10.1038/s41612-024-00575-8

:::{note}
This mirror contains the original data reencoded and with transposed coordinates in a zarr dataset.
See [below](#dataset-transformation) for more information on the applied transformations.
:::



## Technical

URL
: `https://object-store.os-api.cci1.ecmwf.int/climaax/fwi_1981-2010_europe/`

Dataset type
: zarr

:::{warning}
This mirror is provided for the convenice of CLIMAAX workflow users only.
Please use the original data source for citations and general access.
Availability of and URLs associated with this dataset may change without announcement.
:::


## Dataset transformation

The following processing was applied to the original dataset to create this mirror:

```python
# Input original datasets (grib) in ./zenodo
# Intermediate transposed datasets (netcdf) in ./transposed
# Output dataset (zarr) in ./fwi_1981-2010_europe

import os
import glob
import xarray as xr

files = glob.glob("zenodo/*.grib")

# Values from 0 to 500
fwi_encoding = {
    "dtype": "int16",
    "scale_factor": 0.007629627368999298,
    "add_offset": 250,
    "_FillValue": -32768
}

# Create intermediate transposed NetCDF datasets
for file in files:
    fname, _ = os.path.splitext(os.path.basename(file))
    print(fname)
    # Open, drop gridpoints without data and optimize for timeseries access
    data = xr.open_dataset(file, engine="cfgrib", backend_kwargs={"indexpath": ""}, chunks={"time": 1024})
    data = data.dropna("values", how="any")
    data = data.transpose("values", "time")
    # Add perturbation coordinates
    _, dt, dp, *_ = fname.split("_")
    assert dt.startswith("T")
    dt = float(dt[1:])
    assert dp.startswith("P")
    dp = float(dp[1:])
    data = data.assign_coords({"dt": [dt], "dp": [dp]})
    # Write to file
    data.to_netcdf(f"transposed/{fname}.nc", encoding={"fwinx": fwi_encoding})

# Merge all into chunked location-first zarr dataset
x = xr.open_mfdataset("transposed/*.nc", chunks={"values": 32})
x = x.transpose("values", "dp", "dt", "time")
x = x.chunk({"dp": 6, "dt": 6, "values": 32, "time": None})
# Don't chunk the coordinate dimensions
x["latitude"] = x["latitude"].compute()
x["longitude"] = (((x["longitude"].compute() + 180) % 360) - 180)
x["valid_time"] = x["valid_time"].compute()
x.to_zarr("fwi_1981-2010_europe")
```
