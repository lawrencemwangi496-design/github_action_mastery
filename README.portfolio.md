# GitHub Actions Mastery — Portfolio

This repository is a learning-to-portfolio conversion of my GitHub Actions exercises. Each workflow below maps an exercise to a professional, production-like example that demonstrates a specific CI/CD or DevSecOps skill.

Workflows

- basic-ci.yml — Simple CI: checks out code and runs unit tests (Node/Python examples).
- triggers.yml — Demonstrates different workflow triggers (push, pull_request, schedule, workflow_dispatch).
- lint-test-build.yml — A combined pipeline that lints, tests, and builds the project.
- env-vars.yml — Shows secure use of environment variables and secrets in workflows.
- matrix-python-tests.yml — Matrix strategy to run tests across multiple Python versions and OSes.
- artifact-build-and-deploy.yml — Builds an artifact and uploads it, then demonstrates a deploy job that downloads and deploys.
- ssh-remote-action.yml — Demonstrates a deploy step using SSH to execute commands on a remote host.
- security-scan.yml — Consolidated security checks: npm audit, Trivy filesystem scan, TruffleHog secret search.

How to present this repo

1. Each workflow is named for clarity and contains comments and metadata that explain why it exists.
2. The original exercise files are preserved in `.github/workflows/` with their original names; consider moving them to `exercises/` to reduce duplication.
3. Fix YAML linter warnings (line-length and boolean style) before publishing this repository or enabling workflows.

Contact

This repo was prepared by Lawrence Mwangi as part of a GitHub Actions learning path and capstone prep.
