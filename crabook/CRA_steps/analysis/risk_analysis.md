Risk Analysis
=======================

```{figure} ../../images/Framework_RiskAnalysis.png
---
height: 400px
name: Framework_RiskAnalysis
```

Once the Risk Identification is completed, the Risk Analysis allows for the quantification of the risk in a given region. This is carried out through the CLIMAAX Toolbox. In the previous section, the user defined the type of risk workflow and hazard they are interested in; here, the user will follow 5 main steps to calculate their individual Climate Risk. Technical knowledge of Python or similar modelling tools is needed for the application of the risk analysis workflows.
The first step is to **Set Up the Environment** for the CRA. The risk workflows, described and implemented within the CLIMAAX handbook, require a Python installation, cloning of relevant GitHub repositories and the installation of necessary packages. For this, the user can follow instructions provided in the Readme of the repository.
Second, the user will **Access Data** on *hazard*, *exposure*, and *vulnerability*. Based on the region of interest, the user can decide whether to use pre-calculated European/large-scala datasets available in the CLIMAAX Toolbox about hazard (e.g. precipitation, water depth and flood extent), exposure (e.g. population, critical infrastructures), and vulnerability (e.g. age, income) or to implement their own, local data. The latter regards advanced users, while basic users profit from data that is provided through workflows. Once this is completed, it will be possible to visualize the maps of hazard, exposure, and vulnerability to have a preliminary idea of the hotspots area possibility affected by high risk.
Third, the user will be able to **Calculate the Hazard** based on the information and approach selected. As climate risk not only depends on climate-related hazards but also on the exposure and vulnerability of a region/society to the respective hazard, the fourth step **combines hazard data with Exposure and Vulnerability** to assess risk according to the equation

Risk = Hazard × Exposure × Vulnerability

The workflows follow three main approaches:
- **Exposed assets and/or population** – Risk as overlap between hazard information and exposure.
- **Economic damage analysis** – Hazard combined with exposure and vulnerability data using damage functions.
- **Indicators product** - Risk as the product between hazard, exposure, and vulnerability.
- 
Finally, following these steps Climate Risk is calculated and different visualization options are proposed. For example, risk can be visualized as risk map using different colors for different categories of risk (e.g. red as high risk, while green as low risk). Moreover, the user can visualize a map of the exposed population for a certain moment, or it can visualize a diagram of changes of exposed population for a certain area and specific risk categories (e.g. time series of population exposed to high drought risk).

```{admonition} Event-based climate storylines as complementary approach
:class: hint
Future storylines (as a combination of past events and climate change information) are helpful to explore what-if-things-had-been-different situations by e.g. exploring intensity or frequency of climatic drivers and the societal response. Climatic drivers include long term changes but also the timing, spatial patterns, and co-occurrence of events in different regions; Future economic and social dimensions can refer to expected changes in demography, economic structure and many more aspects of societal response.
```
