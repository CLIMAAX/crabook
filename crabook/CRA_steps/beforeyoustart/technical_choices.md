Technical choices
=======================

The second pillar of the CLIMAAX Framework consists of sound technical choices. These are a crucial part of a CRA and encompass considerations of relevant scenarios, time periods, climate datasets (observations, reanalyses, models) and the extent of local data integration. Since the Climate Risk Analysis requires technical choices in the Toolbox workflows, this section focuses on providing more context on these elements.

Technical choices should reflect the information needs of context-specific applications. Exploring these would benefit from collaboration with local climate change experts. It is recommended to build on the latest IPCC assessment where factsheets are available summarising the IPCC assessment of European [regional climate information](https://www.ipcc.ch/report/ar6/wg1/downloads/factsheets/IPCC_AR6_WGI_Regional_Fact_Sheet_Europe.pdf) and [climate impacts and risk](https://www.ipcc.ch/report/ar6/wg2/downloads/outreach/IPCC_AR6_WGII_FactSheet_Europe.pdf).

```{figure} ../../images/illustration/research_tools.jpg
---
scale: 60%
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```


## Climate change scenarios

Future climate and socioeconomic conditions, their complexities and their implications in the context of CRA need to be further understood and explored for the development of CRM strategies that are effective and build long term resilience. Future climate change is typically explored through climate models driven by different emissions scenarios of greenhouse gas emissions, pollutants, and emissions related to land use that are based on projections of future socioeconomic trends, including population, economic and technological development, energy use, and other factors. While they are not predictions of the future, but instead referred to as projections, scenarios can be used in a CRA as a valuable tool to understand how hazards and socioeconomic conditions may change in the future.

Two main approaches are currently widely used with climate models to explore future climate. These are the **Representative Concentration Pathways** (RCPs), linking present and future greenhouse gas concentrations, and **Shared Socioeconomic Pathways**[^footnote-ssp-narratives] (SSPs), developed around narratives of plausible trends of socioeconomic futures in the 21st century (country-level socioeconomic data that is used in SSPs can be explored in the [SSP Extensions Explorer](https://ssp-extensions.apps.ece.iiasa.ac.at/)). Choosing between SSPs and RCPs can lead to different CRA outcomes and associated policy considerations. Scenarios can be used to analyse climate risks within various socioeconomic futures, considering factors like population growth and technological advancement without specifying climate outcomes. Climate risks vary within each scenario group, and hence, their policy implications. For instance, SSP1 – "Taking the Green Road" emphasizes sustainability with high investment in green technologies and low population growth and thus predicts a lower level of risk in comparison to SSP3 — "A Rocky Road", characterized by regional rivalry, low technological investment, high population growth with higher vulnerability and regional disparities in future climate conditions.

Coupled SSP-RCP scenarios that are used to drive climate models span a broad plausible range of future drivers of climate change, for example *very low* or *low greenhouse gas emissions* (SSP1-RCP1.9 and SSP1-RCP2.6, respectively) under the assumption of accelerated and effective climate policy implementation, to *intermediate emissions* (e.g., SSP2-RCP4.5), or to *very high emissions scenarios* in the absence of additional climate policies (SSP3-RCP7.0 or SSP5-RCP8.5)[^footnote-ssp-naming]. Considering a range of scenarios allows for the exploration of 'scenario uncertainty' in the projected climate outcomes.

The [EUCRA report](https://www.eea.europa.eu/publications/european-climate-risk-assessment) selected two 'cornerstone' scenarios that can be compared given their divergent trends in climatic and socio-economic outcomes. It describes a Paris-compliant emission trajectory combined with modest challenges to adaptation (further referred to as the 'Warming to the Challenge scenario'), and a Paris non-compliant trajectory combined with high challenges to adaptation (further referred to as the 'Struggling in the Heat' scenario).

:::{admonition} Take home message
:class: hint

High or very high-end emissions scenarios can be explored to assess future risk. Given current policies, very high-end emissions scenarios have become less likely but cannot be ruled out. Warming levels >4°C may result from very high emissions scenarios, but can also occur from lower emission scenarios if climate sensitivity or carbon cycle feedback are higher than the best estimate.

Comparison of projected changes (anomalies) to pre-industrial, historical conditions, or a low-end emissions scenario can be helpful as a baseline to assess current and future conditions.

High-end emissions scenarios are useful to explore high risk outcomes. Comparison with more moderate risk outcomes, and the related implications for adaptation strategies, expected from low-end emissions scenarios may also be beneficial.
:::

Different climate models – global and regional – are used in climate modelling studies, including international modelling intercomparison projects, the most prevalent of which are the Coupled Climate Model Intercomparison Project – CMIP and the Coordinated Regional Downscaling Experiment – CORDEX, both coordinated by the World Climate Research Programme. Climate models are mathematical representations of the physical and biogeochemical processes and interactions that make up the Earth's climate. Results from modelling studies allow for the exploration of 'model uncertainty', in other words, how well models represent climate change by comparing multiple simulations of the same model (model ensemble) or multiple models (multi-model ensemble / intercomparison). Internal variability is another type of uncertainty of the climate system that affects regional climate, particularly on timescales of years to decades and need to be considered to understanding changes in climate conditions. To explore this source of uncertainty, each model is run multiple times to generate an ensemble forced by the same scenario.

:::{admonition} Take home message
:class: hint

Model projections are used to explore what-if scenarios of future climate based on different socioeconomic futures. Each model projection is a possible outcome, but not a prediction.

- Covering multiple scenarios to explore possible future regional climate and to assess the robustness of adaptation options in future scenarios can be a beneficial approach.
- The average of the climate model outputs can be considered a best estimate, while the spread indicates the uncertainty
:::


[^footnote-ssp-narratives]: The narratives of the SSP framework are broadly characterised as representing 'sustainability' (SSP1), a 'middle-of-the-road' path (SSP2), 'regional rivalry' (SSP3), 'inequality' (SSP4), and 'fossil fuel-intensive' (SSP5) development ([O'Neill et al., 2017](https://doi.org/10.1016/j.gloenvcha.2015.01.004)).

[^footnote-ssp-naming]: The scenarios are labeled SSPx-y, where 'SSPx' refers to the Shared Socio-economic Pathway or 'SSP' describing the socio-economic trends underlying the scenario, and 'y' refers to the approximate level of radiative forcing (in watts per square metre, or W m–2) resulting from the scenario in the year 2100.


## Global warming levels

How hazards change with increasing global warming levels can be an effective means of communication of climate change and risk since many stakeholders are familiar with a reference to global warming, particularly given the framing in the Paris Agreement. Many climatic changes at global and regional scales are directly related to increasing temperatures, becoming larger with every increment of global warming.

Regional characteristics and patterns that are consistent with a level of global warming include climate extremes, such as extreme temperatures and heavy precipitation, and, in some regions, agricultural and ecological droughts. Increases in the proportion of intense tropical cyclones; and reductions in Arctic Sea ice, snow cover and permafrost with increasing temperatures have been identified for many regions.

The consistency of patterns of change with increasing global warming tends to be higher for temperature-related variables than for variables in the hydrological cycle or variables characterizing atmospheric dynamics and for intermediate to high-end emissions scenarios than for low-end emissions scenarios.

These patterns can be explored using data from climate model projections, irrespective of scenario of whether the level of global warming is reached earlier or later in model runs. Assessing whether indices or variables are suited to be integrated in terms of global warming levels first requires analysis of scenario-based projections. This approach may not always be suitable, for example for changes in precipitation patterns, local effects related to aerosols or land use patterns can be important.

:::{admonition} Take home message
:class: hint

For near-term decisions, it is important to assess the uncertainties of the model projections, while the choice of which scenario is used is less important. From the mid-century onwards (for mid- to long-term decisions), assessing the implications of which scenario is used becomes more important.
:::


## Choice of time horizon

Scenario-based information can be analysed relative to different time horizons, or time slices, in addition to considering a continuous (transient) time series over the course of this century or even following centuries. A time horizon over the next years and decade may be more relevant for assessing immediate risks, while a longer time horizon that extends to later in the century is necessary for assessing longer-term trends. In the latest IPCC report, 2021-2040 is referred to as near term, 2041-2060 as mid-term, and 2081-2100 as long term, relative to 1850–1900, which is used as a proxy for the pre-industrial period.

:::{admonition} Take home message
:class: hint

Current conditions, including yearly variations, as well as variations in the coming decades do not significantly change until the 2050s. **Scenario choice impacts outcomes from the mid-century onwards only.**
:::


## Integration of local data

The selection of datasets for a CRA should follow the risk definition of the IPCC where risk results from the interaction of climate-related *hazards*, elements *exposed* to these hazards, and the *vulnerability* of the exposed elements. Local data (hazard, vulnerability, exposure) can help provide a more detailed and accurate picture of the potential risks and impacts of climate change. This applies to locally collected climate variables as well as data that can help identify vulnerable populations that may be disproportionately impacted by climate change. Integrating local data can also help ensure that climate risk assessments are tailored to the specific needs and concerns of local communities.

Datasets on these three risk drivers should be combined to assess risk comprehensively. The specific datasets required for the CRA rely on the risk assessment method used. For instance, if damages to buildings or infrastructure are assessed, damage functions are needed in addition to data of the exposed elements (i.e. buildings, infrastructure) to characterize their vulnerability to the particular hazard studied (e.g. flooding); if the aim of the CRA is to assess impacts on the population, data of the population and individual characteristics that determine the population's vulnerability, such as age, education levels and income, should ideally be combined.

When selecting such datasets for a CRA, the following potential limitations should be considered:

- **Availability of data**: While it seems that an abundance of datasets is available, data that can be directly used as an input to a CRA can be limited. Therefore, a first screening of suitable datasets available for the CRA at hand is necessary. To ease this process, CLIMAAX inventorised different hazard, exposure, and vulnerability datasets that are readily available for European countries under current as well as future conditions, i.e., scenarios.
- **Data uncertainties**: Any dataset selected for CRA is characterized by a range of uncertainties that stem from factors such as the data collection method, the data calculation type or the modelling approach used for producing the data. Data collection is subject to uncertainties due to measurement errors or incompleteness of collected data, for instance related to their spatial coverage. As opposed to hazard data that are often validated against in-situ measurements, exposure and vulnerability data are often modelled from secondary data sources, which adds another layer of uncertainty.
- **Spatial scale of analysis**: Data selection should be aligned with the spatial scale of the analysis. For a Europe-wide CRA, datasets that are available for all European countries are needed. These data often lack local spatial detail, which makes them less suitable for a regional- to local-scale CRA. Therefore, it is advisable to collect high-resolution data, for example from national or regional statistics offices or environmental protection agencies, whenever possible. Similarly, more datasets may be available at regional to local scales as compared to Europe-wide data. Challenges related to local data may be, for example, missing data and short data time series, as well as different spatial scales compared to gridded data sets, and these need to be accounted for in assessing uncertainties from their use for CRA.

