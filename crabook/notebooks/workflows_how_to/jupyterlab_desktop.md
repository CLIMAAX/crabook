# How to use risk workflows: JupyterLab Desktop setup

As an alternative to the [command-line based steps](cli.md), an environment for running the workflow notebook can be created with [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop).
This setup requires more steps, but does not require having access to a command line environment from the beginning.

<figure class="align-default">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SQlMSq_NKbk?si=rOIO6qaZ2EFszwzN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

The video follows the steps below for the setup of JupyterLab Desktop.

:::{note}
The environment created from these instructions works for all CLIMAAX workflows and is not specific to a certain hazard.
This is different from the [instructions for the command line](cli), where a hazard-specific environment is set up.
:::


## Step by step instructions

1.  [Install](https://github.com/jupyterlab/jupyterlab-desktop/tree/master?tab=readme-ov-file#installation) and start JupyterLab Desktop.

2.  If there is a warning at the bottom of the welcome window saying "Python environment not found":

    -   Click on **Install using the bundled installer**.

    -   Wait for the installation to finish.
    
    -   Restart Jupyter Desktop.

3.  In the hamburger menu (☰) of the welcome window, open the **Manage Python environments** dialog:

    -   Select **Create New**.
    
    -   Choose **New environment**.

    -   Specify the **Name** for the environment, e.g. `climaax`.

    -   Make sure the **Environment type** is **conda**.

    -   In the **Additional Python packages** field, put *all* of the following

        ```
        adlfs=2024.7.0 affine=2.4.0 aiohttp=3.9.5 bokeh=3.5.0 boto3=1.37.33 bottleneck=1.4.0 branca=0.8.1 cartopy=0.23.0 cdsapi=0.7.5 cfgrib=0.9.14.0 conda contextily=1.6.0 dask-labextension=7.0.0 dask=2024.7.0 distributed=2024.7.0 eccodes=2.36.0 flask=2.3.3 folium=0.19.5 gdal=3.9.1 geopandas=1.0.1 git httpx=0.27.2 ipykernel=6.29.5 ipyleaflet=0.19.1 ipympl=0.9.4 ipython=8.27.0 ipywidgets=8.1.3 jenkspy=0.4.1 jupyter-resource-usage=1.1.1 jupyter-server-proxy=4.4.0 jupyterlab-git=0.51.0 jupyterlab-myst=2.4.2 jupyterlab=4.2.7 localtileserver=0.10.6 lxml=5.3.2 matplotlib=3.8.4 nbgitpuller=1.2.1 netcdf4=1.7.1 notebook=7.2.2 numba=0.60.0 numexpr=2.10.0 numpy=1.26.4 openpyxl=3.1.4 osmnx=1.9.3 pandas=2.2.2 pip planetary-computer=1.0.0 plotly=5.22.0 pooch=1.8.2 pyogrio=0.8.0 pyproj=3.6.1 pystac-client=0.8.2 pytest=8.3.2 python-kaleido=0.2.1 python=3.12 pyyaml=6.0.1 rasterio=1.3.10 rasterstats=0.19.0 regionmask=0.13.0 requests=2.32.3 rio-cogeo=5.3.3 rio-tiler=7.6.0 rioxarray=0.15.7 scikit-learn=1.5.1 scipy=1.15.2 seaborn=0.13.2 shapely=2.0.6 tqdm=4.66.4 werkzeug=3.1.3 xarray=2024.6.0 xesmf=0.8.6 xclim=0.50.0 xlrd=2.0.1 zarr=2.18.2
        ```

    -   Click **Create**.
        This installs Python with most of the required packages for running the workflows.
        A few additional packages have to be installed separately in a later step as they are only available from a different package repository.
    
    -   Wait for the installation to finish. This may take a moment.
    
    -   Close the package management dialog.

4.  In the welcome window, select **New session...**

5.  Next to the hamburger menu (☰) in the title bar of the opened window, the environment name must match the name chosen above.
    If it is something else, e.g. `conda: jlab_server`, click on the name and select the correct enviroment, here: `conda: climaax`.

6.  Launch a Python **Console** by clicking on the corresponding square in the **Launcher** tab.
    Make sure you launch a Console, not a Terminal, otherwise the next sub-step may not work as intended.

    -   At the bottom, next to the `[ ]` is an input field.
        Put

        ```
        !pip install damagescanner==0.7 earthkit-data==0.13.6 earthkit-geo==0.3.0 earthkit-meteo==0.4.1 earthkit-plots==0.2.8 earthkit-plots-default-styles==0.0.1 eodag==3.2.0 gisco-geodata==0.1.2 git+https://github.com/tommyod/paretoset.git@5d8f3a739eeb38fb0b63340840353ad99845a5f0 pyDataverse==0.3.4 pylandtemp==0.0.1a1 usgs==0.3.6
        ````

        and press `Shift` + `Enter`.
        Make sure the line starts with an `!`.
        This step installs the remaining Python packages that were not already installed during the environment creation.

    -   Close the Console tab.

    -   The environment is now ready to run and execute the CLIMAAX workflows.

7.  Finally, we retrieve the workflow files from their GitHub repository.
    The DROUGHT workflow repository is used as an example here, but the same steps can be followed for other workflows by replacing the hazard name (e.g. FLOODS instead of DROUGHTS).

    -   In the left side bar, navigate to the folder where you want to save the workflow files (double-click on a folder to enter it and click on the names in the path bar above to move out of a folder).

    -   From the menu bar at the top, select **Git**, then **Clone a repository**:

    -   Get the https clone link from the GitHub repository of the workflow, e.g.
    
        ```
        https://github.com/CLIMAAX/DROUGHTS.git
        ```

        for [DROUGHTS](https://github.com/CLIMAAX/DROUGHTS) (found in the menu behind the {bdg-success}`<> Code` button).

    -   Enter the link (including the `.git` at the end) into the URI field.
        
    -   Select **Clone**.
    
    -   Wait for the cloning to finish.

8.  In the left side bar, navigate into the folder created by the cloning operation, here `DROUGHTS`.
    In this folder, you will find a subfolder for each workflow.
    These subfolders contain the hazard and risk assessment notebooks as well as supporting files.
    Double-click a notebook in the sidebar to launch it.


## JupyterLab Desktop help

See the [user guide](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/user-guide.md), [environment management](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/python-env-management.md) and [troubleshooting](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/troubleshoot.md) pages of JupyterLab Desktop for further information about the application.


## Known issues

- On Windows, JupyterLab desktop is not able to install conda-based Python environments for users with a space (` `) in their home directory (i.e., `C:\Users\<User Name>\`).
  Without a known fix for this issue ([#837](https://github.com/jupyterlab/jupyterlab-desktop/issues/837)), the application cannot be set up by such users.
  Step 3 of the instructions above immediately finishes due to a failure in the installation.
