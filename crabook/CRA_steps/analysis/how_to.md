# About workflows and how to get started

## About workflows

Computational workflows in the form of __[Jupyter Notebooks](https://jupyter-notebook.readthedocs.io/en/latest/)__ allow users to combine interactive code with text and graphical objects. They are powerful tools for conducting computational analysis and data exploration, making them particularly valuable for climate risk assessment. These interactive documents combine live code, equations, visualisations, and narrative text in a single, shareable environment. 

The workflow notebooks aim to complement the CLIMAAX Methodological Framework, enabling users to put the Framework into practice.

One of the key benefits of Jupyter Notebooks is their ability to facilitate a reproducible and transparent workflows. The workflow is documented step by step, enhancing the transparency of data analysis methodologies.

## Availability of the workflows

::::{tab-set}
:::{tab-item} Public users
Our workflow notebooks are **open source, free and available to anyone** to try them out.  

## Use MyBinder

```{image} ../../images/binder-logo.svg
:target: https://mybinder.org/
:width: 150px
:align: left
:name: binder
```
Each workflow has a Binder badge which builds the virtual computing environment with libraries and dependencies specific to it, on a Binder hub.  

Public Binder hub is an online service for building and sharing reproducible and interactive computational environments from online repositories.  
In this environment the users can **run the workflows** and **make minor changes**, but their **work will not be saved** after the session ends.  
This option is there to allow public users to explore the workflows without the need to instal anything to their infrastructure.

## Use your local computer

```{image} ../../images/laptop.png
:align: left
:name: laptop
```
User experienced with Python and Git can download the notebook and asociated repository and work locally.  
They can use the workflows as an example or starting point in their own risk assessment. 

:::
:::{tab-item} Registered users
```{image} ../../images/jupyter-hub-logo.svg
:target: https://jupyter.org/hub
:width: 150px
:align: left
:name: jupyter-hub
```
A dedicated __[Jupyter hub](https://jupyter.org/hub)__, hosted in ECMWF infrastructure, is available for the CLIMAAX pilot partners and participants of the open call.  
JupyterHub is an open-source, multi-user server for Jupyter notebooks. It is designed to provide a scalable and customizable platform for hosting Jupyter notebooks and instances in a multi-user environment. This will be a place where users can run, edit and create their customized risk workflows according to their needs without having to install anything on their own computer.  
This **computational environment is managed by the CLIMAAX team**.
```{figure} ../../images/BinderHub.jpg
---
name: Binder-hub
---
Illustration about BinderHub and JupyterHub architecture. From the Turing Way project, illustration by Scriberia. Used under a CC-BY 4.0 licence. DOI: __[10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)__
```
:::
::::

## How to run CLIMAAX workflows locally

::::{tab-set}
:::{tab-item} Using Git

To start using the workflow you will need to have [Git](https://git-scm.com/) and [Conda](https://docs.conda.io/en/latest/miniconda.html) installed.

````{admonition} Don't leave if you don't know git!
:class: hint
If you have never used Git but want to learn, have a look at this [introduction to Git resource](https://the-turing-way.netlify.app/reproducible-research/vcs/vcs-git#rr-vcs-git).  
If you have a few moments, maybe you can be [convinced to use git](https://the-turing-way.netlify.app/reproducible-research/vcs).  
If you have never used Git and don't have the time for it now, please head to the other tab in this section for the instructions how to download the workflows.  
````

If you are comfortable working Git you can follow these steps to clone the repository and install the invironment to use the wokflows.  
Here we show the DROUGHT example, but you can replace it with any other repository name (FLOODS, FIRE, SNOW, HEATWAVES, STORMS)

1. Open your terminal

2. Check your conda install with `conda --version`. If you don't have conda, install it by following these instructions (see [here](https://docs.conda.io/en/latest/miniconda.html))

3. Clone the repository
    ```bash
    git clone git@github.com:CLIMAAX/DROUGHTS.git
    ```

4. Move into the cloned directory
    ```bash
    cd DROUGHTS
    ```

5. Create and activate your environment from the `environment.yml` file.  
This will create the environment called **climaax_droughts**. You will need to activate it as well:
    ```bash
    conda env create -f environment.yml
    conda activate climaax_droughts
    ```  

6. Launch the jupyter interface of your preference, notebook, `jupyter notebook` or lab `jupyter lab`
7. Edit the notebook(s)

:::
:::{tab-item} Without Git

1. Go to the webpage of the wokrflow repositories: https://github.com/orgs/CLIMAAX/repositories and pick up one hazard.
As an example here we will go to [DROUGHTS repository](https://github.com/CLIMAAX/DROUGHTS).  

2. First click on the {bdg-success}`<> Code` button and then Download ZIP file.

```{figure} ../../images/download-repo.png
:align: center
:name: workflow-repo
```
3. Unzip the file using your favourite tools

4. Open your terminal

5. Check your conda install with `conda --version`. If you don't have conda, install it by following these instructions (see [here](https://docs.conda.io/en/latest/miniconda.html))


6. Move into the workflow directory
    ```bash
    cd DROUGHTS
    ```

7. Create and activate your environment from the `environment.yml` file.  
This will create the environment called **climaax_droughts**. You will need to activate it as well:
    ```bash
    conda env create -f environment.yml
    conda activate climaax_droughts
    ```  

8. Launch the jupyter interface of your preference: notebook `jupyter notebook` or lab `jupyter lab`
9. Edit the notebook(s)

:::
::::

**Credits**
The **How to run** section was adapted from the [Environmental Data Science Book](https://edsbook.org/welcome.html) project.
