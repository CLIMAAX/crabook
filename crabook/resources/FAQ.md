# Frequently asked questions

:::{admonition} Can't find what you are looking for?
:class: tip

Ask your question in our [Handbook forum on GitHub](#handbook-forum)!
:::


## Hazard, exposure and vulnerability data

:::{dropdown} Can I replace the LUISA landcover data with another land use dataset?

Yes.
However, the workflows may have to be adapted to the substituted land use classification.

E.g., when mapping monetary value to land use classes and computing damages based on a [vulnerability curve](./FAQ/vulnerability_curves.md) you may have to edit/remove/add entries in the tables for values and damages to match the classes of the substituted dataset.
:::


::::{dropdown} How can I customize the estimation of damages in the risk assessment?

A damage estimation for a flood or windstorm is created by multiplying how much can possibly be damaged by a percentage of what is actually damaged based on the severity of the hazard.
{numref}`damage-estimation-method` shows the possible approaches to adapting general data to fit the local or regional situation:

:::{figure}  ../images/vuln_curve_adjustment_method.png
:width: 80%
:name: damage-estimation-method
:align: center

Standard damage estimations and damage curves from literature are adjusted to the local context using local knowledge.
The two final products are a table with custom maximum damage per land use and a set of damage curves for the various land uses in the region.
:::

- Adapt the maximum damage estimation for your region (see [](./FAQ/maximum_damages.md))
- Adapt the vulnerability curves for your region (see [](./FAQ/vulnerability_curves.md))
- Improve the land use information with local knowledge

We recommend to start by updating the provided damage estimation spreadsheet template with local values.
As a first step, adjust the GDP/capita (see the [note on currency units](#maximum-damages-units)).
::::


:::{dropdown} How do I work with population data when a high-density city dominates the surrounding low-density areas?
 
We recommend to control the scaling of outputs to receive meaningful results.
E.g., this could mean manually setting the bins for risk categories when using a risk index method such that information from less densely populated regions are retained.
You can further consider creating separate outputs for low- and high-density regions.

A [logarithmic scaling](https://en.wikipedia.org/wiki/Logarithmic_scale) of results during visualization can also help to retain information across multiple orders of magnitude.
However, care must be taken when interpreting logarithmic data since the quantitative relationship between a linear increase in darkness/intensity along a colorbar and the values represented by those colors is not proportional anymore.
:::



## Risk workflows

:::{dropdown} <img src="../images/icon_s/icon_s_floods.png" class="hazard-icon"> Can I use the maps for the future hazard of the river floods workflow to assess damages?

Technically, yes.
However, the data resolution is too coarse for us to give a recommendation to use them in the damage assessment.

We instead suggest to consider damage estimation approaches based on the high-resolution historical data, e.g., by considering scenarios like "what if the 20 year return period today becomes the 10 year return period tomorrow?".
The likelihood of such scenarios can then be evaluated based on the coarser-resolution future data.
:::


:::{dropdown} <img src="../images/icon_s/icon_s_floods.png" class="hazard-icon"> When multiple rivers flow through my area of interest should I consider them together or separately in the river flooding workflow?

In the workflow and the flood maps used as input to the workflow they are considered together.
However, for a more detailed analysis it could indeed be interesting to look at each river's catchment separately.

This can be implemented, e.g., by clipping the area of interest based on the shape of the catchment (https://github.com/CLIMAAX/FLOODS/issues/8).
:::


:::{dropdown} <img src="../images/icon_s/icon_s_fire.png" class="hazard-icon"> How should I best choose the digital elevation model (DEM) required by the Wildfire (ML approach) workflow?

The reference DEM is important in the workflow as it defines the reference grid to interpolate all other input data to.
We recommend to choose data with a resolution between 500 and 50 m for best results.
Increasing the resolution further will lead to diminishing returns for the workflow's output, also because the preconfigured climate datasets with 1 km resolution limit further improvements.
:::



## Data processing


:::{dropdown} How can I import results from a workflow into other software (e.g., GIS) for further processing?

Many of our workflows are configured to present their results not just as plots in the Jupyter notebooks, but also to write them to disk in a georeferenced format for further processing.
This is usually a NetCDF file with latitude-longitude coordinates or a GeoTIFF file with an attached coordinate reference system.

If a workflow result is not currently exported by a workflow, we recommend to use the [xarray](https://tutorial.xarray.dev/fundamentals/01.1_io.html) and [rioxarray](https://corteva.github.io/rioxarray/html/examples/examples.html) packages to export georeferenced information.
:::


:::{dropdown} How can I load my file for use in a workflow?

Here are some recommended Python packages for loading different file formats:

| File type | Common extensions | Recommended package |
|---|---|---|
| GeoTIFF | `.tif`, `.tiff` | [xarray](https://docs.xarray.dev/en/stable/) with [rioxarray](https://corteva.github.io/rioxarray/stable/) |
| NetCDF | `.nc` | [xarray](https://docs.xarray.dev/en/stable/) with [netcdf4](https://unidata.github.io/netcdf4-python/) |
| CSV | `.csv` | [pandas](https://pandas.pydata.org/docs/index.html) |
| Excel Workbook | `.xlsx` | [pandas](https://pandas.pydata.org/docs/index.html) |
| Geojson | `.json`, `.geojson` | [geopandas](https://geopandas.org/en/stable/) |
| Shapefile | `.shp` | [geopandas](https://geopandas.org/en/stable/) |

See also: Resources » Software » [Python](software.md#python).
:::


:::{dropdown} How can I reproject a dataset from one coordinate reference system (CRS) to another?

Use the [rio.reproject()](https://corteva.github.io/rioxarray/stable/rioxarray.html#rioxarray.raster_array.RasterArray.reproject) method provided by rioxarray for all xarray data arrays and datasets.
E.g.:

```python
ds = xr.open_dataset(...)
ds.rio.reproject("EPSG:4326")
```

The dataset that is reprojected must have its CRS configured.
You can check the CRS of a dataset with

```python
ds.rio.crs
```

To configure the CRS manually, use [rio.write_crs()](https://corteva.github.io/rioxarray/stable/rioxarray.html#rioxarray.rioxarray.XRasterBase.write_crs) and make sure the spatial dimensions are set up properly, e.g., by naming the appropriate coordinates `x` and `y` or with [rio.set_spatial_dims()](https://corteva.github.io/rioxarray/stable/rioxarray.html#rioxarray.rioxarray.XRasterBase.set_spatial_dims).

Note that additional parameters such as the output resolution and resampling method can be specified when reprojecting with rioxarray.
The [reproject_match](https://corteva.github.io/rioxarray/stable/rioxarray.html#rioxarray.raster_array.RasterArray.reproject_match) method easily matches the CRS of another dataset.
:::
