# How to use risk workflows: JupyterLab Desktop setup

As an alternative to the [command-line based steps](cli.md), an environment for running the workflow notebook can be created with [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop).
This setup requires more steps but does not have access to a command line environment as a prerequisite.

:::{note}
These steps follow a different approach compared to those in the command line instructions:
a basic Python environment is set up first to launch a JupyterLab session, from within which the workflow files are downloaded.
The Python environment is then updated to include all required packages for the workflow before a workflow notebook is started.
:::

The DROUGHT workflow repository is used as an example here, but the same steps can be followed for other workflows by replacing the hazard name (e.g. FLOODS instead of DROUGHTS).


1.  [Install](https://github.com/jupyterlab/jupyterlab-desktop/tree/master?tab=readme-ov-file#installation) and start JupyterLab Desktop.

2.  If there is a warning at the bottom of the welcome window saying "Python environment not found":

    -   Click on **Install using the bundled installer**.

    -   Wait for the installation to finish.
    
    -   Restart Jupyter Desktop.

3.  In the hamburger menu (☰) of the welcome window, open the **Manage Python environments** dialog:

    -   Select **Create New**.
    
    -   Choose **New environment**.

    -   Specify the **Name** for the environment, e.g. `climaax_droughts`.

    -   Make sure the **Environment type** is **conda** and jupyterlab is included in the **Python packages to install**.

    -   In the **Additional Python packages field**, put

        ```
        python=3.11 jupyterlab-git
        ```

    -   Click **Create**.
    
    -   Wait for the installation to finish.
    
    -   Close the package management dialog.

    :::{figure} ../../images/how_to_jupyterlab_desktop_env.png
    :::

4.  In the welcome window, select **New session...**

5.  Next to the hamburger menu (☰) in the title bar, the environment name must match the name chosen above.
    If it is something else, e.g. `conda: jlab_server`, click on the name and select the correct enviroment, here: `conda: climaax_droughts`.

6.  In the left side bar, navigate to the folder where you want to save the workflow files.

7.  From the menu bar at the top, select **Git**, then **Clone a repository**:

    -   Get the https clone link from the GitHub repository of the workflow, e.g.
    
        ```
        https://github.com/CLIMAAX/DROUGHTS.git
        ```

        for [DROUGHTS](https://github.com/CLIMAAX/DROUGHTS) (found in the menu behind the {bdg-success}`<> Code` button).

    -   Enter the link (including the `.git` at the end) into the URI field.
        
    -   Select **Clone**.
    
    -   Wait for the cloning to finish.

    :::{figure} ../../images/how_to_jupyterlab_desktop_git.png
    :::

8.  In the left side bar, navigate into the folder created by the cloning operation, here `DROUGHTS`.
    The folder should contain a file called `environment.yml`.

9.  Launch a Python **Console** by clicking on the corresponding square in the **Launcher** tab.

    -   At the bottom, next to the `[ ]` is an input field. Put

        ```
        !conda env list
        ````

        and press `Shift` + `Enter`. Make sure the line starts with an `!`.

    -   In the list displayed above, find the entry with a `*` next to it.
        The path should end with the name of the environment created above, e.g., `.../envs/climaax_droughts` (the `...` part depends on your operating system and user name).

    -   In the input field at the bottom, put

        ```
        !conda env update --quiet -f environment.yml -p ".../envs/climaax_droughts"
        ```

        and replace `.../envs/climaax_droughts` with the full path to the environment from the previous command.
        You can copy the path from the earlier command's output and paste it into the input field.
        Again, make sure the line starts with an `!`.

    -   Press `Shift` + `Enter` to execute the command and wait until all steps of the package installation are completed (this can take some time).

    - Close the Console tab.

    :::{figure} ../../images/how_to_jupyterlab_desktop_console.png
    :::

10. Restart the JupyterLab session to apply the changes.
    You can restart JupyterLab Desktop and start a new session or use the ↻ symbol in the environment selection dialog next to the hamburger menu.

11. You are now ready to run and execute the workflows from the workflow repository.


See the [user guide](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/user-guide.md), [environment management](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/python-env-management.md) and [troubleshooting](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/troubleshoot.md) pages of JupyterLab Desktop for further information about the application.
