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

## Scoping
### Objectives
:::::{dropdown} 1.1 What is your objective of the CRA?

::::{tab-set}

:::{tab-item} All pilot regions
The CLIMAAX pilot regions aim at 
1) Identifying risk hotspots, adapt to changing hazards, enhance community resilience;
2) Increasing awareness, preparedness and adaptation (e.g., to improve health and urban planning or to promote effective forest management.);
3) Enhancing awareness and adaptation, inform policy makers, prioritize risks;
4) Establishing effective territorial planning and development; informing policy-makers and improving decision-making;
5) Building a system for regular CRA with scientific support.
:::

::::
:::::

:::::{dropdown} 1.2 What is the purpose of your CRA? What is the expected outcome? (These two questions should entail a brainstorming exercise on, among other things, an evaluation of the potential climate change impacts on different aspects of society; an estimation of the current and future climate risks; a first prioritization the most significant and urgent risks; inform the development and implementation of adaptation strategies, etc.)

::::{tab-set}

:::{tab-item} Latvia
**Purpose**
1) Understand impacts of CC and update plans and protocols of civil protection.
2) Comprehend how changes in climate indicators and hazards may alter vulnerabilities across different sectors and demographics.
3) Support CRM in implementing concrete adaptation measures, recognizing regional differences.
   
**Outcome**
1) Provide information on expected changes in hazards and their impacts.
2) Identify and confirm key risks  and enhance preparedness.
3) Minimize potential climate change impacts on society, prioritize significant climate risks, estimate the magnitude and likelihood of impacts, and create a basis for developing and implementing adaptation strategies 

:::

::::
:::::

:::::{dropdown} 1.3 How should your objective/result of the CRA feed into policy and decision-making?

::::{tab-set}

:::{tab-item} Žilina
Feeding the objective of a CRA into policy and decision-making profits from science-based information and evidence-based risk assessments. Contacting and including key policy- and decision-making individuals/entities such as e.g., from the city administration and relevant sectors (transport, agriculture, health, education) from  the very beginning is beneficial to ensure seamless translation. However, the reality is far from there.
:::

::::
:::::
:::::{dropdown} 1.4 Which limitations and boundaries may the CRA have or do you see the region confronted with in this context? E.g. worst case scenario in the context of adaptation measures? 

::::{tab-set}

:::{tab-item} All pilot regions
In summary, the pilot regions see limitations and boundaries when it comes to possible low return periods, lack of resources (human, financial, material, knowledge), practicality, communication, implementation and use of results, limitation of local data, uncertainty, unequal involvement and feedback of sectors, compound and cascading events which may not be captured.
:::

::::
:::::

### Context
:::::{dropdown} 1.5 How have climate hazards, risks and impacts been assessed/handled in your region until now?

::::{tab-set}

:::{tab-item} Finland

Projections by meteorological agencies were used for adaptation strategies; risk was assessed within civil protection but without having climate change included. A National Risk Assessment was conducted, however with climate and weather risk being covered in regional risk assessments. In summary, often climate change is not well attributed or not covered in the regional CRAs. 
:::

:::{tab-item} Latvia
a) Research-based monitoring of meteorological and sector-specific data was used to calculate functional relationships or correlations between sectors and climate change. b) Latvias national adaptation strategy and sectoral adaptation plans partly cover hazards, risks and impacts. c) There are some climate risk management measures in place e.g., for infrastructure, to handle heavy precipitation and floods or coastal erosion. 
:::

::::
:::::

:::::{dropdown} 1.6 What is the governance context (policies, regulations, legal obligations, strategies, available time and resources etc.) of the assessment? 

::::{tab-set}

:::{tab-item} Žilina
Žilina’s governance context consists of an adaptation strategy of the Žilina city and action plan, embedded in the national adaptation strategy, action plan for the implementation of the  adaptation strategy to climate change, related national policy, regulations and directives. 
:::

:::{tab-item} Catalunya
In Catalunya, the assessments are part of the regional plans of risk management, which must be updated and reviewed by legal mandate every 4 years. For the risk assessment itself, no time restriction is known. Currently, the human resources engaged in drafting the main document would be technicians from the DGPC (regional administration), together with representatives of relevant departments and operative teams (firefighters, police, etc.), as well as relevant authorities from the local level and private organisations that could be of concern.
:::
::::
:::::


