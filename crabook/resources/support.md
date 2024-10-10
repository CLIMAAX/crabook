# Support

Support is offered by the CLIMAAX project for climate risk assessments following the Framework and utilizing the workflows in this Handbook.

:::{admonition} Public and exclusive support
:class: note

The Handbook with the Framework description, workflows, technical documentation and supporting pages are **public** and open to everyone.
You can get reach out to us with questions and [contribute](../community/contribute.md) via the Forum and GitHub, independent of your relationship with the CLIMAAX project.

The service desk and JupyterHub server are **exclusively** offered to our project partners and participating regions that receive financial support through the CLIMAAX project.
We are currently accepting applications to our [second Open Call](../about/funding.md).
:::


We recommend to always check the Handbook for information before reaching out to us.
The website is regularly updated by the CLIMAAX team and frequently asked questions added to our [FAQ](FAQ.md).
A basic search function is available in the top left under our logo or you can use your favourite search engine.

When reaching out to us, please prefer our general channels, i.e. the forum, GitHub and service desk, rather than contacting individuals from the CLIMAAX team directly via email.
This way we can process requests more efficiently and transparently.


(support-account)=
## ECMWF account

To use the support described below, registering at ECMWF is necessary.
An account is created by following these steps:

1. Go to https://www.ecmwf.int.
2. Select "Log in" in the top right corner.
3. Select "Register" in the box at the bottom.
4. Follow the instructions to create a new account.


:::{tip}
An ECMWF account will also give you access to datasets in the [Copernicus Climate Data Store](https://cds.climate.copernicus.eu) which are used extensively in the risk assessment workflows.
:::


## Forum

A CLIMAAX tag is available to associate topics in any category of the **public** [ECMWF forum](https://forum.ecmwf.int) with the CLIMAAX project.
All topics with our tag can be viewed on a dedicated [overview page](https://forum.ecmwf.int/tag/climaax).
Posts in the forum are public and anyone registered can participate, giving you the opportunity to interact with the whole CLIMAAX community.


(support-servicedesk)=
## Service desk

For questions and support related to the CLIMAAX Handbook, including the Framework, workflows, datasets and software, as well as all services associated with your ECMWF account, the **exclusive** CLIMAAX service desk can be contacted via our support request form:

1. Go to https://jira.ecmwf.int/plugins/servlet/desk/portal/4/create/186.
2. Log in with your ECMWF account if you are not already.
   Information and help for the login process is available in the [user documentation](https://confluence.ecmwf.int/display/UDOC/Login+and+authentication+information) of ECMWF.
3. Provide a title and description of your request and make sure to **select the "CLIMAAX" service** in the list at the bottom.
   We recommend to also add "CLIMAAX" to the title or description of your request to make sure your request reaches the CLIMAAX team without delay.
4. Click "Create" to send the request.

The service desk team will provide a first response to eligible requests in at most 3 working days.
You will receive email notifications with updates to the status of your request.
Depending on the topic of the request, experts from the CLIMAAX team, e.g., the developers of a specific risk assessment workflow, are consulted when answering a request.
Service desk requests are otherwise private.

:::{important}

Eligibility for support through the service desk is validated via an allowlist.
The allowlist is initialized with the email addresses known to us from the selection process following the open calls.
To **extend eligibility** to accounts not yet on the allowlist, please inform us about the email addresses of the accounts to be added in a **service desk request from a known account**.
:::


(support-jupyterhub)=
## JupyterHub

The **exclusive** [CLIMAAX JupyterHub](https://climaax-jupyterhub.ecmwf.int/) provides access to a JupyterLab web interface where the risk assessment notebooks can be edited and executed on ECMWF cloud computing infrastructure.

Please note the following information on our JupyterHub setup and usage:

:::{dropdown} Access requirements

In order to be able to use the CLIMAAX JupyterHub, you need to:

1. Have an [ECMWF account](#support-account).
2. Activate [two factor authentication](https://confluence.ecmwf.int/display/UDOC/TOTP%3A+How+to+activate) on that account.
3. Apply for additional access permissions through a [service desk request](#support-servicedesk).
   Please use an informative title like "CLIMAAX JupyterHub access" for the request.
   Permission is only given to eligible accounts associated with the CLIMAAX project.

**You can only access the JupyterHub after the additional permissions are granted in step 3.**
:::

:::{dropdown} Sessions and resource usage

If your sessions fails to start for the first time after login, try again immediately.
If the startup problem persists, please contact support via the [service desk](#support-servicedesk).

The runtime of an individual session is currently limited to 12 h.
Please make sure you save your work regularly to avoid data loss if your session is terminated at the end of the time limit.
We will update this policy as necessary to suit user needs and ensure that the provided computing resources are used responsibly.
A session can be shut down manually via the *Hub Control Panel* (under the *File* menu in the JupyterLab interface).
Logging out will not stop a running session.
:::

:::{dropdown} Persistent storage

Each account can use up to 75 GB of persistent storage.
Only data saved in the **home directory** (`/home/jovyan`) is persistent between sessions.
Data cannot be shared between accounts.

Data stored on the CLIMAAX JupyterHub is *not* backed up.
Users are responsible for keeping copies of important data that cannot easily be re-obtained in other locations.
:::

:::{dropdown} Software environment

The default [Python](#software-python) environment of the JupyterHub comes with all packages required to run CLIMAAX workflows and is managed by the CLIMAAX team.
Run `conda list` or `pip list` in a terminal to see all installed packages.

Additional packages can be installed by users with conda or pip.
We recommend using the `--user` option for `pip install` to ensure that packages are installed in the home directory and therefore persistent between sessions.
Packages installed outside of the home directory have to be reinstalled in every session.

We welcome suggestions for adding packages to the default environment via the [service desk](#support-servicedesk).
:::

:::{dropdown} Automatic workflow downloads

To simplify access to workflows for users, all CLIMAAX workflow repositories are automatically cloned into a `workflows` folder in the home directory.
This automated action is run every time a new session is started, but only clones a repository if a folder with the repository name does not already exist.
Existing repositories are not updated to avoid conflicts with user modifications in the workflows.
:::

Technical assistance for the JupyterHub is provided through the [service desk](#support-servicedesk).
