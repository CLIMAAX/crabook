# JupyterHub information

Access the CLIMAAX JupyterHub at **[climaax-jupyterhub.ecmwf.int](https://climaax-jupyterhub.ecmwf.int/)**.


## Access requirements

To use the CLIMAAX JupyterHub, you need to:

1. Create an [ECMWF account](#support-account).
2. Activate [two factor authentication](https://confluence.ecmwf.int/display/UDOC/TOTP%3A+How+to+activate) on that account.
3. Have special JupyterHub access permissions for that account.

The JuypterHub access permissions are *not* granted automatically with the creation of your ECMWF account.
If your account has not received these permissions yet, please send a short request via the [service desk](#support-servicedesk) asking for access.


## Sessions

- The runtime of an individual session is limited to 12 h.
  Save your work regularly to avoid data loss when a session finishes.
- The time at which a session finishes is displayed in the top right corner of the JupyterLab interface (please convert the UTC time to your local time zone).
- A session can be shut down manually via the *Hub Control Panel* (under the *File* menu in the JupyterLab interface).
  Logging out will not stop a running session.


## Storage

- Each account can use up to 75 GB of persistent storage.
- Only data saved in the **home directory** (`/home/jovyan`) is persistent between sessions.
- Data cannot be shared between accounts.

:::{important}

Data stored on the CLIMAAX JupyterHub is *not* backed up.
Users are responsible for keeping copies of important data that cannot easily be re-obtained in other locations.
:::


## Software environment

The default [Python](#software-python) environment of the JupyterHub comes with all packages required to run CLIMAAX workflows and is managed by the CLIMAAX team.
Run `conda list` or `pip list` in a terminal to see all installed packages.
