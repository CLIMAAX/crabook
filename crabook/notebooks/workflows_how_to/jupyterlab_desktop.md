# How to use risk workflows: JupyterLab Desktop setup

As an alternative to the [command-line based steps](cli.md), an environment for running the workflow notebook can be created with [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop) and minimal interaction with a command line interface.

:::{note}
These steps follow a different approach compared to those in the command line instructions:
a basic Python environment is set up first to launch a JupyterLab session, from within which the workflow files are downloaded.
The Python environment is then updated to include all required packages for the workflow before a workflow notebook is started.
:::

The DROUGHT workflow repository is used as an example here, but the same steps can be followed for other workflows by replacing the hazard name (e.g. FLOODS instead of DROUGHTS).


## First setup

1.  [Install](https://github.com/jupyterlab/jupyterlab-desktop/tree/master?tab=readme-ov-file#installation) and start JupyterLab Desktop.

2.  From the hamburger menu (☰) of the welcome window, open the **Manage Python environments** dialog:

    -   Select **Create New** and choose **New environment**

    -   Specify the **Name** for the environment, e.g. `climaax_droughts`.

    -   In the **Additional Python packages field**, put

        ```
        python=3.11 jupyterlab-git
        ```

    -   Click **create** and close the dialog when the operation is finished.

3.  In the welcome window, select **New session...**

4.  Next to the hamburger menu (☰) in the title bar, click on the current environment name and switch to the environment you have just created if it is not already selected.

5.  In the left side bar, navigate to the folder where you want to save the workflow files.

6.  From the menu bar at the top, select **Git**, then **Clone a repository**:

    -   Get the https clone link from the GitHub repository of the workflow, e.g.
    
        ```
        https://github.com/CLIMAAX/DROUGHTS.git
        ```

        for [DROUGHTS](https://github.com/CLIMAAX/DROUGHTS) (found in the menu behind the {bdg-success}`<> Code` button).

    -   Enter the link (including the `.git` at the end) into the URI field.
        
    -   Select **Clone** and wait for the download to finish.

7.  Navigate into the created folder, here `DROUGHTS`, in the left side bar.
    The folder your navigate to should contain a file called `environment.yml`.

8.  Launch a Python **Console** from the Launcher tab by clicking on the corresponding square.

    -   Put

        ```
        !conda env update -f environment.yml
        ```

        into the console input line at the bottom.
        Make sure the line starts with an `!`.

    -   Press `Shift` + `Enter` to execute the command and wait until all steps of the package installation are completed (this can take some time).

    - Close the Console tab.

9.  Navigate into a workflow folder with the left side bar and launch a notebook by double-clicking on the file.
    You are now ready to run and execute the selected workflow.


See the [user guide](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/user-guide.md), [environment management](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/python-env-management.md) and [troubleshooting](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/troubleshoot.md) pages of JupyterLab Desktop for further information.


## Following sessions

The next time you start JupyterLab Desktop to continue with a workflow, only make sure that the right environment is selected for the JuypterLab session.
The Python environment does not have to be set up again.
