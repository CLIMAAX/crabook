# Frequently Asked Questions

:::{note}

This page is under construction. We continue to refine our answers to the questions already on the list and will be adding more entries in the future.
:::



## Data

%:::{dropdown} Which datasets can I use when my area of interest is not covered by the EURO-CORDEX domain?
%
%...
%:::


:::{dropdown} Can I replace the LUISA landcover data with another land use dataset?

Yes.
However, the workflows may have to be adapted to the substituted land use classification.

E.g., when mapping monetary value to land use classes and computing damages based on a vulnerability curve you may have to edit/remove/add entries in the tables for values and damages to match the classes of the substituted dataset.
:::


:::{dropdown} How can I create a custom damage table for the risk assessment?

We recommend to start with the provided table and adapt the GDP per capita value first of all.
From there, you can edit the table anyway you like to obtain an acccurate representation of your region.
If you find that the preconfigured formulas in the tables do not lead to representative values for your area of interest, you can change the formulas in addition to their parameters or prescribe values directly instead of computing them via a formula.

The preconfigured formulas in our tables were fitted to global data and constructed to provide a consistent estimation of values/damages across the globe.
See the report of [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688) and our [related overview](../notebooks/workflows/vulnerability-curves-adjustment) in the Handbook for more information on the values and formulas in the damage tables.
:::


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