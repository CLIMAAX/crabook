# crabook

Climate Risk Assessment Book

## Usage

### Building the book 

#### For the first time

If you'd like to develop and/or build this Climate Risk Assesment book, you should:

1. Clone this repository
   ```bash
    git clone git@github.com:CLIMAAX/crabook-test.git
    ```
2. Create Python or Conda virtual environment (example for Conda)
   ```bash
    conda create -n crabook-test
    ```
3. Activate the environment
    ```bash
    conda activate crabook-test
    ```
4. Install pip
   ```bash
    conda install pip
    ```
5. Go to the the `crabook-test/` directory
   ```bash
   cd crabook-test
   ```
6. Install the libraries
   ```bash
   pip install -r requirements.txt
   ```
7. Find the markdown files and edit what you need
8. Go back to the `crabook-test/` directory
9. Remove any existing builds by running
    ```bash
   jupyter-book clean crabook-test/
    ```
10. Finally build the book
    ```bash
    jupyter-book build crabook-test/
    ```

A fully-rendered HTML version of the book will be built in `crabook-test/_build/html/`.

Open the file `crabook-test/_build/html/intro.html` and navigate to the material you changed to check if everything is as expected.

Once you're happy with the changes, you can push to the repo.

#### Every next time
The Python/Conda environment is needed only for building the book, so you can activate it after editing the files.
1. Edit the book's source files located in the `crabook/` directory
   ```bash
   cd crabook-test
   ```
2. Activate the environment
   ```bash
    conda activate crabook-test
    ```
4. Remove any existing builds by running
    ```bash
   jupyter-book clean crabook-test/
    ```
5. Finally build the book
    ```bash
    jupyter-book build crabook/
    ```

### Useful notes

- `_build` directory has been added to .gitignore, so when you build it, it will not be pushed to GitHub
- If you clone the repo in this early phase and work on Jupyter notebooks, you might download some data. Please keep all data in folder named `data`, as that is also set up in .gitignore and not pushed to the repo
- Please do not add new notebooks to this repo without them being reviewed by project partners
- If you did add some markdown files or notebooks, make sure they are listed in the `_toc.yml` file too, otherwise they will not be added to the book 

### Quick links to Jupyter Book documentation
- If you are unsure of what to do you can go through [Jupyter Book tutorial](https://jupyterbook.org/en/stable/start/your-first-book.html#) and build an example book to practice before contributing here
- Find out how to structure the book here: [Structure of the book](https://jupyterbook.org/en/stable/basics/organize.html#)
- Read about writing narrative content without the executable part in [this section](https://jupyterbook.org/en/stable/content/index.html)

### Quick links to MyST markdown documentation
We are using powerful MyST Markdown flavour of Markdown which is very convenient for technical and scientific documentation.  
- Link to the [Full MyST Markdown documentation](https://myst-parser.readthedocs.io/en/latest/index.html) - to learn your basics.  
- Link to the [MyST Markdown cheat sheet](https://jupyterbook.org/en/stable/reference/cheatsheet.html) - for when you forget some syntax.

### Hosting the book

This book is not hosted anywhere yet and exists only when it is built locally. We will update here when it is published.

## Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/CLIMAAX/crabook/graphs/contributors).

## Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).
