# Exercise

How do we put the knowledge provided above into practice? In this exercise, we will explore the range of potential climate futures for your region and help you discover why these changes occur. These plausible changes are highlighted using individual climate model projections that can be reviewed for future weather patterns in one of the other CLIMAAX risk workflows. To help guide you we have worked out an example. We introduce each of the steps using a real-life example in Latvia. Be sure to expand the Latvian example section if you want to see how we execute and interpret each step for a real study.

1. Define locally relevant climatic impact drivers
2. Collect observation trends
3. Collect simulation trends
4. Look into IPCC reports why this occurs

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


## 2. Collect observation trends from interactive climate atlas

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

As Latvia is situated on the border between NEU and WCE we need to choose which region. Since the European risk assessment considers the Baltic states to be part of NEU we also choose this region. The graphs below are obtained frpm https://atlas.climate.copernicus.eu/atlas. Overall, there has been an upward trend in ERA5 data for precipitation as can be seen from the graph.

:::{figure} ../../../images/latvia_pr-ERA5-Land_timeseries-NEU.png
:width: 800px
:align: center

Precipitation trend in spring for NEU
:::

In the whole of NEU we find that snow has a slightly increasing trend. The increasing rainfall trend might have contributed to more snow accumulation than temperature increases have reduced snow accumulation.

:::{figure} ../../../images/latvia_prsn-ERA5-Land_timeseries-NEU.png
:width: 800px
:align: center

Snow trend in winter in NEU
:::

Based on what we know of the climatic impact drivers we would expect that there are slight increases in both snowmelt and saturated soil floods.
::::


## 3. Collect simulation trends

