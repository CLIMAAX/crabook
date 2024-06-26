Exposure datasets
=======================

A variety of exposure datasets are available at pan-European scale that can be selected based on the data needs in terms of spatial and temporal resolution and the underlying acquisition or modeling approach. We describe a selected set of exposure datasets, including current exposure and future projections, in more detail below.  

A range of population datasets are available, with different spatial and temporal resolutions, such as the satellite-based Global Human Settlement Layer (GHSL) population data GHS-POP, available at {math}`100 m/3 arcsec` and {math}`1 km/30 arcsec` from 1975 to 2030 in 5-year time steps. Further, WorldPop provides population data in annual time steps for the period 2000-2020 based on a Random Forest modelling approach. GHS-POP and WorldPop are based on the Gridded Population of the World (GPW) (version 4) that have a spatial resolution of 30 arc seconds and a temporal resolution of 5-year time steps from 2000-2020, which were collected from the national census and population registers. On an administrative unit level, i.e. {abbr}`NUTS (Nomenclature of Territorial Units for Statistics)` regions, population data are available from Eurostat.


:::{list-table} Population datasets
:widths: 10 10 15 15 15
:header-rows: 1

*   - Variable
    - Dataset
    - Temporal resolution
    - Spatial resolution
    - References
*   - Population
    - GHS-POP
    - 1975-2030
    - 100 m, 3 arcsec;\
      1 km, 30 arcsec
    - European Commission, 2023
*   - 
    - WorldPop
    - 2000-2020
    - 3 arcsec, 30 arcsec
    - (Bondarenko et al., 2020; Stevens et al., 2015) 
*   - 
    - GPW v4
    - 2000-2020
    - 30 arcsec
    - (CIESIN, 2018b) 
:::

```{figure} ../../images/ev_data_image2.png
---
name: population
---
Comparison of the spatial population distribution in GHS-POP, WorldPop, and GPW v4
```
Several datasets that represent settlements, buildings, infrastructure, and different land uses are available.  
- __[{abbr}`GHSL (Global Human Settlement Layer)`](https://ghsl.jrc.ec.europa.eu/download.php)__ provides raster data of built-up land and volume, residential and non-residential settlement zones (Morphological Settlement Zones), settlement classes, and building height at 2 m to 1 km/ 30 arc seconds spatial resolution and a temporal resolution of five-year time steps from 1975 to 2030 for most datasets. It also provides __[built-up](https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LAUSTAT_EUROPE_R2023A/V1-0/GHS-BUILT-LAUSTAT_EUROPE_R2023A.zip)__ land data summarized at Local Administrative Unit Level (LAU) as of 2020.  
- __[Open Street Map](https://www.openstreetmap.org/)__ (OSM) provides spatial data in vector format (i.e. points, lines, polygons) of e.g. building footprints and types, health and education facilities, energy and telecommunication towers, and roads and railway networks.
- The Critical Infrastructure Spatial Index (CISI) is based on {abbr}`OSM (Open Street Map)` data and is available in raster format at a spatial resolution of 0.1 decimal degrees.  
- For assessing the exposure of different land uses, the Europe-wide __[CORINE land cover data](https://land.copernicus.eu/)__ are available for 44 land cover classes at 100 m spatial resolution for the years 1990, 2000, 2006, 2012, and 2018. The CORINE data provide the basis for the higher-detail LUISA land cover map, available for 2012 and 2018 at 50 m spatial resolution. 

:::{list-table} Infrastructure datasets
:widths: 15 10 15 15 15
:header-rows: 1

*   - Variable
    - Dataset
    - Temporal resolution
    - Spatial resolution
    - References
*   - <img src="../../images/ev_data_image3.png" alt="Settlements" width="39px" class="bg-primary"> Settlements 
    - GHSL (several)
    - 1975-2030
    - From 2 m to 1km/30 arcsec
    - European Commission, 2023
*   - <img src="../../images/ev_data_image4.png" alt="Infrastructure" width="39px" class="bg-primary"> Infrastructure
    - OSM
    - Most recent
    - Vector format
    - (OpenStreetMap contributors, 2023)  
*   - 
    - CISI
    - 2021
    - 0.1 degree
    - (Nirandjan et al., 2022) 
*   - <img src="../../images/ev_data_image5.png" alt="Land cover" width="39px" class="bg-primary"> Land cover
    - CORINE
    - 1990, 2000, 2006, 2012, 2018 
    - 100 m
    - (Copernicus Land Monitoring Service, 2018) 
*   - 
    - LUISA
    - 2012, 2018
    - 50 m
    - (Pigaiani & Batista e Silva, 2021) 
:::

```{figure} ../../images/ev_data_image6.png
---
name: CISI dataset
---
The CISI for Western Europe (figure adjusted from Nirandjan et al. 2022)
```
Future projections of the population until 2100 are available under a range of socioeconomic scenarios, the Shared Socioeconomic Pathways (SSPs) (O’Neill et al., 2017). Publicly available datasets include those of Merkens et al. (2016) and Wang et al. (2022), which are available at a spatial resolution of 30 arc seconds, however, based on different modelling approaches and underlying population data used as model input. Projections of future urban land are available for the SSPs until 2100, such as the data of Gao and O'Neill (2020) at 1/8-degree spatial resolution, also downscaled to 1 km, and Chen et al. (2020), available at 30 arc seconds. Additionally, projections of different land uses are available at 30 arc seconds resolution until 2100, and GHSL provides projections per settlement class (GHS-SMOD) at 1 km resolution until 2070. 

:::{list-table} Future population datasets
:widths: 15 10 15 15 15
:header-rows: 1

*   - Variable
    - Scenario
    - Temporal range
    - Spatial resolution
    - References
*   - <img src="../../images/ev_data_image1.png" alt="Population" width="39px" class="bg-primary"> Population 
    - SSPs 1-5 
    - 2020-2100
    - 30 arcsec
    - (Merkens et al., 2016)
*   -      
    - SSPs 1-5 
    - 2020-2100
    - 30 arcsec
    - (X. Wang et al., 2022)  
*   - <img src="../../images/ev_data_image3.png" alt="Urban land" width="39px" class="bg-primary"> Urban land
    - SSPs 1-5
    - 2015-2100
    - 1 km
    - (Chen et al., 2020)   
*   - 
    - SSPs 1-5
    - 2000-2100
    - 1/8 decimal degree, 1 km
    - (Gao & O’Neill, 2020; Gao & Pesaresi, 2021) 
*   - <img src="../../images/ev_data_image5.png" alt="Land cover" width="39px" class="bg-primary"> Land cover
    - SSP-RCP combinations
    - 2015-2100  
    - 30 arcsec
    - (Chen et al., 2022; Zhang et al., 2023)
:::

```{figure} ../../images/ev_data_image7.png
---
name: population projections
---
Population projections by Merkens et al. 2016: Base year (2000) and SSP1, 3, 5 (2100)
```

```{figure} ../../images/ev_data_image8v2.png
---
name: urban land projections
---
Urban land projections for North America and Europe in 2100 under SSP2, SSP1 and SSP5. Comparison of 1/8 degree spatial resolution (panel 1) to 1 km (panels 2-4) (adjusted from Gao & Pesaresi 2021)
```