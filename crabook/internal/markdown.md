# Markdown basics

Whether you write your book's content in Jupyter Notebooks (`.ipynb`) or
in regular markdown files (`.md`), you'll write in the same flavor of markdown
called **MyST Markdown**.
This is a simple file to help you get started and show off some syntax.

## What is MyST?

MyST stands for "Markedly Structured Text".  It gives us those little boxes with notes and warnings, and some other useful and interactive content types.

In practice this means that your content will not be rendered very nicely in GitHub, so it always needs to be checked that things look correctly in the Handbook.

For more about MyST, see [the MyST Markdown Overview](https://jupyterbook.org/content/myst.html).

# Simple elements of Markdown files

## Headers

Headers are not just big letters. JupyterBook uses headers to create the table of content for every page.

```{hint}
Take a look at the top right and you will see the content of this page! 🧑‍🏫
It is created using all the headers.
```

You can also use them in the link to send someone exactly the part of the page you want them to look.
For example,
Clicking on this link 👉 https://climaax.github.io/crabook-test/markdown.html#bold-italic-text-links-and-lists will take you down to the part of this page about bold and italic text.

``````{list-table}
:header-rows: 1
:widths: 20 15 15

* - Syntax
  - Example
  - Note
* - ```md
    # Heading level 1
    ## Heading level 2
    ### Heading level 3
    #### Heading level 4
    ##### Heading level 5
    ###### Heading level 6
    ```
  - ```md
    # MyST Cheat Sheet
    ```
  - Level 1-6 headings, denoted by number of `#`
``````


This is all much better explained in the [Jupyter Book documentation](https://jupyterbook.org/en/stable/structure/sections-headers.html)

## Bold and italic text

````md
You make the text **bold** by putting it between **.

You make the text *italic* by putting it betweeen *.

````

Result:

You make the text **bold** by putting it between **.

You make the text *italic* by putting it betweeen *.

## Lists

List is created using dash line - :
````md
- First element
- Second element
- Third element
````
Results in:
- First element
- Second element
- Third element

## Links

Links are done by putting the text under [] and target under ().
``````{list-table}
:header-rows: 1
:widths: 20 20 10

* - Syntax
  - Example
  - Result
* - ```md
    [text](target)
    ```
  - ```md
    [CLIMAAX website](https://climaax.eu)
    ```
  - [CLIMAAX website](https://climaax.eu)
* - ```md
    [text](relative_path)
    ```
  - ```md
    [CRA datasets](../CRA_steps/analysis/datasets)
    ```
  - [CRA datasets](../CRA_steps/analysis/datasets)
* - ```md
    [text](target "title")
    ```
  - ```md
    [CLIMAAX website](https://climaax.eu "The main webiste of CLIMAAX project")
    ```
  - [CLIMAAX website](https://climaax.eu "The main webiste of CLIMAAX project")
``````

## Code blocks

### Code and syntax highlighting

**Example**:

````md
```python
note = "Python syntax highlighting"
print(note)
```
````
**Result**:

```python
note = "Python syntax highlighting"
print(note)
```


## Learn more

This is just a simple starter to get you started.
```{seealso}
You can learn a lot more at [jupyterbook.org](https://jupyterbook.org).

You can play around in this sandbox page in [MyST markdown documentation](https://myst-parser.readthedocs.io/en/latest/live-preview.html)

You can also use this handy [cheat sheet](https://jupyterbook.org/en/stable/reference/cheatsheet.html#)
```

