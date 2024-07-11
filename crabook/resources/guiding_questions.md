# Guiding questions and answers

:::{note}
Page to explore options for how to display guiding questions example answers in the handbook.
:::

Design elements already implemented in jupyterbook that could be used here:

- Headings
- Cards and card carousels: https://sphinx-design.readthedocs.io/en/furo-theme/cards.html
- Dropdowns: https://sphinx-design.readthedocs.io/en/furo-theme/dropdowns.html
- Tabs: https://sphinx-design.readthedocs.io/en/furo-theme/tabs.html

Some ideas:

- Steps, sub-steps and questions as plain headings will show up in the right sidebar navigation. A single page is nice for searching with `Ctrl+F`, but this could result in a very long page here. Alternatively, we could have separate pages for each step, sub-step or even question.
- We can add a background image, icons or some color to the cards.
- A link to the corresponding framework page with every question would allow users to navigate back an forth without having to scroll much (for examples for how this could look, see below).
- We should also link to this page from the guiding questions boxes on the framework pages.
- We can mix and match the styles shown below.

## Scoping

### Objectives

Use card header for question and footer for link to framework page:

:::{card}
**What is your objective of the CRA?**
^^^

1) Identify risk hotspots, adapt to changing hazards, enhance community resilience.
2) Increase awareness, preparedness and adaptation, e.g., to improve health and urban planning or to promote effective forest management.
3) Enhance awarenss and adaptation, inform policy makers, prioritize risks.
4) Effective territorial planning; inform policy-makers and improve decision-making.
5) System for regular CRA, scientific support, city planning and development.

+++
[Scoping › Set the context](../CRA_steps/scoping/scoping.md#set-the-context)
:::

Use card title instead of header and include link to framework page included in title instead of footer:

:::{card} [Scoping](../CRA_steps/scoping/scoping.md) › [Objectives](../CRA_steps/scoping/scoping.md#define-objectives) › What is the purpose of your CRA? What is the expected outcome?

Purpose:
1) Understand impacts of CC and update plans and protocols of civil protection.
2) Comprehend how changes in climate indicators and hazards may alter vulnerabilities across different sectors and demographics.
3) Support CRM in implementing concrete adaptation measures, recognizing regional differences.

Outcome:
1) Provide information on expected changes in hazards and their impacts.
2) Identify and confirm key risks  and enhance preparedness.
3) Minimize potential climate change impacts on society, prioritize significant climate risks, estimate the magnitude and likelihood of impacts, and create a basis for developing and implementing adaptation strategies
:::

Using dropdowns instead of cards with links to the framework pages at the end:

:::{dropdown} What is your objective of the CRA?

1) Identify risk hotspots, adapt to changing hazards, enhance community resilience.
2) Increase awareness, preparedness and adaptation, e.g., to improve health and urban planning or to promote effective forest management.
3) Enhance awarenss and adaptation, inform policy makers, prioritize risks.
4) Effective territorial planning; inform policy-makers and improve decision-making.
5) System for regular CRA, scientific support, city planning and development.

---
[Scoping](../CRA_steps/scoping/scoping.md) › [Set the context](../CRA_steps/scoping/scoping.md#define-objectives)
:::

:::{dropdown} What is the purpose of your CRA? What is the expected outcome?

Purpose:
1) Understand impacts of CC and update plans and protocols of civil protection.
2) Comprehend how changes in climate indicators and hazards may alter vulnerabilities across different sectors and demographics.
3) Support CRM in implementing concrete adaptation measures, recognizing regional differences.

Outcome:
1) Provide information on expected changes in hazards and their impacts.
2) Identify and confirm key risks  and enhance preparedness.
3) Minimize potential climate change impacts on society, prioritize significant climate risks, estimate the magnitude and likelihood of impacts, and create a basis for developing and implementing adaptation strategies