:::{dropdown} 1.7 Which regional targets may be impacted by climate hazards/risk? (e.g., Net Zero targets, UN Sustainable Development Goals, other regional/local goals targeting (sector-specific) transformation)

This question does not have an answer yet.
:::

:::::{dropdown} 1.8 How is your CRA relevant system defined (e.g., systems of interest, affected entities, functions and processes at risk, connections, dependencies, spatial and temporal scales)?

::::{tab-set}

:::{tab-item} Latvia
In Latvia, the climate risk assessment  encompasses various sectors, entities, functions, and processes. The system can be outlined as follows:

**Sectors of interest**: The CRA relevant system includes key sectors - such as agriculture, forestry, water resources, energy, transportation, infrastructure, health, biodiversity, coastal management, and urban planning, which are directly or indirectly affected by climate hazards.
**Affected entities**: A CRA should consider governmental agencies, local authorities, businesses, (vulnerable) communities and groups, households, ecosystems, and natural resources. These entities are exposed to climate risks and vulnerabilities, which can manifest in various ways, such as economic losses, environmental degradation, social disruptions, and impacts on human well-being.
**Functions and processes at risk**: These include wide range of activities and services, such as agricultural production, forestry management, water supply, energy generation, transportation networks, infrastructure development, public health services, biodiversity conservation, and coastal protection. 
**Connections and dependencies**: A CRA should eventually consider interconnectedness and compound risks among different sectors, entities, functions, and processes. For example, changes in precipitation patterns can affect agricultural productivity, which, in turn, can impact food  and economic security, rural livelihoods, and ecosystem services. Similarly, disruptions to transportation networks due to extreme weather events can affect supply chains, economic activities, and access to essential services.
**Spatial and temporal scales**: In Latvia, a CRA needs to take into account both local and national spatial scales, with specific attention to regional differences in vulnerability and exposure. Temporal scales encompass short-term events, such as extreme weather events, as well as long-term trends, such as sea-level rise and gradual changes in temperature and precipitation patterns.

:::

::::
:::::

:::::{dropdown} 1.9 Which sectors are relevant in your regions and which ones may be impacted by climate risk?

::::{tab-set}

:::{tab-item} Latvia
Agriculture, forestry, transportation, infrastructure and building, energy, coastal management, health, civil protection, landscape (city) planning, tourism, any sector with significant proportion of working time happening outdoors. 
:::

:::{tab-item} Žilina
Industry (mainly car production) and services sectors are relevant. Further, it is important to gather information on possible impacts on schools, health care, social services and transport infrastructure.
:::
::::
:::::


:::{dropdown} 1.10 What is your envisaged time horizon for the CRA in terms of risk outcome(s)? E.g. 20 years, 2050, 2100?)

This question heavily depends on individual situations and interest. Thus, no answer is provided.
:::


:::::{dropdown} 1.11 Where do you place value for your region? What outcome should be avoided with respect to the assigned values? 

::::{tab-set}

:::{tab-item} Latvia
Latvia's main values are related to their relatively pristine environment, rich cultural heritage, industry as well as its people.
Therefore, the CRA should be primarily focused on the preservation of human life, especially considering the increasingly aging population in Latvia. This includes protecting vulnerable communities as well as low-income people groups, such as elderly people.
Secondly, the main goal should be to protect the environment and not cause further environmental degradation. Green adaptation paths should be preferred, as well as climate risks impacting environment should be prioritized.
Thirdly, many important industrial sectors in Latvia, such as forestry and agriculture is in direct threat from climate risks. Therefore, priorities should also be drawn considering most important economic sectors.
Finally, the country places large value on its cultural heritage. Climate risks directly affect it, with floods or intensive wildfires endangering the cultural hotspots of the country.

:::

::::
:::::

:::::{dropdown} 1.12 How bad could things plausibly get?

::::{tab-set}

:::{tab-item} Latvia
Extreme events could potentially significantly impact the societal structure of Latvia. Succeeding compound risks could endanger social  balance, causing political unrest in the country.  The COVID-19 pandemic outlined that significant public health risks may divide society, resulting in mass protests and distrust in both decision makers and public services. We assume, significant extreme meteorological events pose a similar risk.

Additionally, significant changes in the temperature and precipitation regime could massively impact the economy, especially considering that a large portion of Latvian exports is based on raw natural resources - wood, in particular. Massive forest fires as well as rise of non-endemic parasites could significantly affect the forestry sector, both of which are plausible climate risks to the country.

