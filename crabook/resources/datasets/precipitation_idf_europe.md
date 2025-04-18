# Precipitation pre-calculated IDF

Intensity, Duration, Frequency.


## General

Dataset ID
: `precipitation_idf_europe`

Spatial coverage
: Europe

In workflows
: [<img src="../../images/icon_s/icon_s_heavy_rainfall.png" class="hazard-icon"> Extreme precipitation](../../notebooks/workflows/HEAVY_RAINFALL/01_Extreme_precipitation/Extreme_precipitation_Intro)  (≥ v2024.10.1)

Authors
: The Center of Applied Research in Hydrometeorology from the Universitat Politècnica de Catalunya (CRAHI-UPC).

Attribution
: Based on CORDEX regional climate model data on single levels (DOI: [10.24381/cds.bc91edc3](https://doi.org/10.24381/cds.bc91edc3)).

  We acknowledge the World Climate Research Programme's Working Group on Regional Climate, and the Working Group on Coupled Modelling, former coordinating body of CORDEX and responsible panel for CMIP5. We also thank the climate modelling groups for producing and making available their model output. We also acknowledge the Earth SystemGrid Federation infrastructure an international effort led by the U.S. Department of Energy's Program for Climate Model Diagnosis and Intercomparison, the European Network for Earth System Modelling and other partners in the Global Organisation for Earth System Science Portals (GO-ESSP).

Year
: 2024


## Technical

Base URL
: `https://object-store.os-api.cci1.ecmwf.int/climaax/precipitation_idf_europe/`

File types
: GeoTIFF, NetCDF

Pooch registry
: [registry.txt](https://object-store.os-api.cci1.ecmwf.int/climaax/precipitation_idf_europe/metadata/registry.txt)

Coordinate reference system
: Fields from the NetCDF files in `hazard_assessment/non_bias_corrected` are specified on the [rotated pole EURO-CORDEX domain](https://cordex.org/domains/cordex-region-euro-cordex/) (coordinates `rlat`, `rlon`):

  ```
  cartopy.crs.RotatedPole(pole_latitude=39.25, pole_longitude=-162)
  ```

  Fields of non-rotated latitude and longitude (`lat` and `lon`) are provided with all NetCDF files in `hazard_assessment`.


## Contents

<div class="dataset-file-list" data-base-url="https://object-store.os-api.cci1.ecmwf.int/climaax/precipitation_idf_europe/"></div>
