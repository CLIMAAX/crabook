# Exercise

How do we put our knowledge on climate scenarios and models into practice? In this exercise, we will explore the range of potential climate futures for your region and help you discover why these changes occur. These plausible changes are highlighted using individual climate model projections that can be reviewed for future weather patterns in one of the other CLIMAAX risk workflows.

We introduce each of the steps using a real-life example in Latvia. Be sure to expand the 'Latvian example' sections to see how we execute and interpret the steps for a real study:


::::{admonition} Latvian example
:class: note dropdown

For our example, we take the Lielupe basin, covering parts of Lithuania and Latvia. For Latvia, the basin has been characterised as a flood zone of national importance. See the figure below for an indication of the flood challenges in the region. Information on how these floods will develop in the future is of significant value as more and more adaptation plans and investments will need to be made as we head into the mid-century. 

:::{figure} ../../../images/latvia_flood.png
:width: 400px
:align: center

Flood extent in the Lielupe Basin
:::
::::


## 1. Define locally relevant climatic impact drivers

Begin by identifying the specific climatic conditions that contribute to your climate-related challenge. The more specific you can be, the easier it will be to track changes and predict future hazards. Below is a set of key climate variables that can be explored on a yearly basis or for specific seasons.

- Mean Temperature
- Minimum Temperature
- Minimum of Minimum Temperature
- Frost Days
- Heating Degree Days
- Maximum Temperature
- Maximum of Maximum Temperature
- Days with Temperature > 35°C
- Days with Temperature > 35°C (Bias Corrected)
- Days with Temperature > 40°C
- Days with Temperature > 40°C (Bias Corrected)
- Cooling Degree Days
- Total Precipitation
- Maximum 1-Day Precipitation
- Maximum 5-Day Precipitation
- Consecutive Dry Days
- Standardized Precipitation Index (6 months)
- Total Snowfall
- Surface Wind Speed


::::{admonition} Latvian example
:class: note dropdown

Flooding in Latvia has two main flood drivers in Latvia, flooding is primarily driven by two factors. One is the snowpack accumulated in winter that rapidly melts and the melt water flows into rivers during spring. Another driver is spring precipitation, which saturates the soil and when this soil is confronted with extra rainfall, the region starts to flood.

To analyse developments for the two flood mechanisms we select the following climate impact drivers: 

- Average precipitation March till May 
- Snowfall in December till February
::::


## 2. Collect observation trends from the interactive climate atlas

To get a better understanding of what climate trend we can expect we will explore what climate trend is already observed. But before we begin we need to define our region using the IPCC climate zones. The IPCC divides Europe into four climatic zones. These zones are based on areas with similar climate typologies. For each of these zones, climate projection statistics are available.

:::{figure} ../../../images/ipcc_regions_map.png
:width: 350px
:align: right

IPCC climate zones in Europe. [IPCC Atlas](https://doi.org/10.1017/9781009157896.021)
:::

- NEU - Northern Europe
- WCE - West and Central Europe
- MED - Mediterranean
- EEU - Eastern Europe


We analyse past climate behaviour by following the next steps: 

1. Go to [https://atlas.climate.copernicus.eu/atlas](https://atlas.climate.copernicus.eu/atlas/KphACYrm)
2. Select your region
3. Select the historical observation data set "era5-land"
4. Select climate impact drivers and season of interest
5. Click on "Regional Information" for more information 
6. Spot potential trends


::::{admonition} Latvian example
:class: note dropdown

As Latvia is situated on the border between NEU and WCE we need to choose which region. Since the European risk assessment considers the Baltic states to be part of NEU we also choose this region. Overall, there has been an upward trend in ERA5 data for precipitation as can be seen from the graph.

:::{figure} ../../../images/latvia_pr-ERA5-Land_timeseries-NEU.png
:width: 90%
:align: center

Precipitation trend in spring for NEU (https://atlas.climate.copernicus.eu/atlas)
:::

In the whole of NEU we find that snow has a slightly increasing trend. The increasing rainfall trend might have contributed to more snow accumulation than temperature increases have reduced snow accumulation.

:::{figure} ../../../images/latvia_prsn-ERA5-Land_timeseries-NEU.png
:width: 90%
:align: center

Snow trend in winter in NEU (https://atlas.climate.copernicus.eu/atlas)
:::

Based on what we know of the climatic impact drivers we would expect that there are slight increases in both snowmelt and saturated soil floods.
::::


## 3. Climate scenarios dashboard

Use our [**climate scenarios dashboard**](https://handbook.climaax.eu/dashboards/scenarios) to collect information on simulation trends.

::::{admonition} Latvian example
:class: note dropdown

{numref}`fig-scenarios-excercise-latvia-cascade-precip` is obtained by selecting the change in Total Precipitation for the season Mar-May for the year 2041 for the NEU region. We notice that that the individual model projections span a much larger range of change than the SSP averaged scenarios. Here we see that individual models behave differently towards the same emission scenarios. This can be either due to differences in the way they represent physical processes or because they are subject to randomness of the weather and might have hit a cold snap or dry spell in their simulations.

:::{figure} ../../../images/latvia_cascade_plot_NEU_precip_marmay_2050.png
:name: fig-scenarios-excercise-latvia-cascade-precip
:width: 90%
:align: center

Plot of uncertainties for climate variable in NEU
:::

For precipitation, we notice that when emissions increase, SSP model mean changes increase. Individual model projections all indicate an increase in spring precipitation, yet the amount is more unclear. When analysing what could happen in the future we see that in each SSP small increases can occur (<5%) while high increases (>15%) only occur under high emission scenarios. When using this information with known flood mechanisms where soils are saturated and extra rain leads to high discharges, we can expect more of these events to occur. An increase of 10% extra precipitation in the spring season is not unlikely across models and can lead to severe changes in discharges.

Snowfall ({numref}`fig-scenarios-excercise-latvia-cascade-snow`) is expected to decrease when emissions, and thus also temperatures, increase. Given that Northern Europe historically received roughly 1.3 mm/day of snow in winter the range given is between a 24% reduction to a 7% increase in snowfall. Few models project an increase and this might only be due to randomness of weather. However, 7% extra snowfall in winter snowpack can result in large changes in melt discharges and might be worth investigating as a potential 'what if' scenario. A reduction of 24% is also interesting as it greatly limits snow accumulation and therefore the snow melt flood mechanism.

:::{figure} ../../../images/latvia_cascade_plot_NEU_snow_decfeb_2050.png
:name: fig-scenarios-excercise-latvia-cascade-snow
:width: 90%
:align: center

Plot of uncertainties for climate variable in NEU
:::
::::


## 4. Look into IPCC reports why this occurs

To get a better sense of why there is such a large range of what could happen in the future we can dive into the IPCC reports to give some clarity. In the reports a scientific background is given to many of the projected changes. Here are some useful links:

- [IPCC Climate Change 2021: The Physical Science Basis](https://www.ipcc.ch/report/ar6/wg1/) (for a chapter overview)
- [Chapter 8: Water Cycle Changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/)
- [Chapter 10: Linking Global to Regional Climate Change](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-10/)
- [Chapter 11: Weather and Climate Extreme Events in a Changing Climate](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/)
- [Chapter 12: Climate Change Information for Regional Impact and for Risk Assessment](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-12/)
- [Atlas](https://www.ipcc.ch/report/ar6/wg1/chapter/atlas/)
