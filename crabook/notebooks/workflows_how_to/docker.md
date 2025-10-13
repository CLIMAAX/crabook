# How to use risk workflows: Docker image

We maintain a [Docker image on GitHub](https://github.com/CLIMAAX/binder-env/pkgs/container/binder-env):

    ghcr.io/climaax/binder-env:latest

The image comes with a preinstalled Python environment compatible with all CLIMAAX workflows and JupyterLab interface.
It is built primarily for trying out workflows on [Binder](https://mybinder.org/), but the image can also be run elsewhere.
Images are available for `linux/amd64`.

:::{tip}

Use a [bind mount](https://docs.docker.com/engine/storage/bind-mounts/) to access files on the host machine.
The default directory of the JupyterLab server in the container is `/home/jovyan`.
:::

For more information on how to use the image, please refer to the [What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/) page in the Docker Documentation.
