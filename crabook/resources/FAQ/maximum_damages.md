# Maximum damage estimation

A guide to estimate the maximum damage per square meter of different asset classes.

The calculations outlined in the following are implemented in the damage estimation spreadsheet template (`LUISA_damage_info_curves_template.xlsx`) provided with CLIMAAX workflows that follow this methodology of estimating damages.

:::{note}

The parameters in the formulas below correspond to columns **C** to **AC** in the spreadsheet template.
:::


## Asset classes

{numref}`damage-class-table` lists the  asset classess distinguished in the damage estimation.

:::{list-table} Flood damage classes defined by [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688).
:widths: 1 5
:header-rows: 1
:name: damage-class-table

* - Damage class
  - Description
* - Residential
  - * Refers to residential buildings such as houses and apartments and their contents.
    * Damage to assets in residential areas which are not residential buildings (i.e. in the public area and gardens) is not included
* - Commerce
  - * Refers to commercial buildings and their contents such as offices, schools, hospitals, hotels, shops, etc.
    * Damage to assets in commercial areas (i.e. in the public area and vehicles) is not included
* - Industry
  - * Refers to industrial buildings and their contents such as warehouses, distribution centers, factories, laboratories, etc.
    * Damage to assets in industrial areas (i.e. in the public area and vehicles) is not included
* - Transport
  - Transport facilities
* - Infrastructure
  - Roads and railroads
* - Agriculture
  - Based on damage resulting from flooded agricultural lands only (i.e. does not include farms, sheds, farming material, etc.)
:::


## Commercial, residential and industrial

### For building footprints

The maximum damage that can occur to a building is a combination of construction costs and the value of the content inside a building.
When a flood occurs, the building is damaged but also the furniture, machines, or store inventory is affected.

First, the construction cost is determined.
When building costs are known in the region, this value can be filled in directly.
Otherwise, the following relation found by [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688) can be used to calculate the construction cost for buildings per square meter:

```{math}
:label: construction-cost

\mathrm{construction\ cost / m^2} =  a \cdot (\mathrm{GDP\ per\ capita})^b
```

:::{important}

In the construction cost formula {eq}`construction-cost`, values of the GDP and construction cost have specific units that must not be changed.
When using the $a$ and $b$ parameters of Huizinga et al. (2017; see below),

- GDP must be specified in year 2010 US$ and 
- construction costs are computed in year 2010 €.

