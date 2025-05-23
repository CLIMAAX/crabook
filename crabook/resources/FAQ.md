# Frequently asked questions

:::{note}

This page is under construction. We continue to refine our answers to the questions already on the list and will be adding more entries in the future.
:::


## Data

:::{dropdown} Can I replace the LUISA landcover data with another land use dataset?

Yes.
However, the workflows may have to be adapted to the substituted land use classification.

E.g., when mapping monetary value to land use classes and computing damages based on a vulnerability curve you may have to edit/remove/add entries in the tables for values and damages to match the classes of the substituted dataset.
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

We recommend to start with updating the provided damage estimation spreadsheet template (`LUISA_damage_info_curves_template.xlsx`) with local values.
::::


:::{dropdown} How can I best work with population data when a high-density city dominates the surrounding low-density areas?
 
We recommend to control the scaling of outputs to receive meaningful results.
E.g., this could mean manually setting the bins for risk categories when using a risk index method such that information from less densely populated regions are retained.
You can further consider creating separate outputs for low- and high-density regions.

A [logarithmic scaling](https://en.wikipedia.org/wiki/Logarithmic_scale) of results during visualization can also help to retain information across multiple orders of magnitude.
However, care must be taken when interpreting logarithmic data since the quantitative relationship between a linear increase in darkness/intensity along a colorbar and the values represented by those colors is not proportional anymore.
:::


:::{dropdown} How can I import results from a workflow into other software (e.g., GIS) for further processing?

Many of our workflows are configured to present their results not just as plots in the Jupyter notebooks, but also to write them to disk in a georeferenced format for further processing.
This is usually a NetCDF file with latitude-longitude coordinates or a GeoTIFF file with an attached coordinate reference system.

If a workflow result is not currently exported by a workflow, we recommend to use the [xarray](https://tutorial.xarray.dev/fundamentals/01.1_io.html) and [rioxarray](https://corteva.github.io/rioxarray/html/examples/examples.html) packages to export georeferenced information.
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


:::{dropdown} <img src="../images/icon_s/icon_s_heatwaves.png" class="hazard-icon"> How can I apply the satellite-based heatwave risk assessment to regions larger than the maximum size allowed by the RSLab data portal?

Land surface temperature data for regions larger than allowed for download by the RSLab data portal can be computed from Landsat Collection 2 Level 1 imagery, e.g., with the [pylandtemp](https://github.com/pylandtemp/pylandtemp) package.

A proposed workflow addition for downloading the required satellite images from a [USGS data portal](https://earthexplorer.usgs.gov/) and computing the land surface temperature can be found in the pull request https://github.com/CLIMAAX/HEATWAVES/pull/15.
:::


:::{dropdown} <img src="../images/icon_s/icon_s_fire.png" class="hazard-icon"> How should I best choose the digital elevation model (DEM) required by the Wildfire (ML approach) workflow?

The reference DEM is important in the workflow as it defines the reference grid to interpolate all other input data to.
We recommend to choose data with a resolution between 500 and 50 m for best results.
Increasing the resolution further will lead to diminishing returns for the workflow's output, also because the preconfigured climate datasets with 1 km resolution limit further improvements.
:::