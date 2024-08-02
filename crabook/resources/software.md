# Software environment

:::{note}
This page is under construction.
:::

A page with links to tutorials and documentation for technical things outside of scope of CLIMAAX.

```{figure} ../images/illustration/github_zenodo.jpg
---
scale: 60%
---
This illustration is created by Scriberia with The Turing Way community. Used under a CC-BY 4.0 licence. DOI: [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```


## Python

Programming language and software ecosystem.

- [Getting started with Python](https://foundations.projectpythia.org/foundations/getting-started-python.html#)
- [Core scientific Python libraries](https://foundations.projectpythia.org/core/overview.html)


### Packages

Python packages commonly used in the CLIMAAX risk workflows for data handling, processing and visualization:

- [xarray](https://docs.xarray.dev/en/v2024.06.0/), [netcdf4](https://unidata.github.io/netcdf4-python/), [rasterio](https://rasterio.readthedocs.io/), [rioxarray](https://corteva.github.io/rioxarray/)
- [numpy](https://numpy.org/doc/1.26/), [dask](https://docs.dask.org/)
- [pandas](https://pandas.pydata.org/pandas-docs/version/2.2/), [geopandas](https://geopandas.org/en/v1.0.1/)
- [scipy](https://docs.scipy.org/doc/scipy-1.14.0/), [scikit-learn](https://scikit-learn.org/1.5/)
- [matplotlib](https://matplotlib.org/3.8.4/), [cartopy](https://scitools.org.uk/cartopy/docs/latest/index.html), [contextily](https://contextily.readthedocs.io/)
- [plotly](https://plotly.com/python/)


### Environments and package management

We provide `environment.yml` files for the conda package manager to simplify the creation of a suitable Python environment for our workflows. Packages in our environment files are exclusively retrieved from the [conda-forge](https://conda-forge.org) channel. We therefore recommend to use the [miniforge](https://conda-forge.org/download/) conda installer, but other conda installers, e.g. [miniconda](https://docs.anaconda.com/miniconda/) work too.


## Jupyter

Interactive computing environment.

- [Getting started with Jupyter](https://foundations.projectpythia.org/foundations/getting-started-jupyter.html)

:::{note}
The environment specifications provided in every CLIMAAX hazard workflows repository include both the jupyter lab and notebook interfaces.
:::


## Git and GitHub

Version control system.

- [Getting started with Git](https://librarycarpentry.org/lc-git/index.html)
- [Introduction to Git](https://the-turing-way.netlify.app/reproducible-research/vcs/vcs-git#rr-vcs-git)

We use GitHub for distribution of version-controlled code and content and maintain our repositories in the CLIMAAX organization.

- [Getting started with Github](https://foundations.projectpythia.org/foundations/getting-started-github.html)
