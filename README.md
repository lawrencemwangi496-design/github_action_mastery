# GitHub Actions Mastery — Portfolio

Concise summary
---------------

This repository converts instructor-style GitHub Actions exercises into production-like workflows suitable for a portfolio. It demonstrates CI patterns, matrix testing, artifact handling, secure secrets usage, and DevSecOps scans.

Quick links
-----------

- Draft PR: https://github.com/lawrencemwangi496-design/github_action_mastery/pull/7
- Branch: `feature/portfolio-refactor`

Repository layout
-----------------

- `.github/workflows/` — presentation-ready workflows (what a reviewer will see first).
- `exercises/` — original learning artifacts and exercise files (kept for provenance).
- `learnhub-central/` — sample Node app used for tests and scans.
- `python/` — sample Python tests used by matrix workflows.

What this demonstrates (high level)
----------------------------------

- Test automation and simple CI pipelines
- Matrix testing across runtimes and OSes
- Artifact build/upload/download lifecycles
- Remote deployment patterns via SSH (securely using repo secrets)
- DevSecOps: npm audit, Trivy filesystem scans, TruffleHog secret scanning

Per-workflow overview (short)
-----------------------------

- `basic-ci.yml` — minimal sanity CI: checkout, test run, quick feedback.
- `triggers.yml` — demonstrates event triggers including scheduled and manual dispatch.
- `lint-test-build.yml` — multi-stage pipeline for linting, testing, and building.
- `env-vars.yml` — demonstrates safe usage of repository secrets and env scaffolding.
- `matrix-python-tests.yml` — matrix testing across Python versions/OS combinations.
- `artifact-build-and-deploy.yml` — produces an artifact and shows a downstream deploy job.
- `ssh-remote-action.yml` — SSH-based remote command execution (deploy example using secrets).
- `security-scan.yml` — consolidated security pipeline: npm audit, Trivy fs scan, TruffleHog history scan.

How I validated this work
-------------------------

1. Ran unit tests for Python (`pytest`) and Node app locally.
2. Per-workflow validation using `yamllint` and manual inspection.
3. Created a draft PR that contains the refactor and documentation so CI runs can be inspected: see the PR link above.

Run locally (zsh)
-----------------

Install minimal tools and run tests locally:

```bash
# install prerequisites (example for Ubuntu)
sudo apt update && sudo apt install -y curl git docker.io

# Python tests
cd python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q

# Node app tests
cd learnhub-central
npm ci
npm test

# Validate YAML style
yamllint .github/workflows/*.yml

# Optional: run workflows locally with 'act' (https://github.com/nektos/act)
act -j <job-name>
```

Required secrets (do not commit secrets)
--------------------------------------

- `SSH_PRIVATE_KEY` — private key for remote deploys (use a limited-scope key).
- `BOT_TOKEN`, `CHAT_ID` — demo notification bot tokens (use disposable/test tokens).
- `DOCKERHUB_TOKEN`, `DOCKERHUB_USERNAME` — only if enabling image push flows.

Interview-ready talking points
------------------------------

- Why I preserved `exercises/`: provenance and to show step-by-step progression.
- Design choices: short, single-purpose jobs vs long monolithic scripts; matrix tradeoffs; when to fail fast vs report only.
- Security: layered scanning approach and why scanning history (TruffleHog) complements dependency scans.

Next steps I can take (if you want me to proceed)
--------------------------------------------------

1. Run `yamllint` and `gh workflow validate` on the branch and fix any style warnings.
2. Expand `README.portfolio.md` with screenshots and specific run links (I can add artifacts from Actions runs to the PR).
3. Mark the PR ready and merge to `main` when you're happy.

Contact / credit
----------------

Prepared by Lawrence Mwangi — conversion of training exercises to portfolio-quality CI/CD and DevSecOps examples.
