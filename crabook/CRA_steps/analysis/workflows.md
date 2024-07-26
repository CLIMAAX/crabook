Risk workflows
=======================

Different risk workflows are used within the CLIMAAX framework to evaluate and analyze the climate risks on a particular area. The main goal of the risk workflows is to identify and understand the potential adverse effects of different climate-related hazards, allowing for the development of adaptation sustainable strategies. Each workflow follows a 'stepwise’ data processing scheme to calculate risk as a combination of hazard, exposure, and vulnerability information:

- Hazard: Source of potential harm leading to an adverse impact. In the context of climate risk assessment, hazards are often associated with natural or human-induced phenomena, such as floods, droughts, heatwaves, wildfires, storms, and snow events.
- Exposure: Extent to which a particular area, population, or system is exposed to the identified climate hazards. This involves assessing the physical presence and characteristics of elements at risk in the area of interest. In the context of climate risk assessment, exposure can be understood as the extent to which a community, ecosystem, or infrastructure is likely to be affected by a hazard.
- Vulnerability: Susceptibility or predisposition of a system to experience harm or adverse impacts. It includes the characteristics of a community, system, or environment that make it more or less able to cope with a hazard. Vulnerability is influenced by various factors, including social, economic, environmental, and institutional conditions.

```{figure} ../../images/illustration/mentored_contributions.jpg
---
scale: 60%
---
This illustration is created by Scriberia with The Turing Way community. Used under a CC-BY 4.0 licence. DOI: [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

Different workflows have been proposed over the years for assessing climate risk. Within the CLIMAAX toolbox, we implemented these main ones:

- Product between Hazard, Exposure, and Vulnerability (i.e Risk index method)
- Damage analysis based on damage curves, Hazard, and Exposure
- Exposed assets or population to a certain climate-related hazard

These workflows will allow for the climate risk assessment using both historical information and future climate change scenarios to better understand the range of possible outcomes and identify sustainable adaptation strategies.


#### Climate data used for historical and future scenarios

| Hazard type | Time horizon(s) | Future scenarios | Datasets |
| :-: | :-: | :- | :-: |
| River flood | 1980, 2030, 2050, and 2080 | RCPs 4.5 and 8.5 | JRC and Aqueduct |
| Flood damage and population exposures | 1980, 2030, 2050, and 2080. Population in 1975, 1990, 2000, 2015 or the population projection of either 2025 or 2030. | RCPs 4.5 and 8.5 | JRC, Aqueduct, and GHSL |
| Coastal flood | Historical (ca. 2018) and 2050 | RCP 8.5  | Flood maps based on GTSM |
| Extreme precipitation | Historical (e.g. 1976-2005) and future periods (e.g. 2041-2070)  |  RCP 8.5 | EURO-CORDEX |
| Drought risk | Historical (e.g. 1979-2019) and future periods (e.g. 2015-2100) | SSP1-RCP2.6, SSP3-RCP7.0, SSP5-RCP8.5 | ISIMIP |
| Agricultural drought | Historical and future periods (e.g. up to 2050) | RCP2.6, RCP4.5, RCP8.5  | EURO-CORDEX |
| Drought exposure | Historical (e.g 2012 -2023) | - | JRC |
| Heatwave | Historical (1971-2000) and three future periods (2011-2040, 2041-2070 and 2071-2100)  | RCPs 4.5 and 8.5 | EURO-CORDEX  |
| Wildfire risk | Two past (1961–1990 and 1991–2010) and five future (2011–2020, 2021–2040, 2041–2060, 2061–2080 and 2081–2100) periods | RCPs 4.5 and 8.5 | ECLIPS2.0 and EFFIS datasets |
| Wildfire exposure | Historical (e.g. 1981-2005) and future periods (e.g. 2021-2098) | RCP2.6, RCP4.5, RCP8.5 | Fire danger indicators |
| Windstorm | Historical (e.g. 1979-2021) | - | Winter windstorm indicators |
| Heavy snow | Historical (e.g. 1940 to present) and three future periods (2011- 2040, 2041-2070 and 2071-2100) | RCP2.6, RCP4.5, RCP8.5 | ERA5 EURO-CORDEX |
| Blizzards | Historical (e.g. 1940 to present) and three future periods (2011- 2040, 2041-2070 and 2071-2100) | RCP2.6, RCP4.5, RCP8.5 | ERA5 EURO-CORDEX |
| Multi-hazard | Historical (e.g. 1961 to 2019) and three future periods (2011-2100) | RCP2.6, RCP4.5, RCP8.5 | UERRA MESCANSURFEX; EURO-CORDEX | - |


## Workflows in the CLIMAAX handbook

#### Summary of the risk workflow characteristics implemented in the CLIMAAX toolbox

| Hazard type | Risk assessment | Hazard data | Exposure and vulnerability | Risk output |
| :-: | :-: | :- | :- | :-: |
| River flood | Damage assessment | River flood depth and extent maps | Land use, vulnerability damage curves | Map of flood depth and damage |
| Flood damage and population exposures | Damage assessment and exposure | Flood depth maps | Open street map, Buildings damage and population exposure | Map of flood damage; population exposed and displaced; exposed critical infrastructures |
| Coastal flood | Damage assessment | Coastal flood depth and extent maps | Land use, vulnerability damage curves | Map of flood depth and damage |
| Extreme precipitation | Risk index method  |  Precipitation intensity for a given return period, impact rainfall thresholds | Critical infrastructures and population density | Impact rainfall thresholds; Shift in magnitude and frequency |
| Drought risk | Risk index method | Drought hazard index calculated based on monthly precipitation timeseries | Multiple exposure and vulnerability indices (social and economic) | Map of relative drought risk |
| Agricultural drought | Damage assessment | Crop yield reduction | Total crop production and aggregated crops revenue | Map revenue loss |
| Drought exposure | Exposed population |Combined Drought Indicator | Population density | Exposed population |
| Heatwave | Risk index method | Maximum Land Surface Temperature | Population density | Heatwave risk level |
| Wildfire risk | Risk index method | Fire susceptibility | Population, Economy, Ecology | Road, Population, Ecological and Economic risks |
| Wildfire exposure | Exposed population | Fire Weather Index | Population density | Exposed population |
| Windstorm | Damage assessment | Footprint of maximum wind gusts | Land use, vulnerability damage curves | Wind damage map |
| Heavy snow | Exposed population | Annual probability of occurrence | Population density | Exposed population |
| Blizzards | Exposed population | Annual probability of occurrence | Population density | Exposed population |
| Multi-hazard | Risk index method | Precipitation and temperature thresholds as proxy of floods and heatwaves | Airports and sensitivity and adaptive-capacity indicators | Risk maps of extreme temperature and precipitation | - |

::::{grid}
:gutter: 3

:::{grid-item-card} RIVER & COASTAL FLOODS
:columns: 4
:link: ../../notebooks/workflows/floods
:link-type: doc
:img-bottom: ../../images/top/floods.png
:::

:::{grid-item-card} HEAVY RAINFALL
:columns: 4
:link: ../../notebooks/workflows/heavy_rainfall
:link-type: doc
:img-bottom: ../../images/top/heavy_rainfall.png
:::

:::{grid-item-card} HEATWAVES
:columns: 4
:link: ../../notebooks/workflows/heatwaves
:link-type: doc
:img-bottom: ../../images/top/heatwaves.png
:::

:::{grid-item-card} DROUGHTS
:columns: 4
:link: ../../notebooks/workflows/droughts
:link-type: doc
:img-bottom: ../../images/top/droughts.png
:::

:::{grid-item-card} FIRE
:columns: 4
:link: ../../notebooks/workflows/fire
:link-type: doc
:img-bottom: ../../images/top/fire.png
:::

:::{grid-item-card} SNOW
:columns: 4
:link: ../../notebooks/workflows/snow
:link-type: doc
:img-bottom: ../../images/top/snow.png
:::

:::{grid-item-card} WIND
:columns: 4
:link: ../../notebooks/workflows/storms
:link-type: doc
:img-bottom: ../../images/top/wind.png
:::

::::
