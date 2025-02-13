# Hazard datasets (WIP)

:::{caution}

Work in progress page!
:::

TODO
Past and future climate.


## Data Providers

TODO: keep this section?
The Copernicus Climate Change Service (C3S) Climate Data Store (CDS) provides access to a wide variety of climate-related data, including observational data from ground-based instruments, satellites and other sources, reanalysis data, and environmental and climate model projections.
Users need to sign up for an account on the {abbr}`CDS (Climate Data Store)` website and use the {abbr}`CDS (Climate Data Store)` API or the web interface to download the required data.

:::{tip}

Check with your local meteorological service! TODO
:::



## General climate datasets

TODO
Quantities that characterize the Earth system.
Basic properties of the atmosphere like temperature, wind, and precipitation amounts.


### Observations

TODO

:::{dropdown} E-OBS

Daily gridded observational dataset for precipitation, temperature, sea level pressure, relative humidity, wind speed and global radiation in Europe based on [ECA&D](https://www.ecad.eu/download/ensembles/download.php) information

Dataset
: https://doi.org/10.24381/cds.151d3ec6

Temporal coverage
: 1950 to near-present

Spatial coverage
: 25°N-71.5°N, 25°W-45°E

Resolution
: 0.1° and 0.25° horizontal
:::


:::{dropdown} CHIRPS

Rainfall Estimates from Rain Gauge and Satellite Observations

Dataset
: https://www.chc.ucsb.edu/data/chirps

Temporal coverage
: 1981 to near-present

Spatial coverage
: 50°S-50°N

Resolution
: 0.05° horizontal
:::


### Reanalysis

TODO
Recreations of the state of the Earth system by a computer model under the consideration of available observations.
Reanalysis combines model data with observations into a complete and consistent dataset using the laws of physics.
Not merely an interpolation between observations, but inclusion of scientific knowledge about processes in the atmosphere etc. as encoded in the model.

:::{figure} ../../images/hazard_image.png
:figclass: margin-caption
:name: three-stages-of-reanalysis

The three stages of reanalysis; the amount of observational data used for the RA per area unit increases from the global to the surface reanalysis as indicated by the arrows. (Source: __[UERRA data user guide](https://datastore.copernicus-climate.eu/documents/uerra/D322_Lot1.4.1.2_User_guides_v3.3.pdf)__)
:::


{numref}`three-stages-of-reanalysis` shows different types of reanalysis and their relationship.
Global reanalysis from global weather models.
Limited-area models nested inside global models to refine reanalysis data for a specific region.
Surface reanalysis based on models of the surface, with global or regional reanalysis data driving the surface model.
From global to regional to surface, resolution and use of observations generally increases.


:::{dropdown} ERA5

Atmospheric reanalysis dataset produced by the European Centre for Medium-Range Weather Forecasts (ECMWF), widely used in climate research, weather forecasting, and other applications.
Includes an ensemble component at half the resolution to provide information on synoptic uncertainty.

Dataset
: [hourly data on single levels](https://doi.org/10.24381/cds.adbb2d47),
  [hourly data on pressure levels](https://doi.org/10.24381/cds.bd0915c6)

Temporal coverage
: 1940 to near-present

Spatial coverage
: global

Resolution
: 0.25° horizontal

In workflows
: <img src="../../images/icon_s/icon_s_snow.png" alt="" class="hazard-icon"> [Heavy snowfall and blizzards](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS),
  <img src="../../images/icon_s/icon_s_wind.png" alt="" class="hazard-icon"> [Windstorm](../../notebooks/workflows/STORMS/01_windstorm/Risk_workflow_description_STORMS)
:::


:::{dropdown} ERA5-Land

ERA5-Land has enhanced horizontal resolution compared to ERA5, but it covers only land areas.
ERA5-land parameter uncertainty currently can be accessed using the equivalent ERA5 fields.

Dataset
: https://doi.org/10.24381/cds.e2161bac

Temporal coverage
: 1950 to near-present

Spatial coverage
: global

Resolution
: 0.1° horizontal
:::



:::{dropdown} CERRA: Copernicus European Regional ReAnalysis

Regional reanalysis for Europe.
Inputs are the observational data, lateral boundary conditions from ERA5 global reanalysis and physiographic datasets describing surface characteristics.

Dataset
: [single levels](https://doi.org/10.24381/cds.622a565a), [pressure levels](https://doi.org/10.24381/cds.a39ff99f), [height levels](https://doi.org/10.24381/cds.38b394e6) and
  [land component](https://doi.org/10.24381/cds.a7f3cd0b)

Documentation
: https://doi.org/10.1002/qj.4764

Temporal coverage
: 1984 to 2022

Spatial coverage
: Europe, parts of the North Atlantic and North Africa

Resolution
: 5.5 km horizontal
:::


:::{dropdown} UERRA-HARMONIE & MESCAN-SURFEX

Regional reanalysis for Europe.
Output from the [Uncertainties in Ensembles of Regional ReAnalyses](https://uerra.eu) project.

Dataset
: [single levels](https://doi.org/10.24381/cds.32b04ec5), [pressure levels](https://doi.org/10.24381/cds.92221551), [height levels](https://doi.org/10.24381/cds.44ec8078) and [soil levels](https://doi.org/10.24381/cds.33525ca7)

Temporal coverage
: January 1961 to July 2019

Spatial coverage
: Europe

Resolution
: 11 km (UERRA-HARMONIE) and 5.5 km (MESCAN-SURFEX) horizontal
:::


### Climate Projections

TODO
Data from climate model simulations.
Direct and bias-corrected.
Runs often started in the past, provide not just future projection but also consistent dataset to represent the present climate.


:::{dropdown} CMIP6

Global climate model simulations produced for phase 6 of the [Coupled Model Intercomparison Project](https://wcrp-cmip.org/cmip6/) (CMIP).
Daily and monthly projections of the historical and future climate from a large number of experiments and models under different scenarios of greenhouse gas emissions.

Dataset
: https://doi.org/10.24381/cds.c866074c

Temporal coverage
: 1850-2014 (historical), 2015-2100 (future)

Scenarios
: SSP1-1.9, SSP1-2.6, SSP4-3.4, SSP5-3.4OS, SSP2-4.5, SSP4-6.0, SSP3-7.0, SSP5-8.5

Spatial coverage
: global

Resolution
: depending on model
:::


:::{dropdown} CMIP5

Global climate model simulations produced for phase 5 of the [Coupled Model Intercomparison Project](https://wcrp-cmip.org/cmip5/) (CMIP).
Daily and monthly projections of the historical and future climate from a large number of experiments and models under different scenarios of greenhouse gas emissions.

Dataset
: https://doi.org/10.24381/cds.d3513dbf

Temporal coverage
: 1850 to 2300 (depending on experiment)

Scenarios
: RCP 2.6, 4.5, 6.0, 8.5

Spatial coverage
: global

Resolution
: 0.125° to 5° horizontal (depending on model)
:::


:::{dropdown} CORDEX: Coordinated Regional Climate Downscaling Experiment

High-resolution regional climate model simulations for Europe, produced by a consortium of European research institutions.
Boundary conditions for the regional climate models come from global climate models of CMIP5.

Dataset
: https://doi.org/10.24381/cds.bc91edc3

Temporal coverage
: 1951-2005 (historical), 1989-2008 (evaluation), 2006-2100 (future)

Scenarios
: RCP 2.6, 4.5, 8.5 (depending on domain and model)

Spatial coverage
: See https://cordex.org/domains/

Resolution
: 0.11° to 0.44° horizontal (depending on domain and model)

In workflows
: <img src="../../images/icon_s/icon_s_heavy_rainfall.png" alt="" class="hazard-icon"> [Extreme precipitation](../../notebooks/workflows/HEAVY_RAINFALL/01_Extreme_precipitation/Extreme_precipitation_Intro),
  <img src="../../images/icon_s/icon_s_heatwaves.png" alt="" class="hazard-icon"> [Urban heatwaves](../../notebooks/workflows/HEATWAVES/01_Urban_heatwaves/heatwave_intro),
  <img src="../../images/icon_s/icon_s_droughts.png" alt="" class="hazard-icon"> [Agricultural drought](../../notebooks/workflows/DROUGHTS/02_agriculture_drought/AGRICULTURE_Risk_workflow_description),
  <img src="../../images/icon_s/icon_s_snow.png" alt="" class="hazard-icon"> [Heavy snowfall & blizzards](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS)
:::


:::{dropdown} ISIMIP3b: bias-corrected atmospheric climate input data

The [Inter-Sectoral Impact Model Intercomparison Project](https://www.isimip.org/) (ISIMIP) provides bias-corrected CMIP6 climate forcing data.
The bias-adjustment corrects the simulated data towards corrected ERA5 reanalysis ([W5E5](doi.org/10.48364/ISIMIP.342217)).

Dataset
: https://doi.org/10.48364/ISIMIP.842396.1

Documentation
: https://protocol.isimip.org/#/ISIMIP3b

Temporal coverage
: 1601-1849 (pre-industrial), 1850-2014 (historical), 2015-2100 (future)

Scenarios
: SSP1-RCP2.6, SSP3-RCP7.0, SSP5-RCP8.5

Spatial coverage
: global

In workflows
: <img src="../../images/icon_s/icon_s_droughts.png" alt="" class="hazard-icon"> [Relative drought](../../notebooks/workflows/DROUGHTS/01_relative_drought/Risk_workflow_description_RELATIVE_DROUGHT)
:::


:::{dropdown} ECLIPS-2.0: bias-corrected EURO-CORDEX

80 annual, seasonal and monthly climate variables for two past and five future periods.
Downscaled from output of five regional climate models driven by two greenhouse gas concentration scenarios.

Dataset
: https://doi.org/10.5281/zenodo.3952159

Documentation
: https://doi.org/10.1002/gdj3.110

Temporal coverage
: 1961-1990, 1991-2010, 2011-2020, 2021-2140, 2041-2060, 2061-2080, 2081-2100

Scenarios
: RCP 4.5, 8.5

Spatial coverage
: EURO-CORDEX domain

Resolution
: 30 arcsec horizontal

In workflows
: <img src="../../images/icon_s/icon_s_fire.png" alt="" class="hazard-icon"> [Wildfire (ML approach)](../../notebooks/workflows/FIRE/01_wildfire_ML/Risk_workflow_description_FIRE_ML)
:::


:::{dropdown} CHELSA-EUR11

Downscaled climate model output of temperature and precipitation estimates from the [Climatologies at high resolution for the earth’s land surface areas](https://chelsa-climate.org/) (CHELSA) dataset.

Dataset
: https://www.doi.org/10.16904/envidat.150

Documentation
: [Technical specification](https://os.zhdk.cloud.switch.ch/chelsav2/EUR11/documentation/CHELSA_EUR11_technical_documentation.pdf)

Temporal coverage
: 1981-2000, 1981–2005, 2021-2040, 2041-2060, 2051-2080, 2061-2080

Scenarios
: RCP 4.5, 8.5

Spatial coverage
: EURO-CORDEX domain

Resolution
: 30 arcsec horizontal

In workflows
: <img src="../../images/icon_s/icon_s_fire.png" alt="" class="hazard-icon"> [Wildfire (ML approach)](../../notebooks/workflows/FIRE/01_wildfire_ML/Risk_workflow_description_FIRE_ML)
:::




## Hazard-specific datasets

TODO
Datasets with pre-processing, event selection, additional modelling applied.


### <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> Floods

:::{dropdown} JRC river flood hazard maps for Europe and the Mediterranean Basin region

Gridded inundation depth (in m) along the river network, for nine different flood return periods (from 1-in-10-years to 1-in-500-years).

Dataset
: http://data.europa.eu/89h/1d128b6c-a4ee-4858-9e34-6210707f3c81

Spatial coverage
: Most of geographical Europe and all the river basins entering the Mediterranean and Black Seas in the Caucasus, Middle East and Northern Africa countries.
  River basins > 150 km².

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [River floods](../../notebooks/workflows/FLOODS/02_River_flooding/FLOOD_RIVER_intro),
  <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [Flood building damage and population exposed](03_Flood_damage_and_population_exposure/Risk_workflow_description_FLOOD_BUILDING_POPULATION)
:::


:::{dropdown} JRC global river flood hazard maps
:name: dataset-jrc-global-river-flood-hazard-maps

Gridded inundation depth (in m) along the river network, for seven different flood return periods (from 1-in-10-years to 1-in-500-years).

Dataset
: http://data.europa.eu/89h/jrc-floods-floodmapgl_rp50y-tif

Spatial coverage
: Global, except Greenland and Antarctica and small islands with river basins smaller than 500 km²

Resolution
: 90 m (3 arcseconds)
:::


:::{dropdown} WRI Aqueduct Floods Hazard Maps

Dataset
: https://www.wri.org/data/aqueduct-floods-hazard-maps

Documentation
: https://www.wri.org/research/aqueduct-floods-methodology

Temporal coverage
: 2010, 2030, 2050, 2080

Scenarios
: RCP4.5/SSP2, RCP8.5/SSP2, RCP8.5/SSP3

Spatial coverage
: global

Resolution
: 30'' x 30'' horizontal

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [River floods](../../notebooks/workflows/FLOODS/02_River_flooding/FLOOD_RIVER_intro)
:::


:::{dropdown} Deltares Global Flood Maps

Inundation maps of flood depth.

Dataset
: https://planetarycomputer.microsoft.com/dataset/deltares-floods

Spatial coverage
: global

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [Coastal floods](../../notebooks/workflows/FLOODS/01_Coastal_flooding/Risk_workflow_description_FLOOD_COASTAL)
:::


:::{dropdown} Global sea level change indicators from 1950 to 2050 derived from reanalysis and high resolution CMIP6 climate projections

Statistical indicators of tides, storm surges and sea level that can be used to characterize global sea level in present-day conditions and also to assess changes under climate change.

Dataset
: https://doi.org/10.24381/cds.6edf04e0

Temporal coverage
: 1950 to 2050

Scenarios
: SSP5-8.5

Spatial coverage
: global

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [Coastal floods](../../notebooks/workflows/FLOODS/01_Coastal_flooding/Risk_workflow_description_FLOOD_COASTAL)
:::


:::{dropdown} IPCC 6th Assessment Report Sea Level Projections

Sea-level projections associated with the Intergovernmental Panel on Climate Change Sixth Assessment Report.

Dataset
: [Zenodo](https://doi.org/10.5281/zenodo.5914709), [NASA Sea Level Projection Tool](https://sealevel.nasa.gov/ipcc-ar6-sea-level-projection-tool)

Spatial coverage
: global

In workflows
: <img src="../../images/icon_s/icon_s_floods.png" alt="" class="hazard-icon"> [Coastal floods](../../notebooks/workflows/FLOODS/01_Coastal_flooding/Risk_workflow_description_FLOOD_COASTAL)
:::


### <img src="../../images/icon_s/icon_s_heatwaves.png" alt="" class="hazard-icon"> Heatwaves

:::{dropdown} Heat waves and cold spells in Europe derived from climate projections

Number of hot and cold spell days using different European-wide and national/regional definitions developed within the C3S European Health service.

Dataset
: https://doi.org/10.24381/cds.9e7ca677

Temporal coverage
: 1986 to 2085

Spatial coverage
: European region (approx. 27°N–72°N and 22°W–45°E)

Resolution
: 0.1° x 0.1° regular latitude-longitude grid

In workflows
: <img src="../../images/icon_s/icon_s_heatwaves.png" alt="" class="hazard-icon"> [Urban heatwaves](../../notebooks/workflows/HEATWAVES/01_Urban_heatwaves/heatwave_intro)
:::


:::{dropdown} Online Global Land Surface Temperature Estimation from Landsat 

Dataset
: https://rslab.gr/Landsat_LST.html

Temporal coverage
: past; depends on satellite

Spatial coverage
: global

In workflows
: <img src="../../images/icon_s/icon_s_heatwaves.png" alt="" class="hazard-icon"> [Urban heatwaves](../../notebooks/workflows/HEATWAVES/01_Urban_heatwaves/heatwave_intro)
:::


### <img src="../../images/icon_s/icon_s_fire.png" alt="" class="hazard-icon"> Fire

:::{dropdown} Fire danger indicators for Europe from 1970 to 2098 derived from climate projections

Projections of fire danger indicators for Europe based upon the Canadian Fire Weather Index System (FWI) under future climate conditions

Dataset
: https://doi.org/10.24381/cds.ca755de7

Temporal coverage
: 1970 to 2098

Spatial coverage
: Europe

Spatial resolution
: 0.11° x 0.11° horizontal

In workflows
: <img src="../../images/icon_s/icon_s_fire.png" alt="" class="hazard-icon"> [Wildfire (FWI)](../../notebooks/workflows/FIRE/02_wildfire_FWI/FWI_Risk_Description)
:::


:::{dropdown} 30-Year Canadian Fire Weather Index Simulations over Europe: CMIP6-Informed Temperature and Precipitation Perturbations

30-year Canadian Fire Weather Index (FWI), generated using the Global ECMWF Fire Forecast model, forced by ERA5 reanalysis data (1981-2010). Simulations incorporate perturbations in temperature and precipitation forcings based on CMIP6 climate projections under the SSP2-4.5 medium mitigation scenario. 

Dataset
: https://doi.org/10.5281/zenodo.10458185

Temporal coverage
: 1981 to 2010

Spatial coverage
: Europe (geographical)

Resolution
: 31 km horizontal

In workflows
: coming soon...
:::


### <img src="../../images/icon_s/icon_s_wind.png" alt="" class="hazard-icon"> Wind

:::{dropdown} Winter windstorm indicators for Europe from 1979 to 2021 derived from reanalysis

Climatological indicators on European winter windstorms and their economic impact derived from ERA5 reanalysis.

Dataset
: https://doi.org/10.24381/cds.9b4ea013

Temporal coverage
: 1979 to 2021; October to March

Spatial coverage
: 20°W-35°E, 35°N-70°N

Resolution
: 1 km horizontal

In workflows
: <img src="../../images/icon_s/icon_s_wind.png" alt="" class="hazard-icon"> [Windstorm](../../notebooks/workflows/STORMS/01_windstorm/Risk_workflow_description_STORMS)
:::