Due to a quickly aging population, it is very important to consider climate-related health risks as well. The health stress of prolonged summer heatwaves may increase in the future, which can overburden public health emergency services.

Finally, due to a long, low-lying coastline with multiple major cities located next to the sea, climate risks related to wind surges, sea level rise and coastal erosion have to be considered. Sea level rise and subsequent increase in flooding frequency directly affects the main regions of production and economic centers in Latvia (i.e. large cities), which can cause severe economic damage.

:::
::::
:::::


:::{dropdown} 1.13 Where do you suspect thresholds or tipping points (environmental/economic/social)

This question does not have an answer yet.
:::


:::::{dropdown} 1.14 How do you expect hazards to change in the future?

::::{tab-set}

:::{tab-item} Latvia
Latvia expects more frequent and prolonged heatwaves with high temperatures not just in summer, but also during other seasons (e.g., winters with temperature above 0 °C). Further, changes in the hydrological regime such as altered precipitation patterns (sudden, heavy precipitation and also long drought periods), severe hailstorms, sea level rise, or an increase in coastal erosion are considered likely.
:::
::::
:::::


:::::{dropdown} 1.15 What is your expected tolerance of risk (e.g. heat, drought, flooding) and how may it be helpful or restricting in your CRA process?

::::{tab-set}

:::{tab-item} Latvia
Tolerance of risk might be hazard-dependent:

**Heat**: Tolerance of heat-related risks in Latvia may be relatively low, especially considering the region's temperate climate and limited historical exposure to extreme heat events. However, as temperatures increase due to climate change, there may be a growing recognition of the need to address heat-related risks, particularly in urban areas.

**Drought**: Tolerance of drought risks in Latvia may also be relatively low, given the country's historical climatic conditions combined with its dependence on agriculture, forestry, and water resources. While Latvia has historically experienced moderate drought conditions multiple times, prolonged or severe drought events could pose significant challenges for water availability, crop production, and ecosystem health.

**Flooding**: Tolerance of flooding risks in Latvia may vary depending on regional exposure and past experiences with flooding events. Coastal areas and riverine plains are particularly vulnerable to flooding, which can result from heavy rainfall, snowmelt, ice jams, and storm surges. However, Latvia has been experiencing floods - river, flash and wind surge floods - for a long time, which increases the tolerance level. Nevertheless, this risk should not be underestimated, as even a 1 in 10 years flood event at a local site can cause major social and economic unrest. 
:::
::::
:::::

### Participation and Ownership
:::::{dropdown} 1.16 Who could be important stakeholders/groups to be included for participatory processes? It is helpful to clearly define the set of stakeholders that should be consulted throughout the CRA. However, this set of stakeholders can change throughout the process – especially with the outcome of the climate risk workflows. 

::::{tab-set}

:::{tab-item} Latvia
State Fire and Rescue Service, the Ministry of Climate and Energy, the Ministry of Environmental Protection and Regional Development, the Ministry of Economy, the Ministry of Agriculture, the Ministry of Education and Science, the Ministry of Transport, the Ministry of Health, municipalities, planning regions, state emergency and Medical Service, Road Safety Directorate, Central Statistical Bureau of Latvia, the National Health Service, Latvian State Forests, insurance companies and banks, etc. 
:::

:::{tab-item} Catalunya
Civil Protection technicians, operative teams (firefighters, medical emergency services, police, rural agents), agencies/institutions directly dealing the hazard or its consequences (such as the Water Agency, the Forest Department, Waste Agency, Health Department, etc.), agencies/institutions dealing with particular assets/services (private/public; e.g., transportation department, rail transport, etc.), representatives of local level/municipalities, vulnerable and affected groups. 
:::
::::
:::::

:::{dropdown} 1.17 Who are relevant representatives of known vulnerable groups or exposed areas and sectors?
This question does not have an answer yet.
:::

:::::{dropdown} 1.18 How does your legal framework allow the inclusion of key groups?

::::{tab-set}

:::{tab-item} Žilina
We have no laws that would prescribe or prohibit it. Existing laws allow relevant stakeholders to be included.
:::

:::{tab-item} Catalunya
The Regional Civil Protection (CP) law indicates the right of population to collaborate in CP action (the law even creates the figure of CP volunteers). It also highlights that the CP is of concern of all Departments of the Government, engaging the different Departments in it and explicitily calling for exchange of information. 
:::
::::
:::::


