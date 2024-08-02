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

- xarray, netcdf4, rasterio, rioxarray
- numpy, dask
- pandas, geopandas
- scipy, scikit-learn
- matplotlib, cartopy, contextily
- plotly


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
