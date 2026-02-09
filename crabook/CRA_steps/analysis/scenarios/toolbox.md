# Climate scenarios in the CLIMAAX Toolbox

Two types of climate scenarios are currently widely used to explore future climate conditions. These are the Representative Concentration Pathways (RCPs), representing greenhouse gas concentrations, and Shared Socioeconomic Pathways (SSPs), developed around narratives of plausible trends of socioeconomic futures in the 21st century.

:::{figure} ../../../images/scenarios-narratives.png

Representation of SSP narratives, RCPs and future socio-economic developments.
:::


## Representative Concentration Pathways – RCPs

**RCPs** help us understand a range of potential futures based on different assumptions of future greenhouse gas emissions. This trend is influenced by population growth, economic activity, socio-economic developments, land-use change and binding targets in emission reductions. Combinations of these assumptions lead to different levels of future greenhouse gas emissions which are used in climate models to simulate the climate response.

RCPs are usually described in a set of four pathways that lead to different levels of 'radiative forcing' (the extra energy trapped in the Earth system that warms the planet) caused by humans due to the emission of greenhouse gases. The RCPs cover radiative forcing levels of 2.6, 4.5, 6 and 8.5 W/m² compared to the pre-industrial period by the end of the century. They contain relevant information such as greenhouse gas emissions, air pollutants and land use.

- **RCP 2.6** is the low emissions scenario where we limit human-caused climate change. Carbon emissions reduce to near zero before the end of the century.
- **RCP 4.5**, a medium emissions scenario, represents a future where we include measures to limit human-caused climate change. This scenario requires global carbon emissions to stabilize by end of the century.
- **RCP 6.0** uses a high greenhouse gas emission rate and is a stabilization scenario where total radiative forcing is stabilized after 2100 by employment of a range of technologies and strategies for reducing greenhouse gas emissions.
- **RCP 8.5**, the high emissions scenario, represents a future where there are few restrictions on emissions. Emissions continue to increase rapidly through this century, and only stabilize by 2250.

