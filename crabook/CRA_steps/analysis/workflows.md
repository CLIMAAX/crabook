Risk workflows
=======================

Different risk workflows are used within the CLIMAAX framework to evaluate and analyze the climate risks on a particular area. The main goal of the risk workflows is to identify and understand the potential adverse effects of different climate-related hazards, allowing for the development of adaptation sustainable strategies. Each workflow follows a 'stepwise’ data processing scheme to calculate risk as a combination of hazard, exposure, and vulnerability information:

- **Hazard**: Source of potential harm leading to an adverse impact. In the context of climate risk assessment, hazards are often associated with natural or human-induced phenomena, such as floods, droughts, heatwaves, wildfires, storms, and snow events.
- **Exposure**: Extent to which a particular area, population, or system is exposed to the identified climate hazards. This involves assessing the physical presence and characteristics of elements at risk in the area of interest. In the context of climate risk assessment, exposure can be understood as the extent to which a community, ecosystem, or infrastructure is likely to be affected by a hazard.
- **Vulnerability**: Susceptibility or predisposition of a system to experience harm or adverse impacts. It includes the characteristics of a community, system, or environment that make it more or less able to cope with a hazard. Vulnerability is influenced by various factors, including social, economic, environmental, and institutional conditions.

```{figure} ../../images/illustration/mentored_contributions.jpg
---
scale: 60%
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

Different workflows have been proposed over the years for assessing climate risk. Within the CLIMAAX toolbox, we implemented these main ones:

- Product between Hazard, Exposure, and Vulnerability (i.e Risk index method)
- Damage analysis based on damage curves, Hazard, and Exposure
- Exposed assets or population to a certain climate-related hazard

These workflows will allow for the climate risk assessment using both historical information and future climate change scenarios to better understand the range of possible outcomes and identify sustainable adaptation strategies.


## Summary of the risk workflow characteristics implemented in the CLIMAAX toolbox

<div class="full-width">

:::{list-table}
:header-rows: 1

*   - 
    - Hazard type
    - Risk assessment
    - Hazard data
    - Exposure and vulnerability
    - Risk output

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [River floods (flood maps)](../../notebooks/workflows/FLOODS/02_River_flooding/FLOOD_RIVER_intro)
    - Damage assessment
    - River flood depth and extent maps
    - Land use, vulnerability damage curves
    - Map of flood depth and damage

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [Coastal floods](../../notebooks/workflows/FLOODS/01_Coastal_flooding/Risk_workflow_description_FLOOD_COASTAL)
    - Damage assessment
    - Coastal flood depth and extent maps
    - Land use, vulnerability damage curves
    - Map of flood depth and damage

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [Flood damage and population exposed](../../notebooks/workflows/FLOODS/03_Flood_damage_and_population_exposure/Risk_workflow_description_FLOOD_BUILDING_POPULATION)
    - Damage assessment and exposure
    - Flood depth maps
    - Open street map, Buildings damage and population exposure
    - Map of flood damage; population exposed and displaced; exposed critical infrastructures

*   - <img src="../../images/icon_s/icon_s_heavy_rainfall.png" class="hazard-icon" />
    - [Extreme precipitation](../../notebooks/workflows/HEAVY_RAINFALL/01_Extreme_precipitation/Extreme_precipitation_Intro)
    - Risk index method
    - Precipitation intensity for a given return period, impact rainfall thresholds
    - Critical infrastructures and population density
    - Impact rainfall thresholds; Shift in magnitude and frequency

*   - <img src="../../images/icon_s/icon_s_heatwaves.png" class="hazard-icon" />
    - [Urban heatwaves](../../notebooks/workflows/HEATWAVES/01_Urban_heatwaves/heatwave_intro)
    - Risk index method
    - Maximum Land Surface Temperature
    - Population density
    - Heatwave risk level

*   - <img src="../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
    - [Drought risk](../../notebooks/workflows/DROUGHTS/01_relative_drought/Risk_workflow_description_RELATIVE_DROUGHT)
    - Risk index method
    - Drought hazard index calculated based on monthly precipitation timeseries
    - Multiple exposure and vulnerability indices (social and economic)
    - Map of relative drought risk

*   - <img src="../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
    - [Agricultural drought](../../notebooks/workflows/DROUGHTS/02_agriculture_drought/AGRICULTURE_Risk_workflow_description)
    - Damage assessment
    - Crop yield reduction
    - Total crop production and aggregated crops revenue
    - Map revenue loss

*   - <img src="../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
    - [Wildfire risk](../../notebooks/workflows/FIRE/01_wildfire_ML/Risk_workflow_description_FIRE_ML)
    - Risk index method
    - Fire susceptibility
    - Population, Economy, Ecology
    - Road, Population, Ecological and Economic risks

*   - <img src="../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
    - [Wildfire exposure](../../notebooks/workflows/FIRE/02_wildfire_FWI/FWI_Risk_Description)
    - Exposed population
    - Fire Weather Index
    - Population density
    - Exposed population

*   - <img src="../../images/icon_s/icon_s_snow.png" class="hazard-icon" />
    - [Heavy snowfall](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS)
    - Exposed population
    - Annual probability of occurrence
    - Population density
    - Exposed population

*   - <img src="../../images/icon_s/icon_s_snow.png" class="hazard-icon" />
    - [Blizzards](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS)
    - Exposed population
    - Annual probability of occurrence
    - Population density
    - Exposed population

*   - <img src="../../images/icon_s/icon_s_wind.png" class="hazard-icon" />
    - [Windstorm](../../notebooks/workflows/STORMS/01_windstorm/Risk_workflow_description_STORMS)
    - Damage assessment
    - Footprint of maximum wind gusts
    - Land use, vulnerability damage curves
    - Wind damage map

*   - 
    - Multi-hazard
    - Risk index method
    - Precipitation and temperature thresholds as proxy of floods and heatwaves
    - Airports and sensitivity and adaptive-capacity indicators
    - Risk maps of extreme temperature and precipitation

:::

</div>


## Climate data used for historical and future scenarios

<div class="full-width">

:::{list-table}
:header-rows: 1

*   - 
    - Hazard type 
    - Time horizon(s)
    - Future scenarios
    - Datasets

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [River floods (flood maps)](../../notebooks/workflows/FLOODS/02_River_flooding/FLOOD_RIVER_intro)
    - 1980, 2030, 2050, and 2080
    - RCPs 4.5 and 8.5
    - JRC and Aqueduct

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [River floods (discharge analysis)](../../notebooks/workflows/FLOODS/04_River_discharge_analysis/workflow_description_river_discharges)
    - Reference (1971-2000) and 2011-2040, 2041-2070, 2071-2100
    - RCPs 2.6, 4.5 and 8.5
    - Hydrological climate impact indicators

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [Coastal floods](../../notebooks/workflows/FLOODS/01_Coastal_flooding/Risk_workflow_description_FLOOD_COASTAL)
    - Historical (ca. 2018) and 2050
    - RCP 8.5
    - Flood maps based on GTSM

*   - <img src="../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
    - [Flood damage and population exposed](../../notebooks/workflows/FLOODS/03_Flood_damage_and_population_exposure/Risk_workflow_description_FLOOD_BUILDING_POPULATION)
    - 1980, 2030, 2050, and 2080. Population in 1975, 1990, 2000, 2015 or the population projection of either 2025 or 2030.
    - RCPs 4.5 and 8.5
    - JRC, Aqueduct, and GHSL

*   - <img src="../../images/icon_s/icon_s_heavy_rainfall.png" class="hazard-icon" />
    - [Extreme precipitation](../../notebooks/workflows/HEAVY_RAINFALL/01_Extreme_precipitation/Extreme_precipitation_Intro)
    - Historical (e.g. 1976-2005) and future periods (e.g. 2041-2070)
    - RCP 8.5
    - EURO-CORDEX

*   - <img src="../../images/icon_s/icon_s_heatwaves.png" class="hazard-icon" />
    - [Urban heatwaves](../../notebooks/workflows/HEATWAVES/01_Urban_heatwaves/heatwave_intro)
    - Historical (1971-2000) and three future periods (2011-2040, 2041-2070 and 2071-2100)
    - RCPs 4.5 and 8.5
    - EURO-CORDEX

*   - <img src="../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
    - [Drought risk](../../notebooks/workflows/DROUGHTS/01_relative_drought/Risk_workflow_description_RELATIVE_DROUGHT)
    - Historical (e.g. 1979-2019) and future periods (e.g. 2015-2100)
    - SSP1-RCP2.6, SSP3-RCP7.0, SSP5-RCP8.5
    - ISIMIP

*   - <img src="../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
    - [Agricultural drought](../../notebooks/workflows/DROUGHTS/02_agriculture_drought/AGRICULTURE_Risk_workflow_description)
    - Historical and future periods (e.g. up to 2050)
    - RCP2.6, RCP4.5, RCP8.5
    - EURO-CORDEX

*   - <img src="../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
    - [Wildfire risk](../../notebooks/workflows/FIRE/01_wildfire_ML/Risk_workflow_description_FIRE_ML)
    - Two past (1961–1990 and 1991–2010) and five future (2011–2020, 2021–2040, 2041–2060, 2061–2080 and 2081–2100) periods
    - RCPs 4.5 and 8.5
    - ECLIPS2.0 and EFFIS datasets

*   - <img src="../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
    - [Wildfire exposure](../../notebooks/workflows/FIRE/02_wildfire_FWI/FWI_Risk_Description)
    - Historical (e.g. 1981-2005) and future periods (e.g. 2021-2098)
    - RCP2.6, RCP4.5, RCP8.5
    - Fire danger indicators

*   - <img src="../../images/icon_s/icon_s_snow.png" class="hazard-icon" />
    - [Heavy snowfall](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS)
    - Historical (e.g. 1940 to present) and three future periods (2011- 2040, 2041-2070 and 2071-2100)
    - RCP2.6, RCP4.5, RCP8.5
    - ERA5 EURO-CORDEX

*   - <img src="../../images/icon_s/icon_s_snow.png" class="hazard-icon" />
    - [Blizzards](../../notebooks/workflows/SNOW/01_Heavy_snowfall_and_blizzards/Risk_workflow_description_SNOW_BLIZZARDS)
    - Historical (e.g. 1940 to present) and three future periods (2011- 2040, 2041-2070 and 2071-2100)
    - RCP2.6, RCP4.5, RCP8.5
    - ERA5 EURO-CORDEX

*   - <img src="../../images/icon_s/icon_s_wind.png" class="hazard-icon" />
    - [Windstorm](../../notebooks/workflows/STORMS/01_windstorm/Risk_workflow_description_STORMS)
    - Historical (e.g. 1979-2021)
    - –
    - Winter windstorm indicators

*   - 
    - Multi-hazard
    - Historical (e.g. 1961 to 2019) and three future periods (2011-2100)
    - RCP2.6, RCP4.5, RCP8.5
    - UERRA MESCAN-SURFEX; EURO-CORDEX

:::

</div>
