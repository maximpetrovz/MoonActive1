Moon Active task

In this task I developed a simple web app that takes a URL as an environment variable (API_URL), and returns the response in every GET request.

I packed the app to a docker image, and provided 2 helm charts with different environment variables as requested in the task.

I wrote a simple GitHub Actions workflow that builds and pushes the docker image and upgrades the helm chart using the relevant env var for the workflow inputs.
