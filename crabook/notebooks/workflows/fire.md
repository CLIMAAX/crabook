:::{margin}
:class: workflow-info

{octicon}`mark-github;1.2em`<br>
Download the workflows from our [FIRE repository](https://github.com/CLIMAAX/FIRE) on GitHub.

{octicon}`beaker;1.2em`<br>
[Try the workflows out](https://mybinder.org/v2/gh/climaax/binder-env/main?urlpath=git-pull%3Frepo%3Dhttps%253A%252F%252Fgithub.com%252FCLIMAAX%252FFIRE%26urlpath%3Dlab%252Ftree%252FFIRE%252F%26branch%3Dmain) with binder.

{octicon}`question;1.2em`<br>
See our [how to](../workflows_how_to.md), [software](../../resources/software.md) and [contributing](../../community/contribute.md) pages for further information and help.
:::

<img alt="Fire" src="../../images/top/top_fire.png" class="page-main-photo">

# Fire

Wildfires are uncontrolled fires that spread rapidly through vegetation, often exacerbated by dry conditions and wind. These fires can cause widespread destruction to ecosystems, property, and human life, and have significant economic and environmental impacts. Wildfires are not only dependent on one factor but come from a complex interaction of climatic conditions, vegetation types, and human activities. Understanding the different types of wildfires and their driving factors is crucial for developing effective mitigation, preparedness, and adaptation strategies regarding risk management. Wildfire risk involves the likelihood of ignition, fire spread, and the intensity of the fire based on fuel conditions, weather, and topography. A risk analysis for wildfire hazard will also involve a careful choice of exposed assets and their vulnerability to wildfires of different severity.


## Approaches

- **Machine Learning-Based Hazard Mapping**: This method uses Machine Learning (ML) model to assess wildfire susceptibility by analyzing various climatic, and geographic factors. The ML model based on a Random Forest Classifier (RF) is trained on historical wildfire data and climate projections to define hazard levels. The model is able to predict the likelihood of wildfire occurrences in a specific regions. This approach provides high-resolution risk maps, allowing for detailed predictions on where wildfires are most likely to occur under different climate change scenarios.
- **Fire Weather Index (FWI)**: The FWI is a numeric rating of fire danger. It is based on the Initial Spread Index (ISI) and the Buildup Index (BUI), and is used as a general index of fire danger. Using FWI is another method used to assess wildfire danger, particularly in real-time applications. The FWI calculates fire danger based on daily weather conditions such as temperature, humidity, wind speed, and rainfall. It provides a dynamic measure of the potential for wildfire ignition and spread. The index ranges from low to extreme fire danger and is often used for immediate operational decision-making by fire management agencies. In this workflow, future trends of fire danger are depicted based on different climate change scenarios.


## Workflows

::::{grid}
:gutter: 3

:::{grid-item-card} Wildfire (ML approach)
:columns: 4
:link: FIRE/01_wildfire_ML/Risk_workflow_description_FIRE_ML
:link-type: doc
:img-bottom: ../../images/top/top_fire.png
:::

:::{grid-item-card} Wildfire (Fire Weather Index)
:columns: 4
:link: FIRE/02_wildfire_FWI/FWI_Risk_Description
:link-type: doc
:img-bottom: ../../images/top/top_fire.png
:::

:::{grid-item-card} FWI response and affected population
:columns: 4
:link: FIRE/03_wildfire_response/workflow_description
:link-type: doc
:img-bottom: ../../images/top/top_fire.png
:::

::::
