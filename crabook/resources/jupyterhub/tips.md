# JupyterHub tips and troubleshooting

Technical assistance for the JupyterHub is provided through the [service desk](#support-servicedesk).


## Automatic workflow downloads

CLIMAAX workflow repositories are automatically cloned (i.e., downloaded with [git](#software-git)) into a `workflows` folder in the home directory for all users.

- The automated action is run every time a new session is started, but only clones a repository if a folder with the repository name does not already exist.
- Existing repositories are **not updated automatically** to avoid overwriting user-made modifications to existing workflow files.
- To update a workflow, navigate into its folder and select *Pull from remote* in the *Git* menu at the top.
  Note however, that this may result in a conflict if you have already made modifications to a file that is being updated.
  These conflicts can be resolved with git, although some experience with git is recommended before attempting the manual resolution of a merge conflict.


## CDS API token configuration

We recommend to [save your CDS access token/key in a `.cdsapirc` configuration file in your home directory](https://cds.climate.copernicus.eu/how-to-api) so you don't have to specify it explicitly in the workflow notebooks that use the `cdsapi` package.
With the `KEY` variable in these notebooks set to `None`, the token is loaded from your configuration file.
This also reduces the likelihood of you accidentally sharing your personal key with others.

Because the JupyterLab file browser does not show files whose names start with a `.`, the `.cdsapirc` file has to be created in another way, e.g., by running

```text
%%writefile ~/.cdsapirc
url: https://cds.climate.copernicus.eu/api
key: ********-****-****-*****-************
```

from a Python console or notebook (put your own key instead of the ***).


## Installing packages

Additional packages can be installed with conda or pip.
We recommend using the `--user` option for `pip install` to ensure that packages are installed in the home directory and therefore persistent between sessions.
Packages installed outside of the home directory have to be reinstalled in every session.


## Session doesn't start

If your sessions fails to start for the first time after login, try again immediately.
If the startup problem persists, please contact support via the [service desk](#support-servicedesk).
