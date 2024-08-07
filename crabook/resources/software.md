# Software

The CLIMAAX climate risk assessment workflows are built and run with open source software from the Python software environment and distributed in version controlled repositories via GitHub.
Here, we provide links to online resources about these software tools, which have been extensively documented throughout the web.

```{figure} ../images/illustration/github_zenodo.jpg
---
scale: 60%
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```


## Python

Our workflows use the [Python](https://www.python.org/) programming language and make use of packages (also known as libraries) from the scientific Python ecosystem for data reading, writing, processing and visualization.

Project Pythia has a [quickstart guide](https://foundations.projectpythia.org/foundations/quickstart.html) for Python beginners that are already familiar with basic programming concepts and [short tutorials](https://foundations.projectpythia.org/foundations/how-to-run-python.html) for setting up a Python environment on a Linux computer. They also have [introductions](https://foundations.projectpythia.org/core/overview.html) to some core scientific Python packages.


### Packages

Python packages commonly used in the CLIMAAX risk workflows are:

- [numpy](https://numpy.org/doc/1.26/), [dask](https://docs.dask.org/): multidimensional data arrays.
- [pandas](https://pandas.pydata.org/pandas-docs/version/2.2/), [geopandas](https://geopandas.org/en/v1.0.1/) handling of tabular (geospatial) data.
- [xarray](https://docs.xarray.dev/en/v2024.06.0/), [netcdf4](https://unidata.github.io/netcdf4-python/), [rasterio](https://rasterio.readthedocs.io/), [rioxarray](https://corteva.github.io/rioxarray/): handling of higher-dimensional (geospatial) data.
- [scipy](https://docs.scipy.org/doc/scipy-1.14.0/), [scikit-learn](https://scikit-learn.org/1.5/): advanced data processing and statistics functions.
- [matplotlib](https://matplotlib.org/3.8.4/), [cartopy](https://scitools.org.uk/cartopy/docs/latest/index.html), [contextily](https://contextily.readthedocs.io/), [plotly](https://plotly.com/python/): static and interactive data visualization.

Many of these packages provide tutorials and example pages in their documentation in addition to the description of each library's API.

Xarray's surrounding [ecosystem](https://docs.xarray.dev/en/latest/ecosystem.html) consist of packages that build on and support its data structures.


### Environments and package management

A package manager configures the libraries of a Python environment and carries out tasks such as package installation, upgrading and removal.
At CLIMAAX, we mainly use the conda package manager and retrieve packages from the [conda-forge](https://conda-forge.org) channel.
We therefore recommend to use the [miniforge](https://conda-forge.org/download/) conda installer, but other conda installers, e.g. [miniconda](https://docs.anaconda.com/miniconda/) work too.

All workflow repositories contain an `environment.yml` file to simplify the creation of a suitable Python environment with conda.
A general environment for all CLIMAAX workflows can be created based on the `environment.yml` file in our [workflow template](https://github.com/CLIMAAX/workflow_template) repository.


## Jupyter

Our workflows combine documentation, code and outputs in Jupyter notebooks, a format widely used for data analysis, visualization and educational purposes.
While this handbook contains static representations of the workflows, the underlying notebooks available from GitHub are intended to be used in an interactive fashion when opened in a Jupyter-compatible user interface.
The Jupyter ecosystem itself provides the web browser-based [JupyterLab](https://jupyterlab.readthedocs.io/en/latest/) and [classic Notebook](https://jupyter-notebook.readthedocs.io/en/latest/) interfaces and some editors like VS Code also have [native support](https://code.visualstudio.com/docs/datascience/jupyter-notebooks) for working interactively with Jupyter notebooks.

:::{tip}
The Python environments in CLIMAAX workflow repositories contain both the JupyterLab and classic Notebook interfaces.
With a workflow environment activated, run, e.g., `jupyter lab` in a terminal to start working with the notebooks.
:::

See the [Jupyter documentation](https://docs.jupyter.org/en/latest/) for more information about the project and related software.
Project Pythia has a [getting started with Jupyter](https://foundations.projectpythia.org/foundations/getting-started-jupyter.html) guide with explanations of the JupyterLab user interface.


## Git and GitHub

Version control system.

- [Getting started with Git](https://librarycarpentry.org/lc-git/index.html)
- [Introduction to Git](https://the-turing-way.netlify.app/reproducible-research/vcs/vcs-git#rr-vcs-git)

We use GitHub for distribution of version-controlled code and content and maintain our repositories in the CLIMAAX organization.

- [Getting started with Github](https://foundations.projectpythia.org/foundations/getting-started-github.html)
