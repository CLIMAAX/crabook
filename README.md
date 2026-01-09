# Climate Risk Assessment Handbook

Visit the Handbook at https://handbook.climaax.eu/

<img src="https://raw.githubusercontent.com/CLIMAAX/crabook/main/crabook/logo.png" height="100" />


## See also

- [Release notes](https://github.com/CLIMAAX/crabook/releases)
- [Discussion forum](https://github.com/CLIMAAX/crabook/discussions)
- [Catalogue of workflow applications](https://github.com/CLIMAAX/examples)
- [Community of Practice](https://www.climaax.eu/community-of-practice/)
- [CLIMAAX homepage](https://climaax.eu/)
- [10.5281/zenodo.18186357](https://doi.org/10.5281/zenodo.18186357)
- [EU Mission on Adaptation to Climate Change](https://www.climaax.eu/eu-mission-on-adaptation-to-climate-change/)


## Development

### Setting up

```bash
# Clone the Handbook repository
git clone https://github.com/CLIMAAX/crabook.git
cd crabook

# Clone all workflow repositories
git submodule update --init --recursive

# Set up the Python environment (here with conda and pip)
conda create -n crabook python=3.13 pip
conda activate crabook
pip install -r requirements.txt
```

### Building the book

To build the HTML version of the Handbook (in `crabook/_build/html/`):

```bash
jb build crabook
```

To remove existing builds:

```bash
jb clean crabook
```

### Release process

1. Tag all submodule repositories that have changed since the last release.
2. Tag the Handbook and create a release from the tag. Provide release notes for changes from all repositories.
3. The zenodo-upload action creates a new Zenodo version draft. Go to Zenodo, check the file contents, update the list of contributors if necessary, fill in the publication date and version number and publish.
4. Announce the new release on the Handbook discussion forum.


## License

`Apache-2.0 OR CC-BY-4.0` ([SPDX license identifier](https://spdx.dev/learn/handling-license-info/)).


## Acknowledgements

This project has received funding from the European Union’s Horizon Europe – the Framework Programme for Research and Innovation (2021-2027) under grant agreement No. 101093864.