The RCPs have been specifically designed as input to climate models and have become fully integrated scenarios, once they are combined with different SSPs ([van Vuuren et al. 2011](https://doi.org/10.1007/s10584-011-0148-z); [van Vuuren et al. 2014](https://doi.org/10.1007/s10584-013-0906-1)). 


## Future socio-economic developments

Societal factors such as urban development, infrastructure design, land-use decisions as well as policies that increase or decrease future emissions can either amplify or reduce climate-related risks. Poorly planned urban areas will suffer more from extreme weather, while well-designed cities with resilient infrastructure can better withstand these events.

Understanding how a region might develop in the future is crucial for assessing how societal choices may increase or decrease climate risks. Factors such as population growth, economic policies, and building practices can make some areas more vulnerable, while sustainable planning and adaptation measures can reduce risk. By considering these societal drivers alongside climate projections, we can create more effective strategies to minimize future harm.

There are global SSP-related datasets available for several of the above-mentioned factors that can form the basis for the socio-economic scenario analyses. However, at the national level more detailed scenario information may be present or regional scenarios can be defined based on local knowledge.


## Fully integrated scenarios – SSPs

The **Shared Socioeconomic Pathways (SSPs)** are part of the most recent IPCC6 scenario framework that refer to possible socio-economic developments instead of emissions. They describe plausible major global developments in the form of narratives that together lead to challenges for emission mitigation and adaptation to climate change in the future. Five SSP pathways have been developed by the international scientific community,  allowing to explore climate change across a range of very different futures, see {numref}`fig-scenarios-temperature-change`:

- **SSP1-1.9 (Sustainability)**: A low-challenge scenario aiming for carbon neutrality by mid-century, keeping warming near 1.5°C, aligned with the Paris Agreement.
- **SSP1-2.6 (Middle-of-the-road development)**: Also sustainable, but with slightly higher emissions, leading to roughly 2°C warming, similar to the older RCP2.6.
- **SSP2-4.5 (Inequality)**: Follows historical trends with uneven development, resulting in medium challenges and radiative forcing of 4.5 W/m², similar to RCP4.5.
- **SSP3-7.0 (Regional rivalry)**: High challenges with nationalism and conflict, slowing development and leading to medium-high emissions and forcing of 7.0 W/m².
- **SSP5-8.5 (Fossil-fuelled development)**: Rapid, fossil-fuel-intensive growth with high challenges, leading to the highest emissions, forcing of 8.5 W/m², and significant warming, similar to RCP8.5. 

:::{figure} ../../../images/scenarios-temperature-change.png
:name: fig-scenarios-temperature-change

Temperature change under the five SSP scenarios used by the IPCC. Image taken from [IPCC, 2021](https://dx.doi.org/10.1017/9781009157896.001).
:::


## Scenarios, models and exploration options in workflows

<div class="full-width">

:::{list-table} Overview of climate hazard workflows, emission scenarios, and user customization options. The table highlights how each hazard incorporates climate models and scenarios, whether they allow user input or rely on emission averaged data for analysis.
:widths: 1 8 3 5 10 20
:header-rows: 1

* - 
  - Workflow
  - Emission Scenarios
  - \# Climate Models
  - Exploration option
  - Climatic impact drivers in the [example exercise](./excercise)
* - <img src="../../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
  - River flooding	
  - RCP4.5, RCP8.5
  - 5 models
  - Model average or analyse individual models
  -	- Total Precipitation
    - Maximum 1‑Day Precipitation
    - Maximum 5‑Day Precipitation
    - Total snowfall
    - SPI (6 months) (for wet soil conditions)
* - <img src="../../../images/icon_s/icon_s_floods.png" class="hazard-icon" />
  - Coastal flooding
  - RCP8.5
  - 5 models
  - Model average
  - - Surface Wind Speed (for storm surge)
* - <img src="../../../images/icon_s/icon_s_heavy_rainfall.png" class="hazard-icon" />
  - Heavy rainfall
  - RCP2.6, RCP4.5, RCP8.5
  - Complete CORDEX set
  - Analyse individual models
  - - Maximum 1‑Day Precipitation
* - <img src="../../../images/icon_s/icon_s_heatwaves.png" class="hazard-icon" />
  - Heatwaves
  - RCP4.5, RCP8.5
  - 5 models
  - Model average or analyse spread between models
  - - Maximum Temperature
    - Maximum of Maximum Temperature
    - Days with Temperature > 35 °C
    - Days with Temperature > 35 °C (Bias Corrected)
    - Days with Temperature > 40 °C
    - Days with Temperature > 40 °C (Bias Corrected)
* - <img src="../../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
  - Relative droughts
  - SSP1-2.6, SSP3-7.0, SSP5-8.5
  - 5 models
  - Model average
  - - Total Precipitation
    - Consecutive Dry Days
    - Standardized Precipitation Index (6 months)
* - <img src="../../../images/icon_s/icon_s_droughts.png" class="hazard-icon" />
  - Agricultural drought
  - RCP2.6, RCP4.5, RCP8.5
  - Complete CORDEX set
  - Analyse individual models
  - - Total Precipitation
    - Consecutive Dry Days
    - Standardized Precipitation Index (6 months)
    - Mean Temperature (if evapotranspiration/heat stress matters)
* - <img src="../../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
  - Wildfire (ML)
  - RCP4.5, RCP8.5
  - 5 models
  - Analyse individual models
  - - Maximum Temperature
    - Surface Wind Speed
    - Consecutive Dry Days
    - Standardized Precipitation Index (6 months)
    - Total Precipitation (for moisture availability)
* - <img src="../../../images/icon_s/icon_s_fire.png" class="hazard-icon" />
  - Wildfire (FWI)
  - RCP2.6, RCP4.5, RCP8.5
  - 6 models
  - Analyse individual models
  - - Maximum Temperature
    - Surface Wind Speed
    - Consecutive Dry Days
    - Standardized Precipitation Index (6 months)
    - Total Precipitation (for moisture availability)
* - <img src="../../../images/icon_s/icon_s_snow.png" class="hazard-icon" />
  - Snow	
  - RCP2.6, RCP4.5, RCP8.5
  - Complete CORDEX set
  - Analyse individual models
  - - Total Snowfall
    - Mean Temperature (to account for melt/freeze conditions)
* - <img src="../../../images/icon_s/icon_s_wind.png" class="hazard-icon" />
  - Windstorms
  - No projections
  - Historical events
  - Users create storylines by displacing past events
  - No future projections used
:::

</div>
