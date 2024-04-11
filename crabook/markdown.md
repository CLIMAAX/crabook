# Markdown Files

Whether you write your book's content in Jupyter Notebooks (`.ipynb`) or
in regular markdown files (`.md`), you'll write in the same flavor of markdown
called **MyST Markdown**.
This is a simple file to help you get started and show off some syntax.

## What is MyST?

MyST stands for "Markedly Structured Text". It
is a slight variation on a flavor of markdown called "CommonMark" markdown,
with small syntax extensions to allow you to write **roles** and **directives**
in the Sphinx ecosystem.

For more about MyST, see [the MyST Markdown Overview](https://jupyterbook.org/content/myst.html).

## This is second level heading

### Which has third levels

This is all much better explained in the [Jupyter Book documentation](https://jupyterbook.org/en/stable/structure/sections-headers.html)

## Bold, italic text, links and lists

You make the text **bold** by putting it between **.
You make the text *italic* by putting it betweeen *.

List is created using -:
- First element 
- Second Element
- Third element

Links are done by putting the text under [] and target under () such as this link to the [JupyterBook documentation](https://jupyterbook.org/en/stable/intro.html)

## Tables

This is a table:

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

This is another way to add the table:

| Month    | Temperature |
| -------- | ----------- |
| January  | 5           |
| February | 2           |
| March    | 8           |

## Images

Images are stored in the folder **images** 🤷‍♀️  
This is how you add image to the page:

```{image} images/open_call.jpeg
:target: https://www.climaax.eu/fstp-open-call/
:width: 400px
:align: centre
:name: open-call
```


You can also add a numbered figure like this:  

```{figure} images/ev_data_image2.png
---
name: population
---
Comparison of the spatial population distribution in GHS-POP, WorldPop, and GPW v4
```
When figures are added, they are automatically numbered.

You can read more about images and figures in the [JupyterBook documentation](https://jupyterbook.org/en/stable/content/figures.html)

## Admonitions

### Simple already available admonitions
Simple, already available admonition boxes are added like this. You can add **note, warning, 

```{note}
Here is a note!
```
Here you can find [all the admonition types](https://myst-parser.readthedocs.io/en/latest/syntax/admonitions.html#admonition-types).

### Admonition with custom text

````{admonition} You can put your own text here 
:class: hint
And class will give it the colour and icon.
````

````{admonition} Dropdown hidden boxes are of class **dropdown** 
:class: dropdown hint
This is a hidden hint :)
````

## Code blocks

### Code and syntax highlighting

**Example**:

````md
```python
note = "Python syntax highlighting"
print(node)
```
````
**Result**:

```python
note = "Python syntax highlighting"
print(node)
```


## Learn more

This is just a simple starter to get you started.
You can learn a lot more at [jupyterbook.org](https://jupyterbook.org).