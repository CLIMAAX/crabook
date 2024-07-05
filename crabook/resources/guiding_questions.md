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



## Risk Exploration

...


## Risk Analysis

...


## Key Risk Assessment

...


## Monitoring and Evaluation

...
