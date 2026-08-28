# Precipitation pre-calculated IDF

Pre-calculated intensity, frequency and duration (IDF) of precipitation for the CLIMAAX extreme precipitation workflow.


## General

Dataset ID
: `precipitation_idf_europe`

Spatial coverage
: Europe

In workflows
: [<img src="../../images/icon_s/icon_s_heavy_rainfall.png" class="hazard-icon"> Extreme precipitation](../../notebooks/workflows/HEAVY_RAINFALL/01_Extreme_precipitation/Extreme_precipitation_Intro)  (≥ v2024.10.1)

DOI
: [10.5281/zenodo.21901839](https://doi.org/10.5281/zenodo.21901839)

Contributors
: The Center of Applied Research in Hydrometeorology from the Universitat Politècnica de Catalunya (CRAHI-UPC).

Attribution notices
: We acknowledge the World Climate Research Programme's Working Group on Regional Climate, and the Working Group on Coupled Modelling, former coordinating body of CORDEX and responsible panel for CMIP5. We also thank the climate modelling groups for producing and making available their model output. We also acknowledge the Earth SystemGrid Federation infrastructure an international effort led by the U.S. Department of Energy's Program for Climate Model Diagnosis and Intercomparison, the European Network for Earth System Modelling and other partners in the Global Organisation for Earth System Science Portals (GO-ESSP).

  Generated using or contains modified Copernicus Climate Change Service information. Neither the European Commission nor ECMWF is responsible for any use that may be made of the Copernicus information or data it contains.

  - [10.24381/cds.bc91edc3](https://doi.org/10.24381/cds.bc91edc3)
  - [10.24381/cds.adbb2d47](https://doi.org/10.24381/cds.adbb2d47)

Year
: 2024

License
: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)


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