:::::{dropdown} 1.19 How is the risk assessment ownership regulated?

::::{tab-set}

:::{tab-item} Latvia
The Risk Assessment ownership in Latvia is not explicitly regulated by specific legislation. However, the legal and institutional framework provides mechanisms for defining responsibilities, promoting collaboration, and ensuring accountability among stakeholders involved in risk assessment activities. Main ownership is therefore attributed to governmental and state bodies, including ministries and agencies.
:::

:::{tab-item} Catalunya
The civil protection law of the region establishes that all public administration services in the region have to work to reduce disaster risk (Art. 13). Being more specific, for example, the same law calls urban and territorial planning, as well as any other sectorial policies, to take into account the civil protection needs and work to prevent risk and mitigate the eventual impact of catastrophes and disasters. 
:::
::::
:::::

:::::{dropdown} 1.20 How and who do you want to communicate your results to?

::::{tab-set}

:::{tab-item} Latvia
Policymakers (ministries, municipalities, planning regions), state fire and rescue service, state emergency and medical service, road safety directorate, central statistical bureau of Latvia, the national health service, Latvian state forests, banks, insurance companies, general public, etc. 
:::

:::{tab-item} Catalunya
Citizens have the right to be informed about severe collective risks that can affect them and the measures put in place to cope with them. The population that can be affected by serious risks must receive precise, ample information and instructions on the measures to take and the behavior to follow during an emergency. The media must collaborate and share the information requested by civil protection authorities. 
Civil protection maps are legally requested, and the disaster risk plans drafted must contain information on how the content will be shared to population. 
:::
::::
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
:::::

:::::{dropdown} 2.2 How does the existing stakeholder knowledge come into play?

::::{tab-set}

:::{tab-item} Latvia
Stakeholder provide a broad body of knowledge such as specific local data, information about local situation or a good overview about laws and regulations in Latvia. This leads to a better understanding of which climate risks are really relevant to different sectors, municipalities, groups, etc. By including relevant stakeholder from the very beginning through participation the whole process benefits from their information.
:::

::::
:::::

### Screen Risks

:::::{dropdown} 2.3 Which climate-related hazards and potential risks are relevant for your context?

::::{tab-set}

:::{tab-item} Latvia
**Which climate-related hazards and potential risks are relevant for your context?**
Coastal flooding (and costal erosion), river flooding, floods based on intensive precipitations, wildfires, heatwaves, droughts, hails and storms.

**What is the current situation? Where is the hazard occurring? Who is being affected?**
The current situation comprises of coastal and river floods, intensive precipitation, storm and hail events, wildfire heatwaves and drought: 
• *Coastal flooding* endangers people in municipalities near the Baltic Sea that are affected by gusts of wind and coastal erosion/accumulation processes. 
• Most people and infrastructure near rivers is at risk of *river flooding*. In the last few years, especially near the Daugava River, where spring floods are happening also in the winter months, bringing a lot of damage.
• During the last few summers *intensive precipitation events* (12-hour or 24-hour precipitation, etc.) have caused flooding, leading to losses in agriculture, problems in transportation or logistics in the cities (especially Riga). In summer 2023 hailstorms also caused significant damage in Latvia, particularly in the Tērvete and Dobele regions.
• 2018 was one of the driest years in history. A combination of dry and hot conditions in the summer triggered *wildfires* and other situations in the forests.
• During last few years, almost each summer has surpassed the previous one in terms of *temperature extremes*. It affects almost all of the sectors and communities.
• Lately, we observed *dry periods* followed by periods with a lot of precipitation. This is not only causing problems to agriculture, but also decreases air quality.

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
:::::

:::::{dropdown} 2.4 Which data or knowledge do you have on these hazards/impacts/risks? Which data, information or knowledge is further needed?

::::{tab-set}

:::{tab-item} Setúbal
We have the spatial extent of historical ocurrences for flash flooding and wildfires. We also have the information regarding the present-day buildings potentially exposed according to the historical spatial extent of these hazards. We do not have any spatial information regarding the heatwaves.

:::

::::
:::::

### Choose Workflow

:::::{dropdown} 2.5  Having in mind the Scoping phase and including insights from the previous sub-step of exploring risk, which workflows are relevant for your CRA? Why?

::::{tab-set}

:::{tab-item} Žilina
Heat waves, heavy rain workflows. Because they correspond to our needs the most. 

:::

::::
:::::


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
:::::
