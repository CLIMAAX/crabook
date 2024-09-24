# How to use risk workflows

Our workflow notebooks aim to complement the CLIMAAX Methodological Framework, enabling users to put the Framework into practice. Use the workflows as an example or starting point for your own customized risk assessment.

```{figure} ../images/illustration/how_to_use_workflows.jpg
---
scale: 60%
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

Computational workflows in the form of __[Jupyter Notebooks](https://jupyter-notebook.readthedocs.io/en/latest/)__ are powerful tools for conducting quantitative analysis and data exploration, making them particularly valuable for climate risk assessment.
These interactive documents combine live code, equations, visualisations, and narrative text in a single, shareable environment.
One of the key benefits of Jupyter Notebooks is their ability to facilitate reproducible and transparent workflows, with step-by-step documentation of analysis methodologies.


## Availability

Our workflow notebooks are **open source, free and available to anyone** to try them out. They are organized by hazard in our [CLIMAAX](https://github.com/climaax/) organization on GitHub.

Static representations of all workflow notebooks are included in this Handbook on the following pages.

:::{note}
We use [MyST Markdown](https://mystmd.org/) to enhance the presentation of our workflows.
The MyST formatting may not be displayed correctly in all notebook viewers (e.g. the preview on GitHub).

We recommend viewing the workflow content here in the Handbook and in a JupyterLab with the [jupyterlab-myst](https://github.com/jupyter-book/jupyterlab-myst?tab=readme-ov-file#jupyterlab-myst-extension) extension enabled (always included in our Python environments).
:::


## Structure

Inside each of our workflow repositories on GitHub are one or more workflows for a common hazard, organized into (numbered) subfolders.
Every workflow subfolder contains at least three files:

- a **workflow description**,
- a **hazard assessment** notebook and
- a **risk assessment** notebook.

The description is the starting point and provides introductory and background information for the methodology and data used in the workflow.
The first computational steps of the workflow are taken in the hazard assessment notebook, followed by the risk assessment notebook which generally builds on the results from the hazard assessment.
Some workflows may provide additional notebooks with supplementary content.


## Where to run

::::::{tab-set}

:::::{tab-item} Local computer

```{image} ../images/laptop.png
:align: left
:name: laptop
```

Running workflows on your own local computer allows for full customization and most freedoms in use.
However it also requires some expertise to set up the environment and obtain the workflows, as well as local computing and storage resources to run the workflows.

:::{admonition} Setup instructions
:class: note

Our step-by-step instructions take you through downloading the workflows and the setup of a Python and Jupyter environment on your computer:

- [Command line setup instructions](workflows_how_to/cli.md)
- [JupyterLab Desktop setup instructions](workflows_how_to/jupyterlab_desktop.md)

While we generally recommend working on the command line, users not or less familiar with these tools can use the JupyterLab Desktop instructions, which require minimal interaction with a command line interface.
:::
:::::


:::::{tab-item} Binder

```{image} ../images/binder-logo.svg
:target: https://mybinder.org/
:width: 150px
:align: left
:name: binder
```
Binder is a public online service for building and sharing interactive computational content.
CLIMAAX workflows can be run and edited on binder.

:::{tip}
Look out for links to binder throughout the handbook that allow you to launch a binder session where you can explore workflows without the need to set up a local computing environment.
:::

:::{admonition} Restrictions
:class: danger

**Changes are not saved** on binder after a session ends.

The computing resources provided by binder are not always sufficient to run all steps of a workflow notebook, since the processing of large climate datasets can require more main memory than is available in a session.
:::

:::::


:::::{tab-item} JupyterHub

```{image} ../images/jupyter-hub-logo.svg
:target: https://jupyter.org/hub
:width: 150px
:align: left
:name: jupyterhub-org
```

Some organizations provide a JupyterHub for their staff.
In such a hub, you are likely able to set up a software environment to run CLIMAAX workflows on your organization's computing infrastructure.

:::{tip}
Check with your IT department if your organization offers a JupyterHub service that you can use.
:::

:::::

:::::{tab-item} CLIMAAX JupyterHub

```{image} ../images/jupyter-hub-logo.svg
:target: https://jupyter.org/hub
:width: 150px
:align: left
:name: jupyterhub-climaax
```

The [CLIMAAX JupyterHub](#support-jupyterhub) is hosted on ECMWF infrastructure and provides a ready-to-use environment for running risk workflows.
It is **managed by the CLIMAAX team** for members of the CLIMAAX project.

:::{admonition} Restricted access
:class: attention
Our JupyterHub is only available for CLIMAAX pilot partners and participants of the open call.
:::

:::::

::::::

```{figure} ../images/illustration/BinderHub.jpg
---
name: Binder-hub
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

:::{seealso}
Resources » [Software](../resources/software.md)
:::
