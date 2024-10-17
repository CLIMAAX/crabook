# Uncertainties in exposure and vulnerability datasets

The [exposure](exposure_data) and [vulnerability](vulnerability_data) datasets described are subject to a range of uncertainties that need to be considered when using these data in CRA. Here we present a list of such uncertainties.


## Population datasets

- Population datasets are mainly derived or modeled from secondary data sources, particularly at continental to global scales. **High-resolution data** (both temporal and spatial) are often not consistently available for all countries. For the pan-European data assembled for the CLIMAAX project, this is particularly true for countries outside the EU where European data reporting standards are not (yet) enforced (e.g. Turkey, Ukraine, Montenegro).
- Population data are derived from national census data and population registries, with census intervals and reporting periods varying significantly across countries ([Leyk et al. 2019](https://doi.org/10.5194/essd-11-1385-2019)).
- **Disaggregation methods** to raster data add another layer of uncertainty. Most available population datasets disaggregate census-based spatial population distribution to the raster cell level by using ancillary datasets, such as built-up land, land cover, or nighttime lights, which adds uncertainty ([Leyk et al. 2019](https://doi.org/10.5194/essd-11-1385-2019)).


## Satellite imagery

- Datasets derived from satellite imagery delineate settlements, built-up land, or buildings consistently across countries due to standardized algorithms. Differences in building materials, roof structures, and settlement layouts can result in **missed settlements** ([Leyk et al. 2018](https://doi.org/10.1016/j.rse.2017.08.035)).
- Satellite-based land use and land cover data are subject to uncertainties due to the **classification algorithms** used ([Congalton et al. 2014](https://doi.org/10.3390/rs61212070)).
- Some exposure and vulnerability observational data are only available in **dated versions**, such as Global Agro-Ecological Zones (GAEZ), updated only to 2010 values. This time lag between available observations and real-world conditions affects the accuracy of the analysis as it conceals the changes that have occurred in the last decade ([Fischer et al. 2021](https://doi.org/10.4060/cb4744en)).


## OpenStreetMap (OSM)

- This database is a **crowd-sourced** geographic information database, maintained by volunteers worldwide. The crowd-sourced nature can impact the accuracy and completeness of OSM data ([Herfort et al. 2023](https://doi.org/10.1038/s41467-023-39698-6)), both geospatially ([Wechsler et al. 2019](https://doi.org/10.1007/978-3-030-04750-4_16)) and temporally ([Singh 2017](https://doi.org/10.1186/s40965-017-0026-3)). 
- **The level of detail** varies across regions and is often less detailed in rural and economically disadvantaged areas ([Zhou et al. 2022](https://doi.org/10.1080/17538947.2022.2159550)). Main OSM features are well-mapped, but **smaller details** may be missing or inaccurately represented ([Törnros et al. 2015](https://doi.org/10.5194/isprsannals-II-3-W5-353-2015)).
- OSM updates **over time**, improving accuracy but possibly introducing inconsistencies ([Singh 2017](https://doi.org/10.1186/s40965-017-0026-3)). Despite these potential inaccuracies, OSM is considered the best freely available data for building and infrastructural level at a large scale. OSM does not include projections of future changes like new construction or urban development, which affects static factors in climate risk assessments.


## Damage functions

- Damage functions, such as depth-damage curves for flood risk assessment ([Huizinga et al. 2017](https://data.europa.eu/doi/10.2760/16510)), are often based on local data aggregated to a global scale. **Global datasets** primarily represent common building styles without accounting for local variations. Improvements could be made by including additional local data, such as building types and differences between rural and urban areas.
- **Maximum damage values** are represented by continent averages, but national estimates would benefit from literature reviews for more accurate local data.


## Future projections

- Predicting future societal development is impossible, so **socioeconomic scenarios** must be considered to cover the range of future uncertainty ([O’Neill et al. 2017](https://doi.org/10.1016/j.gloenvcha.2015.01.004)).
- Uncertainties in the underlying base data **are compounded** by uncertainties in future developments. Therefore, future exposure and vulnerability projections are subject to significant uncertainties in terms of both the underlying datasets and future socioeconomic developments.


## References

- Congalton, R., Gu, J., Yadav, K., Thenkabail, P., & Ozdogan, M. (2014). Global Land Cover Mapping: A Review and Uncertainty Analysis. Remote Sensing, 6(12), 12070–12093. https://doi.org/10.3390/rs61212070
- Fischer, G., Nachtergaele, F. O., van Velthuizen, H. T., Chiozza, F., Franceschini, G., Henry, M., Muchoney, D., & Tramberend, S. (2021). Global agro-ecological zone V4 – Model documentation. FAO. https://doi.org/10.4060/cb4744en
- Herfort, B., Lautenbach, S., Porto De Albuquerque, J., Anderson, J., & Zipf, A. (2023). A spatio-temporal analysis investigating completeness and inequalities of global urban building data in OpenStreetMap. Nature Communications, 14(1), 3985. https://doi.org/10.1038/s41467-023-39698-6
- Huizinga, J., de Moel, H., & Szewczyk, W. (2017). Global flood depth-damage functions: Methodology and the database with guidelines. Publications Office. https://data.europa.eu/doi/10.2760/16510
- Leyk, S., Gaughan, A. E., Adamo, S. B., Sherbinin, A. de, Balk, D., Freire, S., Rose, A., Stevens, F. R., Blankespoor, B., Frye, C., Comenetz, J., Sorichetta, A., MacManus, K., Pistolesi, L., Levy, M., Tatem, A. J., & Pesaresi, M. (2019). The spatial allocation of population: A review of large-scale gridded population data products and their fitness for use. Earth System Science Data, 11(3), 1385–1409. https://doi.org/10.5194/essd-11-1385-2019
- Leyk, S., Uhl, J. H., Balk, D., & Jones, B. (2018). Assessing the accuracy of multi-temporal built-up land layers across rural-urban trajectories in the United States. Remote Sensing of Environment, 204, 898–917. https://doi.org/10.1016/j.rse.2017.08.035
- O’Neill, B. C., Kriegler, E., Ebi, K. L., Kemp-Benedict, E., Riahi, K., Rothman, D. S., Ruijven, B. J. van, Vuuren, D. P. van, Birkmann, J., Kok, K., Levy, M., & Solecki, W. (2017). The roads ahead: Narratives for shared socioeconomic pathways describing world futures in the 21st century. Global Environmental Change, 42, 169–180. https://doi.org/10.1016/j.gloenvcha.2015.01.004
- Singh, S. K. (2017). Evaluating two freely available geocoding tools for geographical inconsistencies and geocoding errors. Open Geospatial Data, Software and Standards, 2, 1–8. https://doi.org/10.1186/s40965-017-0026-3
- Törnros, T., Dorn, H., Hahmann, S., & Zipf, A. (2015). Uncertainties of completeness measures in OpenStreetMap–A case study for buildings in a medium-sized German city. ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences, 2, 353–357. https://doi.org/10.5194/isprsannals-II-3-W5-353-2015
- Wechsler, S. P., Ban, H., & Li, L. (2019). The pervasive challenge of error and uncertainty in geospatial data. Geospatial Challenges in the 21st Century, 315–332. https://doi.org/10.1007/978-3-030-04750-4_16
- Zhou, Q., Zhang, Y., Chang, K., & Brovelli, M. A. (2022). Assessing OSM building completeness for almost 13,000 cities globally. International Journal of Digital Earth, 15(1), 2400–2421. https://doi.org/10.1080/17538947.2022.2159550
