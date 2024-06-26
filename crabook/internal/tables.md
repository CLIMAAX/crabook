# Tables

There are a few ways to add a table. Here we'll give a few examples.

This is a way to add a simple table table:

````md
| Month    | Temperature |
| -------- | ----------- |
| January  | 5           |
| February | 2           |
| March    | 8           |
````

Result
| Month    | Temperature |
| -------- | ----------- |
| January  | 5           |
| February | 2           |
| March    | 8           |

You can allign columns using the `:` character like this:
````md
| left | center | right |
| :--- | :----: | ----: |
| a    | b      | c     |
````
Result:
| left | center | right |
| :--- | :----: | ----: |
| a    | b      | c     |

Ideally your table should have a caption and this is how you can add it:


````md
:::{table} Table caption
:widths: auto
:align: center

| foo | bar |
| --- | --- |
| baz | bim |
:::
````
Result:
:::{table} Table caption
:widths: auto
:align: center

| foo | bar |
| --- | --- |
| baz | bim |
:::
This is also a way to add table table:
````md
:::{list-table} Population datasets
:widths: 10 10 15 15 15
:header-rows: 1

*   - Variable
    - Dataset
    - Temporal resolution
    - Spatial resolution
    - References
*   - Population
    - GHS-POP
    - 1975-2030
    - 100 m, 3 arcsec;\
      1 km, 30 arcsec
    - European Commission, 2023
*   - 
    - WorldPop
    - 2000-2020
    - 3 arcsec, 30 arcsec
    - (Bondarenko et al., 2020; Stevens et al., 2015) 
*   - 
    - GPW v4
    - 2000-2020
    - 30 arcsec
    - (CIESIN, 2018b) 
:::
````

Result:

:::{list-table} Population datasets
:widths: 10 10 15 15 15
:header-rows: 1

*   - Variable
    - Dataset
    - Temporal resolution
    - Spatial resolution
    - References
*   - Population
    - GHS-POP
    - 1975-2030
    - 100 m, 3 arcsec;\
      1 km, 30 arcsec
    - European Commission, 2023
*   - 
    - WorldPop
    - 2000-2020
    - 3 arcsec, 30 arcsec
    - (Bondarenko et al., 2020; Stevens et al., 2015) 
*   - 
    - GPW v4
    - 2000-2020
    - 30 arcsec
    - (CIESIN, 2018b) 
:::

```{seealso}
You can see more examples and ways to create a table in the [MyST Markdown documentation](https://myst-parser.readthedocs.io/en/latest/syntax/tables.html)
```