# crabook

Climate Risk Assessment Book

<img src="https://raw.githubusercontent.com/CLIMAAX/crabook/main/crabook/logo.png" height="100" />


## Usage

### Building the book

#### For the first time

If you'd like to develop and/or build this Climate Risk Assesment book, you should:

1. Clone this repository
   ```bash
    git clone git@github.com:CLIMAAX/crabook.git
    ```
2. Go to the the `crabook/` directory that was created by git in the previous step
   ```bash
   cd crabook
   ```
3. Create a Python or Conda virtual environment (example for Conda)
   ```bash
    conda create -n crabook python=3.11 pip
    ```
4. Activate the environment
    ```bash
    conda activate crabook
    ```
5. Install the libraries, choose:
   ```bash
   pip install -r requirements.txt
   ```
   installs only the packages required to build the book, while
   ```bash
   pip install -r requirements-dev.txt
   ```
   additionally installs packages for the development of some components of the book, but which are not required during building.
6. Find the markdown files and edit what you need.
7. Remove any existing builds by running
    ```bash
   jupyter-book clean crabook/
    ```
8. Finally build the book
    ```bash
    jupyter-book build crabook/
    ```

A fully-rendered HTML version of the book will be built in `crabook/_build/html/`.

Open the file `crabook/_build/html/intro.html` and navigate to the material you changed to check if everything is as expected.

Once you're happy with the changes, create a new branch, commit your changes and send us a pull request if you'd like to contribute.


#### Every next time

The Python/Conda environment is needed only for building the book, so you can activate it after editing the files.

1. Edit the book's source files located in the `crabook/` directory
   ```bash
   cd crabook/crabook
   ```
2. Activate the environment
   ```bash
    conda activate crabook
    ```
3. Remove any existing builds by running
    ```bash
   jupyter-book clean crabook/
    ```
4. Finally build the book
    ```bash
   jupyter-book build crabook/
    ```

### Useful notes

- The `_build` directory has been added to `.gitignore`, so when you build the book and add files in git, they will not end up on GitHub.
- If you clone the repo in this early phase and work on Jupyter notebooks, you might download some data. Please keep all data in folder named `data`, as that is also set up in `.gitignore` and not pushed to the repo.
- Please do not add new notebooks to this repo without them being reviewed by project partners.
- If you did add some markdown files or notebooks, make sure they are listed in the `_toc.yml` file too, otherwise they will not be added to the book.

### Table of contents switching

*TLDR*: To have a page show up in our [production version](https://handbook.climaax.eu/) of the CRA book, it has to be added to [`crabook/_toc_prod.yml`](crabook/_toc_prod.yml).

The build process on GitHub in [`.github/workflows/build-deploy-book.yml`](.github/workflows/build-deploy-book.yml) contains a step to detect the repository it is started from. If this repository is `CLIMAAX/crabook`, the default table of contents [`crabook/_toc.yml`](crabook/_toc.yml) is replaced by the file [`crabook/_toc_prod.yml`](crabook/_toc.yml). This enables us to hide pages in the [production repository](https://github.com/CLIMAAX/crabook) that are still under development in our [test repository](https://github.com/CLIMAAX/crabook-test) without having to edit the table of contents file back-and-forth every time changes are pushed to production.

### Quick links to Jupyter Book documentation

- If you are unsure of what to do you can go through [Jupyter Book tutorial](https://jupyterbook.org/en/stable/start/your-first-book.html#) and build an example book to practice before contributing here.
- Find out how to structure the book here: [Structure of the book](https://jupyterbook.org/en/stable/basics/organize.html#).
- Read about writing narrative content without the executable part in [this section](https://jupyterbook.org/en/stable/content/index.html).

### Quick links to MyST markdown documentation

We are using powerful MyST Markdown flavour of Markdown which is very convenient for technical and scientific documentation.
- Link to the [Full MyST Markdown documentation](https://myst-parser.readthedocs.io/en/latest/index.html) - to learn your basics.
- Link to the [MyST Markdown cheat sheet](https://jupyterbook.org/en/stable/reference/cheatsheet.html) - for when you forget some syntax.


## Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/CLIMAAX/crabook/graphs/contributors).


## Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).