---
[Scoping](../CRA_steps/scoping/scoping.md) › [Objectives](../CRA_steps/scoping/scoping.md#define-objectives)
:::

### Set the context

Displaying multiple answers with a card carousel (scrolling horizontally):

::::{card-carousel} 1

:::{card} Which sectors are relevant in your regions and which ones may be impacted by climate risk?

- Agriculture
- Forestry
- Transportation
- Infrastructure and building
- Energy
- Costal Management
- Health
- Civil Protection
- Landscape (city) planning
- Tourism

Any sector with significant proportion of working time happening outdoors
:::

:::{card} Which sectors are relevant in your regions and which ones may be impacted by climate risk?

Industry (mainly car production) and services sectors are relevant. Main impact on schools, health care, social services and transport infrastructure.
:::

::::

Displaying multiple answers with tabs inside a card:

:::::{card} Which sectors are relevant in your regions and which ones may be impacted by climate risk?

::::{tab-set}

:::{tab-item} Answer 1

- Agriculture
- Forestry
- Transportation
- Infrastructure and building
- Energy
- Costal Management
- Health
- Civil Protection
- Landscape (city) planning
- Tourism

Any sector with significant proportion of working time happening outdoors
:::

:::{tab-item} Answer 2

Industry (mainly car production) and services sectors are relevant. Main impact on schools, health care, social services and transport infrastructure.
:::

::::

[Scoping › Set the context](../CRA_steps/scoping/scoping.md#set-the-context)
:::::

And the same with tabs inside a dropdown:

:::::{dropdown} Which sectors are relevant in your regions and which ones may be impacted by climate risk?

::::{tab-set}

:::{tab-item} Answer 1

- Agriculture
- Forestry
- Transportation
- Infrastructure and building
- Energy
- Costal Management
- Health
- Civil Protection
- Landscape (city) planning
- Tourism

Any sector with significant proportion of working time happening outdoors
:::

:::{tab-item} Answer 2

Industry (mainly car production) and services sectors are relevant. Main impact on schools, health care, social services and transport infrastructure.
:::

::::

[Scoping](../CRA_steps/scoping/scoping.md) › [Set the context](../CRA_steps/scoping/scoping.md#set-the-context)
:::::



## Explore Risk 

:::::{dropdown} 2.1 How is the scoping phase applied? Which parts of the scoping phase are relevant for the workflow and scenario selection?

::::{tab-set}

:::{tab-item} Catalunya
In general terms the following aspects of the scoping phase are important for workflow and scenario selection: Space and time scope; hazard characteristics of effects and intensity - including its potential changes (mainly for prevention and early warning systems); impacts on people, properties and environment (for early warning systems, coordination of response with operative teams and other stakeholders, logistics planning, information and communication activities). 
:::

:::{tab-item} Finland
In the second CRA step relevant stakeholders are invited for first meetings, where they refine objectives, context and/or ownership. Here, it will be crucial to collect and bring together insights regarding workflow and scenario selection.
:::

::::

:::::{dropdown} 2.2 How does the existing stakeholder knowledge come into play?

::::{tab-set}

:::{tab-item} Latvia
Stakeholder provide a broad body of knowledge such as specific local data, information about local situation or a good overview about laws and regulations in Latvia. This leads to a better understanding of which climate risks are really relevant to different sectors, municipalities, groups, etc. By including relevant stakeholder from the very beginning through participation the whole process benefits from their information.
:::

::::

### Screen Risks

:::::{dropdown} 2.3 Which climate-related hazards and potential risks are relevant for your context?

::::{tab-set}

:::{tab-item} Latvia
**Which climate-related hazards and potential risks are relevant for your context?**
Coastal flooding (and costal erosion), river flooding, floods based on intensive precipitations, wildfires, heatwaves, droughts, hails and storms.

**What is the current situation? Where is the hazard occurring? Who is being affected?**
The current situation comprises of coastal and river floods, intensive precipitation, storm and hail events, wildfire heatwaves and drought: 
• Coastal flooding endangers people in municipalities near the Baltic Sea that are affected by gusts of wind and coastal erosion/accumulation processes. 
• Most people and infrastructure near rivers is at risk of river flooding. In the last few years, especially near the Daugava River, where spring floods are happening also in the winter months, bringing a lot of damage.
• During the last few summers intensive precipitation events (12-hour or 24-hour precipitation, etc.) have caused flooding, leading to losses in agriculture, problems in transportation or logistics in the cities (especially Riga). In summer 2023 hailstorms also caused significant damage in Latvia, particularly in the Tērvete and Dobele regions.
• 2018 was one of the driest years in history. A combination of dry and hot conditions in the summer triggered wildfires and other situations in the forests.
• During last few years, almost each summer has surpassed the previous one in terms of temperature extremes. It affects almost all of the sectors and communities.
• Lately, we observed dry periods followed by periods with a lot of precipitation. This is not only causing problems to agriculture, but also decreases air quality.

**Which hazards are observed/expected for the community/region?**
All of the hazards mentioned above (there are some problems with hail observation).

**How will this situation evolve in the future (e.g., 10, 20, 50 years)? How may this risk evolution influence your envisaged time horizon defined in the scoping phase?**
It seems that some of the hazards nowadays will be more frequent or intense in the future in the future, so that future hazards will cause more damage.

**Do you want to focus on current or future hazards?**
Based on the current hazards and climate, we want to predict future hazards.

**Which hazards do you want to cover in this risk assessment?**
For now we will start with flood risk analysis, followed by other risk workflows according to hazards of interest. – Latvia 

:::

::::

:::::{dropdown} 2.4 Which data or knowledge do you have on these hazards/impacts/risks? Which data, information or knowledge is further needed?

::::{tab-set}

:::{tab-item} Setúbal
We have the spatial extent of historical ocurrences for flash flooding and wildfires. We also have the information regarding the present-day buildings potentially exposed according to the historical spatial extent of these hazards. We do not have any spatial information regarding the heatwaves.

:::

::::

### Choose Workflow

:::::{dropdown} 2.5  Having in mind the Scoping phase and including insights from the previous sub-step of exploring risk, which workflows are relevant for your CRA? Why?

::::{tab-set}

:::{tab-item} Žilina
Heat waves, heavy rain workflows. Because they correspond to our needs the most. 

:::

::::


### Choose Scenario

:::::{dropdown} 2.6 Including Scoping considerations and taking advantage of the Technical Choices described in the conceptual Framework part, which scenarios are relevant for your workflows? Why?

::::{tab-set}

:::{tab-item} Catalunya
In general terms we are interested, at least, in RCP 4.5 and 8.5.  
:::


:::{tab-item} Latvia
Based on the fact that we have localized SSP data from global models, we'd like to have SSP scenarios here as well. In Latvia right now we are working with SSP1-2.4 ; SSP2-4.5 and SSP3-7.0. 
:::

::::
