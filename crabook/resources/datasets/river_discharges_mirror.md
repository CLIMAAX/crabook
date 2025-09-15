# River discharges forced by EURO-CORDEX (mirror)


## General

Dataset ID
: `river_discharges_mirror`

Spatial coverage
: Europe (E-HYPE domain with 8.8 million km², subdivided into [35408 subcatchments](https://zenodo.org/records/581451))

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon"> [River flooding (discharges)](../../notebooks/workflows/FLOODS/04_River_discharge_analysis/workflow_description_river_discharges)

Original source
: Hydrology-related climate impact indicators from 1970 to 2100 derived from bias adjusted European climate projections (DOI [10.24381/cds.73237ad6](https://doi.org/10.24381/cds.73237ad6))

Authors
: Berg, P., Photiadou, C., Bartosova, A., Biermann, J., Capell, R., Chinyoka, S., Fahlesson, T., Franssen, W., Hundecha, Y., Isberg, K., Ludwig, F., Mook, R., Muzuusa, J., Nauta, L., Rosberg, J., Simonsson, L., Sjökvist, E., Thuresson, J., and van der Linden, E.

Year
: 2021

Attribution
: Copernicus Climate Change Service information 2021. Neither the European Commission nor ECMWF is responsible for any use that may be made of the Copernicus information or data it contains.

License
: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

:::{note}
This mirror contains the original data with transposed coordinates (optimized for access to individual catchments) in a zarr dataset.
See [below](#dataset-transformation) for more information on the applied transformations.
:::



## Technical

URLs
: `https://object-store.os-api.cci1.ecmwf.int/climaax/river_discharges_mirror/rdis_day_E-HYPEcatch_allmodels.zarr`
  `https://object-store.os-api.cci1.ecmwf.int/climaax/river_discharges_mirror/rdis_ymonmean_abs_E-HYPEcatch_allmodels.zarr`
  `https://object-store.os-api.cci1.ecmwf.int/climaax/river_discharges_mirror/rdis_extremes_abs_E-HYPEcatch_allmodels.zarr`
  `https://object-store.os-api.cci1.ecmwf.int/climaax/river_discharges_mirror/rdis_extremes_rel_E-HYPEcatch_allmodels.zarr`

Dataset type
: zarr (version 2)

:::{warning}
This mirror is provided for the convenice of CLIMAAX workflow users only.
Please use the original data source for citations and general access.
Availability of and URLs associated with this dataset may change without announcement.
:::


## Dataset transformation

Data was collected based on the default configuration in the [River floods (discharges): get data](../../notebooks/workflows/FLOODS/04_River_discharge_analysis/hazard_assessment_get_data) notebook.
Dimensions of the dataset were reordered after merging the downloaded files to optimize for local-in-space access (dimension `id` first).
