# How to use risk workflows

Our workflow notebooks aim to complement the CLIMAAX Methodological Framework, enabling users to put the Framework into practice. Use the workflows as an example or starting point for your own customized risk assessment.

```{figure} ../images/illustration/how_to_use_workflows.jpg
---
scale: 60%
---
This illustration is created by Scriberia with The Turing Way community. Used under a CC-BY 4.0 licence. DOI: [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

Computational workflows in the form of __[Jupyter Notebooks](https://jupyter-notebook.readthedocs.io/en/latest/)__ allow users to combine interactive code with text and graphical objects. They are powerful tools for conducting computational analysis and data exploration, making them particularly valuable for climate risk assessment. These interactive documents combine live code, equations, visualisations, and narrative text in a single, shareable environment. One of the key benefits of Jupyter Notebooks is their ability to facilitate a reproducible and transparent workflows. The workflow is documented step by step, enhancing the transparency of data analysis methodologies.


## Availability

Our workflow notebooks are **open source, free and available to anyone** to try them out. They are organized by hazard in our [CLIMAAX](https://github.com/climaax/) organization on GitHub.


## Where to run

::::::{tab-set}

:::::{tab-item} Local computer

```{image} ../images/laptop.png
:align: left
:name: laptop
```

Running workflows on your own local computer allows for full customization and most freedoms in use.
However it also requires some expertise to set up the environment and obtain the workflows, as well as local computing and storage resources to run the workflows.

Our [step-by-step instructions](#steps-by-example) take you through the setup of a Python/Jupyter environment on your computer.
:::::


:::::{tab-item} Binder

:::{admonition} Known issue
:class: danger
Unfortunately, some of our repositories currently do not start on binder due to timeout problems. We are aware of this problem and are looking for a solution.
:::

```{image} ../images/binder-logo.svg
:target: https://mybinder.org/
:width: 150px
:align: left
:name: binder
```
Each workflow has a Binder badge which builds the virtual computing environment with libraries and dependencies specific to it, on a Binder hub.

Public Binder hub is an online service for building and sharing reproducible and interactive computational environments from online repositories.
In this environment the users can **run the workflows** and **make minor changes**, but their **work will not be saved** after the session ends.
This option is there to allow public users to explore the workflows without the need to instal anything to their infrastructure.

:::::


:::::{tab-item} CLIMAAX JupyterHub

:::{admonition} Restricted access
:class: attention
Our JupyterHub is only available for CLIMAAX pilot partners and participants of the open call.
:::

```{image} ../images/jupyter-hub-logo.svg
:target: https://jupyter.org/hub
:width: 150px
:align: left
:name: jupyter-hub
```

The JupyterHub is hosted on ECMWF infrastructure and provides a ready-to-use environment for running risk workflows.

JupyterHub is an open-source, multi-user server for Jupyter notebooks. It is designed to provide a scalable and customizable platform for hosting Jupyter notebooks and instances in a multi-user environment. This will be a place where users can run, edit and create their customized risk workflows according to their needs without having to install anything on their own computer.
This **computational environment is managed by the CLIMAAX team**.

:::::

::::::

```{figure} ../images/illustration/BinderHub.jpg
---
name: Binder-hub
---
Illustration about BinderHub and JupyterHub architecture. From the Turing Way project, illustration by Scriberia. Used under a CC-BY 4.0 licence. DOI: __[10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)__
```


## Steps by example

The following steps demonstrate how to download the files from one of our workflow repositories, install a suitable Python software environment and start a Jupyter interface to interact with the workflow notebooks.

As a prerequisite, you will have to have access to a command line (also known as terminal or console) on the computer you are working on.
The choice of command line will depend on your operating system (e.g., Windows, MacOS or Linux).
Please consult the installation instructions linked below for options that suit your setup.
Alternative graphical applications for some of the steps taken on the command line below are available, e.g. [GitHub Desktop](https://github.com/apps/desktop) and [Anaconda Navigator](https://www.anaconda.com/products/navigator), but will not be covered in this guide.


### Download a workflow repository

We recommend working with git as it allows not just to conveniently download our workflows but update and [contribute](../community/contribute.md#contribute-to-risk-recipes) to them as well.
If you have a few moments, maybe you can be [convinced to use git](https://the-turing-way.netlify.app/reproducible-research/vcs).
If you have never used Git and don't have the time for it now, please head to the other tab in this section for the instructions how to download the workflows.

::::::{tab-set}

:::::{tab-item} Clone with git

To start using the workflow you will need to have [git](https://git-scm.com/) installed.

If you are comfortable working Git you can follow these steps to clone the repository and install the invironment to use the wokflows.
Here we show how to download the DROUGHT workflow repository as an example, but you can follow the same steps for any other workflow repository if you replace the hazard name, e.g., FLOODS, HEAVY_RAINFALL, FIRE, SNOW, HEATWAVES, STORMS.

1. Open a terminal

2. Clone the repository with

    ```bash
    git clone https://github.com/CLIMAAX/DROUGHTS.git
    ```

    **or** (alternatively) use ssh if you have access configured for your GitHub account:

    ```bash
    git clone git@github.com:CLIMAAX/DROUGHTS.git
    ```

3. Move into the cloned directory
    ```bash
    cd DROUGHTS
    ```

:::::

:::::{tab-item} Download from website

1. Go to the webpage of the wokrflow repositories: https://github.com/orgs/CLIMAAX/repositories and pick up one hazard.
As an example here we will go to [DROUGHTS repository](https://github.com/CLIMAAX/DROUGHTS).

2. First click on the {bdg-success}`<> Code` button and then Download ZIP file.

```{figure} ../images/download-repo.png
:align: center
:name: workflow-repo
```
3. Unzip the file using your favourite tools

4. Open a terminal inside the unzipped folder

:::::

::::::

:::{seealso}
Coding resources » [Git and GitHub](../resources/software.md#git-and-github)
:::


### Set up the Python environment

Every workflow repository contains an `environment.yml` file for the conda package manager in which all software required to run the workflows in the repository is listed.

1. In the terminal, check your conda install with

    ```
    conda --version
    ```

    If you find that you don't have conda available, install it from [here](https://conda-forge.org/download/).

2. Create a conda environment from the `environment.yml` file:

    ```
    conda env create -f environment.yml
    ```

    This creates an new environment called **climaax_droughts**.
    The name is defined in the environment file and depends on the hazard.
    Please check the console output for the exact name of your environment and adapt the name in the next steps if necessary.

3. To activate the created environment, run

    ```
    conda activate climaax_droughts
    ```

    The input line on your terminal should now begin with `(climaax_droughts)`, indicating that the environment is active.

We also provide a general environment configuration in which all CLIMAAX workflows can run in our workflow template repository.

:::{seealso}
Coding resources » [Python](../resources/software.md#python)
:::


### Start Jupyter and run a workflow notebook

The `environment.yml` files from our workflow repositories contain both the JupyterLab and Jupyter Notebook interfaces. With the conda environment from the previous step activated, launch your preferred Jupyter interface in the conda environment:

```
jupyter lab
```

**or** (alternatively)

```
jupyter notebook
```

The interface is served in the browser, which should open automatically. Otherwise use the link printed to the console to open. The interface will present the contents of the folder from which Jupyter was launched. Workflow notebooks can be started there and edited and run interactively in the browser.

:::{seealso}
Coding resources » [Jupyter](../resources/software.md#jupyter)
:::
