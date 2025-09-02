# Datasets

Workflows as presented in this handbook mostly rely on public datasets hosted, e.g., by the [CDS](https://cds.climate.copernicus.eu/).
However, some workflows have specific data requirements (in terms of variables or resolution) that cannot easily be satisfied with public datasets or simply require large amounts of data as input.
In these cases, **preprocessed datasets** and **data samples** can be provided by CLIMAAX developers and utilized in the workflows to lower the barrier of entry for users and to serve as blueprints for the input data required by the climate risk assessment workflows.
Such data is hosted on the CLIMAAX cloud storage and described here.

```{figure} ../images/illustration/data_manager.jpg
---
scale: 60%
figclass: margin-caption
---
Illustration created by Scriberia with The Turing Way community. CC-BY 4.0. [10.5281/zenodo.3332807](https://doi.org/10.5281/zenodo.3332807)
```

:::{note}
Datasets hosted on the CLIMAAX cloud storage are provided for the convenience of workflow users.
This service should not be considered a long-term and reliable source of data.
Datasets will be moved to a persistent and citable location in the future.
:::


## CLIMAAX datasets

Datasets specifically realated to one of the CLIMAAX workflows:

- [Drought risk data](datasets/droughtrisk_sample_nuts3) (NUTS3)
- [Precipitation pre-calculated IDF](datasets/precipitation_idf_europe) (Europe)
- [Wildfire training and vulnerability data](datasets/wildfire_sample_cat) (Catalonia)


## Dataset mirrors

Open datasets from elsewhere re-hosted for more convenient access in the CLIMAAX workflows:

%- [FWI simulations with CMIP6-informed perturbations](datasets/fwi_1981-2010_europe) (Europe)
- [ECLIPS-2.0](datasets/eclips2.0_mirror) (Europe)
- [EFFIS Wildfire Risk](datasets/effis_mirror) (Europe)
- [River discharges forced by EURO-CORDEX](datasets/river_discharges_mirror) (Europe)


## How to access

Most of our datasets are comprised of multiple files available for individual download via https.

::::{tab-set}

:::{tab-item} pooch (recommended)

We provide [file registries](https://www.fatiando.org/pooch/latest/registry-files.html) for use with the [pooch](https://www.fatiando.org/pooch/latest/) Python package.

1.  Set up a download manager for a CLIMAAX dataset

    ```python
    import pooch

    climaax_data = pooch.create(
        base_url="https://object-store.os-api.cci1.ecmwf.int/climaax/<DATASET-ID>/",
        path="." # set your download location
    )
    ```

    where `<DATASET-ID>` is a placeholder for the identifier of the accessed dataset.

2.  Download the `registry.txt` file from the corresponding dataset page.
    Load the pooch registry for the dataset (adapt the file path to your download location):

    ```python
    climaax_data.load_registry("registry.txt")
    ```

3.  Individual files from the dataset can be downloaded with:

    ```python
    climaax_data.fetch("path/to/file")
    ```

    and the registry can be used to easily fetch an entire dataset:

    ```python
    for path in climaax_data.registry:
        climaax_data.fetch(path)
    ```

    Pooch will download the files into a folder structure as laid out by the dataset.
:::

:::{tab-item} file listing

Each dataset page contains a listing of all files included in the dataset.
Individual files can be downloaded via the links in the listings from a web browser or with tools such as [wget](https://www.gnu.org/software/wget/) and [curl](https://curl.se/).
:::

::::