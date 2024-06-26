#  Admonitions

## Simple already available admonitions
Simple, already available admonition boxes are added like this. You can add **note, warning, 

````md
```{note}
Here is a note!
```
````

```{note}
Here is a note!
```

This is the list of all available admonition types:
- attention
- caution
- danger
- error
- hint
- important
- note
- seealso
- tip
- warning

## Admonition with custom text

````md
```{admonition} You can put your own text here 
:class: hint
And class will give it the colour and icon.
```
````

Result:

````{admonition} You can put your own text here 
:class: hint
And class will give it the colour and icon.
````

````md
```{admonition} Dropdown hidden boxes are of class **dropdown** 
:class: dropdown hint
This is a hidden hint :)
```
````

Result:
````{admonition} Dropdown hidden boxes are of class **dropdown** 
:class: dropdown hint
This is a hidden hint :)
````

## Learn more


```{seealso}
You can find more about admonition boxes in [MyST documentation](https://myst-parser.readthedocs.io/en/latest/syntax/admonitions.html)
```