# Images

## Upload image to GitHub
In order to display the image in the Handbook you first need to add it to the **images** directory in the crabook repository.

Quick way to do it is to navigate to the `crabook/images` folder
and click on the `Add file`

```{image} ../images/add_an_image_to_github01.png
:width: 1000px
:align: center
```

and then `Upload files`:

```{image} ../images/add_an_image_to_github02.png
:width: 1000px
:align: center
```

```{attention}
Please give meaningful names to the images so it is clear where it belongs.
```

## Add an image to the page

This is how you add image to the page:

````md
```{image} ../images/open_call.jpeg
:width: 400px
:align: center
:name: open-call
```
````
`../images/open_call.jpeg` is the **path to the image file**.

Result:
```{image} ../images/open_call.jpeg
:width: 400px
:align: center
```

If you want, you can also make your image be a link to a web page. In this example we have next image linking to the Open call page on the CLIMAAX website.

````md
```{image} ../images/open_call.jpeg
:target: https://www.climaax.eu/fstp-open-call/
:width: 400px
:align: center
:name: open-call
```
````

Result:
```{image} ../images/open_call.jpeg
:target: https://www.climaax.eu/fstp-open-call/
:width: 400px
:align: center
```

## Add a figure to the page

You can also add a numbered figure like this:
````md
```{figure} ../images/ev_data_image2.png
---
name: population
---
Comparison of the spatial population distribution in GHS-POP, WorldPop, and GPW v4
```
````

```{figure} ../images/ev_data_image2.png
Comparison of the spatial population distribution in GHS-POP, WorldPop, and GPW v4
```

When figures are added, they are automatically numbered.

```{seealso}
You can read more about images and figures in the [JupyterBook documentation](https://jupyterbook.org/en/stable/content/figures.html)
```