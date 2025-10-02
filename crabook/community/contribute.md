# Contribute to the Handbook

We are happy to receive contributions that showcase and enhance the Handbook.

The Handbook is developed openly on GitHub and we accept contributions in the form of issues and pull requests.
Visit the [CLIMAAX organization](https://github.com/CLIMAAX) to discover all repositories.

All contributions are subject to our [Code of Conduct](https://github.com/CLIMAAX/crabook/blob/main/CONDUCT.md).


## Catalogue of workflow applications

The [CLIMAAX/examples](https://github.com/CLIMAAX/examples) repository is our catalogue for regional workflow applications.

To contribute an new example to the catalogue, create a pull request with all files for your example and provide the requested information.
You can complete your submission with the GitHub web interface:


::::{dropdown} Step 1: Log in to your GitHub account

A GitHub account is required to submit examples.
You can sign up [here](https://github.com/signup).
::::


::::{dropdown} Step 2: Fork the examples repository

Click on the `Fork` button of the [CLIMAAX/examples](https://github.com/CLIMAAX/examples) repository.

:::{figure} ../images/examples/examples-fork-a-copy.png
:width: 70%
:::

Set up your fork with the dialogue.
Usually, you can keep the default settings.

:::{figure} ../images/examples/examples-fork-dialogue.png
:width: 90%
:::

Click on `Create fork`.
GitHub will redirect you to your forked repository.
Make sure it says "forked from [CLIMAAX/examples](https://github.com/CLIMAAX/examples)" in the top left.

:::{figure} ../images/examples/examples-fork-overview.png
:width: 70%
:::
::::


::::{dropdown} Step 3: Create a new commit with your files

Open the `Add file` menu and select `Upload files`.

:::{figure} ../images/examples/examples-upload-files.png
:width: 70%
:::

Collect all files you want to submit in a folder and upload the entire folder.
Name the folder after the hazard considered in your example and at least one of:

- your area of interest,
- an implemented feature,
- a specific event you are showcasing.

Avoid the use of spaces in the folder name.
For example, these are acceptable folder names:

- `Windstorm_Kyrill`
- `Heavy_snowfall_cut-off_population`
- `Extreme_precipitation_warning_thresholds_Toscana`
- `Coastal_floods_with_barriers_Bretagne`

:::{caution}
Before committing any file, make sure to **remove all personal access tokens** (e.g., for the CDS) and other content that mustn't be shared.
Once such information is committed to the history of changes on GitHub, it becomes accessible to others and cannot be removed anymore.
:::

Please do not include operating system-specific or hidden files and folders like `thumbs.db`, `__MACOSX/` or `.iypnb_checkpoints/` from your upload.

**Do not submit data files** to this repository unless their combined size is small (at most 1 MB) and prefer text-based formats if you are adding data with your submission here.
E.g., a customized crop table in the CSV format for an agricultural drought workflow application can be included here, but a NetCDF file containing gridded data is better provided elsewhere.
We recommend [Zenodo](https://zenodo.org/) to provide additional data files and the [pooch](https://www.fatiando.org/pooch/latest/) Python package to integrate them into a notebook.

You are welcome to submit a **README file** as part of your example to provide additional context and information.
Place it in the folder and upload it together with the other files.
If your example needs Python packages not included in the common CLIMAAX environment, add a `requirements.txt` file with packages to be installed from PyPI in your submitted folder.

:::{figure} ../images/examples/examples-commit-dialogue.png
:width: 90%
:::

There is no need to describe the committed changes here, as this information is collected in the next step.
Commit your changes directly to the main branch of your fork.

Click on `Commit changes`.
::::


::::{dropdown} Step 4: Create a pull request

From the main page of your forked repository, create a pull request by clicking on `Contribute` and then `Open pull request`.

:::{figure} ../images/examples/examples-open-pull-request.png
:width: 90%
:::

In the pull request dialogue, make sure the base repository is set to CLIMAAX/examples.
Enter a meaningful title for your pull request and and fill out the requested information in the description template.

Please note the requirement to accept the licensing conditions:
All content submitted to the CLIMAAX/examples repository and the Handbook is published under a **dual license model**.
Licensees can choose whether to apply the Apache-2.0 license or the CC-BY-4.0 license at reuse.
By submitting an example, you affirm that submitted content can be published under these terms and agree to its use under these terms.
This is especially important to consider when your submission includes software or data that you are not the copyright owner of.
Any content taken from the Handbook is reusable under these terms.

:::{figure} ../images/examples/examples-pull-request-dialogue.png
:width: 90%
:::

Click on `Create pull request` to submit your example.
::::


::::{dropdown} Step 5: Work with the reviewer

Once you have submitted your pull request (PR), a review process starts.
The Handbook support team will assign a reviewer for your submission (this can take a few days) and run automatic checks to support the review.
The selected reviewer may accept and merge your PR directly or provide feedback.
They can ask you for additional information and make suggestions for changes in the PR.
Please check your GitHub notifications and engage with the reviewer to finalize your submission.

When the review process is completed and your PR is merged, your example becomes part of the catalogue.
The Handbook support team will consider all examples for (full or partial) inclusion in the Handbook.
::::

::::{dropdown} Step 6: Share your example

Showcase your example to other CRA practitioners in the [Handbook forum](https://github.com/CLIMAAX/crabook/discussions/categories/regional-perspectives)!
::::

If you want to contribute to the catalogue with an example already hosted elsewhere, open an [issue](https://github.com/CLIMAAX/examples/issues) and send us a link!


## Handbook and workflow repositories

Instead of submitting an example to the catalogue, you are also welcome to create [issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) and [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) directly on the [Handbook repository](https://github.com/CLIMAAX/crabook) and the workflow repositories for individual hazards.

:::{tip}
Reach out via the [Handbook forum](https://github.com/CLIMAAX/crabook/discussions) if you are not sure where to report an issue or contribute.
:::

To propose a risk assessment workflow for a hazard or combination of hazards not included in our selection, please open an issue in the Handbook repository first.

We provide a [template repository](https://github.com/CLIMAAX/workflow_template) for new workflows.
