Risk Analysis
=======================

```{figure} ../../images/framework/il_framework_ToolboxSteps_FigB_Risk_Analysis_ring.png
---
width: 550px
name: Framework_RiskAnalysis
```

Once the Risk Exploration is completed, the next step is to apply the risk workflow and scenario decisions in the Risk Analysis to estimate risk in a given region. The risk workflows consider four main steps to calculate a region’s individual Climate Risk: *Prepare application, choose and access data, estimate the hazard and combine with exposure and vulnerability data*. A {abbr}`Python installation (Successful CLIMAAX applicants can run the workflows on the ECMWF servers through JupyterHub hosted at ECMWF cloud infrastructure. In that environment, all workflows are readily available together with the necessary libraries.)` and technical knowledge (e.g., of Python or similar modelling tools and GitHub) is needed for the application of the risk analysis workflows.

For **preparing the application** of the selected workflow the user can find all the necessary information in the respective workflow. For this, the user can follow the instructions provided in the Readme of the repository.

**Choosing and accessing data** on hazard, exposure, and vulnerability requires a decision on whether to use precalculated European/large-scale datasets available in the CLIMAAX Handbook about hazard (e.g. wildfire, flood water depth, and heatwave), exposure (e.g. population, critical infrastructure), and vulnerability (e.g. GDP) or to implement [own local data](#framework-ownlocaldata). The latter requires advanced users, while basic users can benefit from data provided through workflows. Once this is completed, it is possible to visualize the maps of hazard, exposure, and vulnerability to have a preliminary idea of the hotspots areas potentially affected by high risk. 

The **Hazard** can be estimated either through precalculated, large-scale European hazard maps or through individual, local data hazard maps. As climate risk not only depends on climate-related hazards but also on the exposure and vulnerability of a region/society to the respective hazard, the final step combines hazard data with **Exposure and Vulnerability** to assess risk according to the equation:

> Risk = Hazard × Exposure × Vulnerability

Different visualisation options can describe the risk estimation ({numref}`framework-visexamples`): For example, risk can be visualised through a risk map with different colors (e.g., green low risk, red high risk), a map showing exposed population or a diagram of changes of exposed population for a certain area and specific risk categories (e.g. time series of population exposed to high drought risk). More details about the Risk Analysis step, risk workflows, and risk visualization are reported in the CLIMAAX [Deliverable 2.4](https://files.cmcc.it/climaax/CLIMAAX_D2.4.pdf).  


```{figure} ../../images/framework_visexamples.png
:name: framework-visexamples

Examples of the different outputs from the three risk assessment approaches with **A** drought risk indexing, **B** coastal flood damage, and **C** drought exposed population. Credit: CLIMAAX consortium.
```

:::{admonition} Event-based Climate Storylines
:class: note

Event-based physical climate storylines (or in brief: climate event storylines) are a complementary approach to produce climate information relevant for decision making. You can find more information on this qualitative risk analysis option [here](https://www.climaax.eu/wp-content/uploads/2024/07/CLIMAAX_D1.4.pdf).
:::

:::{tip}
Including the estimation of current climate risk of the respective hazard can serve as a baseline for tracking future trends, which is relevant for the Monitoring and Evaluation step of the CRA.
:::
