# Riverine floods 

## Damage analysis Risk framework 

Deterministic risk is calculated as a combination of flood extent maps of different return periods and flood damage (Rojas et al., 2013)  

```{figure} ../../images/image3.png
---
name: Land-use information and Stage-Damage Curves
---
Land-use information and Stage-Damage Curves
```

_River flood extent and water depth_: available from the [JRC repository](https://data.jrc.ec.europa.eu/dataset/1d128b6c-a4ee-4858-9e34-6210707f3c81) for different return periods. Flood extent map of 100m resolution 

_Land-use information_: The land cover map and all the spatial projections of population and land cover are available from the [JRC Data Catalogue](https://data.jrc.ec.europa.eu/collection/luisa). 

_Flood damage_: assessed as a combination between flood extent/water depths and damage curve, available here: [https://publications.jrc.ec.europa.eu/repository/handle/JRC105688](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688). For each pixel, the water depths are used as input in the damage curve to assess the damage, together with different land use and country.  

Flood affected population is assessed by overlaying the European population density map at 100 m resolution (https://doi.org/10.6084/m9.figshare.6210392) with the flood inundation maps for a given return map. Another possible dataset is the [Global Human Settlement Population dataset](https://ghsl.jrc.ec.europa.eu/download.php?ds=pop) which also has 100m resolution as the JRC flood data. 

```{figure} ../../images/image4.png
---
name: Residential buildings and content
---
Residential buildings and content
```

**Probabilistic assessment** of flood damage is calculated for different return periods (i.e. 2, 5, 10, 20, 50, 100, 250 and 500 years). In this way, damage-probability curves can be obtained at the grid cell by interpolating the damage estimates between the different recurrence intervals considered. The expected annual damages at a given grid cell due to river flooding are thus the integral of the damage-probability curve. Flood protection can be included in the expected annual damages estimation by truncating the damage-probability curves at the corresponding protection level (e.g. design flood with return period of 100 years). The integral of the remaining part after truncation quantifies the expected annual damages and expected annual population affected caused by river flooding considering flood protection up to the design flood. Similar to flood damages, population exposure probability functions can be derived for each grid cell within the modelled domain. 

% This is an example of table of contents and also a comment... 
% ```{tableofcontents}
% ```