Suitable input values for GDP are provided by Huizinga et al. (2017) in the [data spreadsheet](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC105688/copy_of_global_flood_depth-damage_functions__30102017.xlsx) attached to their report.
The [World Bank's data portal](https://data.worldbank.org/) can also be searched for GDP information.

**Conversion of currency and adjustments for inflation should be applied to the output costs/damages, not the input GDP.**
:::

Based on the construction cost, the damage to existing structures is computed as

```{math}
:label: maximum-damage-original
\begin{align}
  \mathrm{Max\ damage\ structure / m^2} = \; &  \mathrm{construction\ cost / m^2} * \mathrm{depreciated\ value} \\
  &  * (1 - \mathrm{undamageable\ percentage}) * \mathrm{materials\ used\ factor} \\
\end{align}
```

When the maximum damage for a structure is known, the damage to content can be estimated by multiplying the structure damage with a content importance factor $f$.
It estimates how much the content is worth based on how valuable the building is.

```{math}
:label: maximum-damage-content
\mathrm{Max\ damage\ content / m^2} = f \cdot \mathrm{Max\ damage\ structure / m^2}
```

The total damage per square meter can then be defined by adding the maximum content and structural damage together.

```{math}
:label: total-damage
\mathrm{Total\ damage / m^2} = \mathrm{Max\ damage\ structure / m^2} + \mathrm{Max\ damage\ content / m^2}
```


::::{dropdown} Empirical values for building use classes

[Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688) assume different building costs per type of building:

:::{list-table} 
:header-rows: 1
:name: ab-table

* - Asset class
  - a
  - b
* - Residential
  - 24.078
  - 0.3852
* - Commercial
  - 33.642
  - 0.3574
* - Industrial
  - 30.824
  - 0.3249
:::
::::


::::{dropdown} Indicatory values for the undamageable percentage
:::{list-table}
:header-rows: 1
:name: undamageable-table

* - Material
  - Undamageable part
* - Concrete
  - 0.4
* - Masonry
  - 0.4
* - Wood
  - 0
* - Mud
  - 0.33
* - Informal/slum
  - 0
:::

Source: [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688)
::::

::::{dropdown} Indicatory values for the materials used factor
:::{list-table}
:header-rows: 1
:name: material-factor-table

* - Material
  - Materials used factor
* - Mud walls
  - 0.2
* - Corrugate walls
  - 0.6
* - Informal/slums
  - 0.125
* - Rural
  - 0.33
:::

Source: [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688)
::::


::::{dropdown} Indicatory values for the importance of content factor
:::{list-table}
:header-rows: 1
:name: content-importance-table

* - Asset class
  - Importance of content factor
* - Residential
  - 0.5
* - Commercial
  - 1
* - Industrial
  - 1.5
:::

Source: [Huizinga et al. (2017)](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688)
::::



### For a rasterized land use dataset

To account for mixed use of land in a rasterized land use dataset like LUISA, we create land use class-specific parameters $a_\mathrm{landuse}$ and $b_\mathrm{landuse}$ by weighting the respective parameters of each asset class by the ratio of the class' assets and all assets in the cell:

```{math}
:label: construction-variable-a
a_\mathrm{landuse} = R_\mathrm{res} \cdot a_\mathrm{res} + R_\mathrm{com} \cdot a_\mathrm{com} + R_\mathrm{ind} \cdot a_\mathrm{ind}
```

```{math}
:label: construction-variable-b
b_\mathrm{landuse} = R_\mathrm{res} \cdot b_\mathrm{res} + R_\mathrm{com} \cdot b_\mathrm{com} + R_\mathrm{ind} \cdot b_\mathrm{ind}
```

where

- $R_\mathrm{res}$ is the ratio of residential assets in the specific land use cell,
- $a_\mathrm{res}$ is the a variable for the residential-related assets,
- $b_\mathrm{res}$ is the b variable for the residential-related assets,

and analogous definitions for $R_\mathrm{com}$, $a_\mathrm{com}$, $b_\mathrm{com}$ (commercial assets) and $R_\mathrm{ind}$, $a_\mathrm{ind}$, $b_\mathrm{ind}$ (industrial assets).
A land use-specific importance of content factor $f_\mathrm{landuse}$ is defined in the same way:

```{math}
:label: content_factor_eq
f_\mathrm{landuse} =  R_\mathrm{res} \cdot f_\mathrm{res} + R_\mathrm{com} \cdot f_\mathrm{com} + R_\mathrm{ind} \cdot f_\mathrm{ind}
```

When working with land use data that has a raster format, a single cell is not necessarily filled completely by building footprints.
A density factor takes us from a fully build up land use cell to one which contains some 'empty space' between buildings:

```{math}
:label: damage-landuse-CRI
(\mathrm{Total\ damage / m^2})_{landuse} = \mathrm{Total\ damage / m^2} * \frac{\mathrm{area\ covered\ by\ building\ footprint}}{\mathrm{total\ area}}
```

## Agriculture

Per land use type of agriculture, the value added can be changed to get some differentiation between the types of farming that is being done.

```{math}
:label: damage-landuse-agriculture
\mathrm{Value\ added / m^2} = \frac{\mathrm{Value\ added / hectare}}{10\,000}
```

## Infrastructure and transport

```{math}
:label: total-damage-infrastructure
\mathrm{Damage / m^2} = \frac{\mathrm{Maximum\ damage}_\mathrm{average} * \mathrm{GDP}_\mathrm{country}}{\mathrm{GDP}_\mathrm{average}}
```

:::{note}

Infrastructure and transport are not accounted for in the damage calculation spreadsheet template.
:::


## References

:::{seealso}

Actual damages are found by combining the maximum damages with the actual fraction of loss based on the severity of a windstorm or flood event.
See the FAQ page on [vulnerability curves](./vulnerability_curves.md) for more information.
:::

- Huizinga, J., De Moel, H. and Szewczyk, W. (2017). Global flood depth-damage functions: Methodology and the database with guidelines. EUR 28552 EN, Publications Office of the European Union, Luxembourg. ISBN 978-92-79-67781-6, doi:[10.2760/16510](https://publications.jrc.ec.europa.eu/repository/handle/JRC105688), JRC105688.