Go to the [**climate scenarios dashboard**](https://climaax.github.io/crabook-test/dashboards/scenarios) to collect information on simulation trends.


::::{admonition} Latvian example
:class: note dropdown

The figure below is obtained by selecting the change in Total Precipitation for the season Mar-May for the year 2041 for the NEU region. We notice that that the individual model projections span a much larger range of change than the  SSP averaged scenarios. Here we see that individual models behave differently towards the same emission scenarios. This can be either due to differences in the way they represent physical processes or because they are subject to randomness of the weather and might have hit a cold snap or dry spell in their simulations.

For precipitation we notice that when emissions increase SSP model mean changes increase. Individual model projections all indicate an increase in spring precipitation, yet the amount is more unclear. When analysing what could happen in the future we see that in each SSP small increases can occur (<5%) while high increases (>15%) only occur under high emission scenarios. When using this information with known flood mechanisms where soils are saturated and extra rain leads to high discharges, we can expect more of these events to occur. An increase of 10% extra precipitation in the spring season is not unlikely across models and can lead to severe changes in discharges.

Snowfall is expected to decrease when emissions, and thus also temperatures increase. Given that Northern Europe historically received roughly 1.3 mm/day of snow in winter the range given is between a 24% reduction to a 7% increase in snowfall. Few models project an increase and this might only be due to randomness of weather. However, 7% extra snowfall in winter snowpack can result into large changes in melt discharges and might be worth investigating as a potential ‘what if’ scenario. A reduction of 24% is also interesting as it greatly limits snow accumulation and therefore the snow melt flood mechanism.

:::{figure} ../../../images/latvia_cascade_plot_NEU_precip_marmay_2050.png
:width: 100%
:align: center

Plot of uncertainties for climate variable in NEU
:::

:::{figure} ../../../images/latvia_cascade_plot_NEU_snow_decfeb_2050.png
:width: 100%
:align: center

Plot of uncertainties for climate variable in NEU
:::
::::


## 4. Look into IPCC reports why this occurs

To get a better sense of why there is such a large range of what could happen in the future we can dive into the IPCC reports to give some clarity. In the reports a scientific background is given to many of the projected changes. To get started we can use [ChatClimate](https://www.chatclimate.ai/). This is an AI tool that is specialised in the IPCC report and guides users towards the chapters and information they need. A good starting point to ask questions is to use the following template.

- *"What are the expected changes in [region] for [climate impact variable] and why do these changes occur? Also include reasons for differences across climate models."*

if you want to know more or do not understand parts of the answers follow up by using. 
- *"What do you mean by this? [copy text from anwer you want to know more about]"*

One can also dive into the IPCC reports and search for explanations. Here are some useful links:
- [IPCC Climate Change 2021: The Physical Science Basis](https://www.ipcc.ch/report/ar6/wg1/) (for a chapter overview)
- [Chapter 8: Water Cycle Changes](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/)
- [Chapter 10: Linking Global to Regional Climate Change](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-10/)
- [Chapter 11: Weather and Climate Extreme Events in a Changing Climate](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/)
- [Chapter 12: Climate Change Information for Regional Impact and for Risk Assessment](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-12/)
- [Atlas](https://www.ipcc.ch/report/ar6/wg1/chapter/atlas/)

::::{admonition} Latvian example
:class: note dropdown

Here we dive into the details of why precipitation is expected to increase in Northern Europe and why snowfall is decreasing. Using the information below we have a good basis to dive into the reports if needed or reach out to other experts to tell us more.

**Precipitation**

When asking ChatClimate: *"What are the expected changes in NEU for average precipitation amounts in spring and why do these changes occur? Also include reasons for differences across climate models."* it gives the following answer.

> "The expected changes in average precipitation amounts in NEU (North-Eastern Europe) for spring are not explicitly mentioned in the provided information. However, it is reported that in the winter half year, NEU is likely to have increased mean precipitation associated with increased atmospheric moisture and moisture convergence, and intensification in extratropical cyclone activity (Page: 72, Reference: IPCC_AR6_WGI_Atlas). The changes in precipitation are driven by the increase in atmospheric water vapour (about 7% per 1°C of warming near the surface), although this is modulated by various dynamical changes. Changes in average precipitation are also driven by slower processes that constrain future changes over the globe to only 2-3% per 1°C of warming near the surface (Page: 96, Reference: IPCC_AR6_WGI_Chapter11). The differences across climate models are due to pronounced internal variability in this region, particularly NAO (North Atlantic Oscillation) and AMO (Atlantic Multidecadal Oscillation). The spread in climate model projections is still substantial, partly due to these factors (Page: 72, Reference: IPCC_AR6_WGI_Atlas). Additionally, near-term projected changes in precipitation are uncertain mainly because of natural internal variability, model uncertainty, and uncertainty in natural and anthropogenic aerosol forcing (Page: 33, Reference: IPCC_AR6_WGI_Chapter04). However, without more specific information about spring precipitation in NEU, there is not enough info to answer the question fully."

When asking *"What do you mean by this? The differences across climate models are due to pronounced internal variability in this region, particularly NAO (North Atlantic Oscillation) and AMO (Atlantic Multidecadal Oscillation). The spread in climate model projections is still substantial, partly due to these factors (Page: 72, Reference: IPCC_AR6_WGI_Atlas)."* We learn more.

> "The statement refers to the variability in climate model projections due to internal climate factors, specifically the North Atlantic Oscillation (NAO) and the Atlantic Multidecadal Oscillation (AMO). These are modes of climate variability that can significantly influence regional climates. The NAO, for instance, is the main mode of climate variability over the North Atlantic-European region in all seasons, affecting temperature, precipitation, wind patterns, and even the occurrence of extreme weather events (Page: 4, Reference: IPCC_AR6_WGI_AnnexIV). It can also lead to significant uncertainty in future changes of regional climate, as seen in the CMIP5 RCP8.5 scenario where an increased amplitude and frequency of the NAO during winter is associated with higher precipitation in northern Europe and lower precipitation in southern Europe (Page: 81, Reference: IPCC_AR6_WGI_Chapter08). The AMO, while not explicitly described in the provided information, is another mode of climate variability that can influence climate model projections. The spread in climate model projections refers to the range of possible outcomes predicted by different climate models. This spread is substantial, meaning there is a wide range of possible future climates predicted by these models, partly due to the influence of internal variability factors like the NAO and AMO (Page: 72, Reference: IPCC_AR6_WGI_Atlas). However, it's also noted that some climate models may have deficiencies that cause the predictable signal associated with the NAO to be weaker than in nature, while others, such as that linked to the SAM, are more consistent with observations (Page: 12, Reference: IPCC_AR6_WGI_Chapter04). This could also contribute to the spread in climate model projections (In-house knowledge)."

**Snowfall**

When asking ChatClimate: *"What are the expected changes in NEU for average snowfall amounts in winter and why do these changes occur? Also include reasons for differences across climate models."*

> "The expected changes in average snowfall amounts in winter in North-Eastern Europe (NEU) are likely to decrease due to global warming. This is because regional warming is virtually certain to extend the observed downward trends in snow accumulation, snow water equivalent, and length of the snow cover season in NEU (Page:76, Reference:IPCC_AR6_WGI_Atlas). This is supported by regional and global multi-model and/or single-model ensemble projections including CMIP5, PRUDENCE, ENSEMBLES, and EURO-CORDEX. The changes are attributed to changes in the snowfall fraction of precipitation and to increased snowmelt (Page:76, Reference:IPCC_AR6_WGI_Atlas). The differences across climate models can be due to the different ways they represent physical processes and their interactions. For example, Terzago et al. (2017) showed a large positive bias in the amplitude of the annual snow cycle of EURO-CORDEX 0.11° simulations driven by GCM projections, while reanalysis-driven RCMs showed good agreement with in situ observations (Page:76, Reference:IPCC_AR6_WGI_Atlas). Furthermore, changes in precipitation extremes (including both rainfall and snowfall extremes) can differ drastically from those in average precipitation. The intensification of extreme precipitation is driven by the increase in atmospheric water vapour (about 7% per 1°C of warming near the surface), although this is modulated by various dynamical changes. In contrast, changes in average precipitation are driven not only by moisture increases but also by slower processes that constrain future changes over the globe to only 2-3% per 1°C of warming near the surface (Page:96, Reference:IPCC_AR6_WGI_Chapter11). In summary, the expected changes in NEU for average snowfall amounts in winter are likely to decrease due to global warming, and the differences across climate models can be attributed to the different ways they represent physical processes and their interactions (In-house knowledge)."
::::
