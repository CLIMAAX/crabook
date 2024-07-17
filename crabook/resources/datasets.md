CLIMAAX datasets
================

:::{note}
These pages are under construction.
:::

Workflows as presented in this handbook mostly rely on public datasets hosted, e.g., by the [CDS](https://cds.climate.copernicus.eu/).
However, some workflows have specific data requirements (in terms of variables or resolution) that cannot easily be satisfied with public datasets or simply require large amounts of data as input.
In these cases, **preprocessed datasets** and **data samples** can be provided by CLIMAAX developers and utilized in the workflows to lower the threshold of entry for users and serve as examples for the datasets required for running the climate risk assessment workflows.
Such data is hosted on the CLIMAAX cloud storage and described here.

```{figure} ../images/illustration/data_manager.jpg
---
scale: 60%
---
This illustration is created by Scriberia with The Turing Way community. Used under a CC-BY 4.0 licence. DOI: [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

## How to access

We provide file registries for use with the [pooch](https://www.fatiando.org/pooch/latest/) Python package.

Set up a download manager for a CLIMAAX dataset

```python
import pooch

climaax_data = pooch.create(
    base_url="https://object-store.os-api.cci1.ecmwf.int/climaax/<DATASET-ID>/",
    path="." # set your download location
)
```

where `<DATASET-ID>` is a placeholder for the identifier of the accessed dataset.

Load the pooch [file registry](https://www.fatiando.org/pooch/latest/registry-files.html) provided for every dataset (optional, but recommended):

```python
# Download registry.txt from dataset page first
climaax_data.load_registry("registry.txt")
```

Download individual files from the dataset:

```python
climaax_data.retrieve("path/to/file")
```

or all files if a file registry was attached:

```python
for path in climaax_data.registry:
    climaax_data.fetch(path)
```



## Available Datasets

- [Drought risk data](datasets/droughtrisk_sample_nuts3) (NUTS3)
- [Precipitation hazard data](datasets/precipitation_idf_gcm_eur) (Europe)
- [Wildfire training and vulnerability data](datasets/wildfire_sample_cat) (Catalonia)