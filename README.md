[![CI Pipeline](https://github.com/MichaelGift/dq-devops-assignment/actions/workflows/ci.yaml/badge.svg)](https://github.com/MichaelGift/dq-devops-assignment/actions/workflows/ci.yaml)
[![Linting](https://github.com/MichaelGift/dq-devops-assignment/actions/workflows/lint.yaml/badge.svg)](https://github.com/MichaelGift/dq-devops-assignment/actions/workflows/lint.yaml)
[![codecov](https://codecov.io/github/MichaelGift/dq-devops-assignment/graph/badge.svg?token=PL0RCB7SVX)](https://codecov.io/github/MichaelGift/dq-devops-assignment)

# DQ DevOps Assignment
This repository contains the solution for the DevOps assignment provided by DQ. The project is designed to demonstrate proficiency in DevOps practices, including CI/CD, infrastructure as code, and automated testing.

## Getting Started
To get started with this project, follow the instructions below:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MichaelGift/dq-devops-assignment.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd dq-devops-assignment
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the application:**
   ```bash
   npm start
   ```

# Devops Implementation Details

### Continuous Integration (CI):
Automated build and test processes using GitHub Actions.

The pipeline is defined in `.github/workflows/ci.yaml`.

It tests then builds a Docker image and pushes it to Docker Hub on successful builds.

Depending on the branch, it tags the image appropriately:
- `main` branch: tagged as `prod-latest` and `prod-<commit-hash>`
- `dev` branch: tagged as `dev-latest` and `dev-<commit-hash>`


### Linting:
Code quality checks using ESLint.
The linting workflow is defined in `.github/workflows/lint.yaml`.


### Code Coverage:
Code coverage is measured using vitest.

The coverage reports are uploaded to Codecov after each successful CI build.

### Continuous Deployment (CD):
The project is set up to use bash scripts for deployment automation.

The deployment scripts can be found in the `scripts/` directory.

They require a swarm cluster to deploy the Docker container as this simulates a production environment.

The configuration is setup to rollback to the previous version in case of deployment failure.
This ensures high availability of the application.

To setup the swarm cluster, run:
```bash
./scripts/deploy_swarm.sh
```

> This requires Docker to be installed and initialized as a swarm manager. 
> 
> You can initialize a swarm by running `docker swarm init` on your local machine.

The deployment script is designed to be idempotent, ensuring that running them multiple times does not produce unintended side effects.

To deploy the application, run:
```bash
./scripts/cd.sh
```

This will pull the latest Docker image from Docker Hub and deploy it to the swarm cluster.

### Monitoring and Logging:
The swarm configuration includes basic health checks and performance constraints to ensure the application runs smoothly.

The logs are observable via ``docker service logs`` and live monitoring via ``docker stats``. 

Demo
