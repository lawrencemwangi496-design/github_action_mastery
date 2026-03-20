# GitHub Actions Learning Journey

A structured progression through GitHub Actions automation, from basic CI to comprehensive security scanning.

## Overview

This repository documents the systematic learning of GitHub Actions through practical exercises. Each workflow demonstrates specific concepts and patterns applicable to real-world CI/CD pipelines.

## Learning Path

| Exercise | Topic | Key Concepts |
|----------|-------|--------------|
| [01-basic-ci.yml](exercises/01-basic-ci.yml) | Basic CI Pipeline | Workflow structure, job/step definitions, shell commands |
| [02-triggers-and-inputs.yml](exercises/02-triggers-and-inputs.yml) | Workflow Triggers | Push, schedule, manual triggers; path filters; input parameters |
| [03-conditional-jobs.yml](exercises/03-conditional-jobs.yml) | Conditional Execution | `if` statements, context-based branching, manual input logic |
| [04-job-dependencies.yml](exercises/04-job-dependencies.yml) | Job Dependencies | `needs` keyword, sequential execution, build artifacts |
| [05-environment-variables.yml](exercises/05-environment-variables.yml) | Variables & Secrets | Environment variables, GitHub context, secret management |
| [06-ssh-deployment.yml](exercises/06-ssh-deployment.yml) | SSH Automation | Remote execution, key handling, known hosts, cleanup |
| [07-matrix-strategy.yml](exercises/07-matrix-strategy.yml) | Matrix Testing | Multi-version testing, parallel execution, fail-fast |
| [09-security-scan.yml](exercises/09-security-scan.yml) | Security Scanning | npm audit, Trivy, TruffleHog; scheduled/manual scans |

## Exercise Details

### 01: Basic CI Pipeline
The foundation: a workflow that triggers on push to main, runs a simple sequence of shell commands, and logs execution. Establishes the basic structure before adding complexity.

**Concepts:** `name`, `on.push`, `jobs`, `runs-on`, `steps`, `run`

### 02: Workflow Triggers
Demonstrates multiple trigger mechanisms and path filtering to prevent unnecessary runs. Introduces manual dispatch with input parameters for on-demand execution.

**Concepts:** `on.push.paths`, `on.schedule`, `on.workflow_dispatch.inputs`, cron syntax

### 03: Conditional Job Execution
Shows how to branch logic based on trigger type or manual input. The same workflow can execute different validation paths depending on context.

**Concepts:** `if` conditions, context variables (`github.event_name`, `github.event.inputs`), logical operators

### 04: Job Dependencies
Establishes ordering with `needs` to ensure validation passes before building. Demonstrates that build jobs can be skipped on PRs while still running on main.

**Concepts:** `needs`, conditional job execution based on branch (`github.ref`)

### 05: Environment Variables
Illustrates variable scope: workflow-level, job-level, and GitHub-provided context. Secrets are referenced but never printed.

**Concepts:** `env` at workflow/job level, `github.*` context, secret references

### 06: SSH Deployment
Automates remote server operations by writing an SSH key from secrets, connecting, and executing commands. Includes proper cleanup with `always()` to remove sensitive files even on failure.

**Concepts:** SSH key handling, `ssh-keyscan` for host verification, `always()` condition, security best practices

### 07: Matrix Strategy
Tests Python code across multiple versions using matrix strategy. One job definition expands to three parallel executions, eliminating duplication.

**Concepts:** `strategy.matrix`, `fail-fast`, dynamic `runs-on`, version variables

### 09: Security Scanning
Integrates three security tools with conditional execution based on trigger type. Supports scheduled daily scans, PR/push scans, and manual scoped scans.

**Concepts:** Multi-tool integration, complex `if` conditions, scheduled automation, manual dispatch with environment selection

## Prerequisites

### For Security Scans (Exercise 09)
The security workflow references `learnhub-central` (private repository). To use this workflow:
- Ensure the repository structure includes a `learnhub-central` directory
- For Trivy scanning, the target path must exist

### For SSH Deployment (Exercise 06)
Configure these repository secrets:
- `SSH_PRIVATE_KEY`: Private key for target server
- `SERVER_IP`: Target server IP address
- `SERVER_USERNAME`: SSH username

### For Matrix Testing (Exercise 07)
Configure these repository secrets if the test suite requires notifications:
- `BOT_TOKEN`: Bot authentication token
- `CHAT_ID`: Destination chat identifier

## Usage

1. Copy individual workflow files to `.github/workflows/` in your repository
2. Configure required secrets in repository Settings → Secrets and variables → Actions
3. Adjust paths (e.g., `learnhub-central`, `python`) to match your project structure
4. Commit and push to see workflows trigger

## Key Takeaways

- **Progressive complexity**: Start with basic structure, add features incrementally
- **Conditional logic**: Use `if` statements to control execution based on context
- **Dependencies**: `needs` ensures proper ordering without manual coordination
- **Matrix strategy**: Eliminates duplicate workflows for multi-version testing
- **Security**: Integrate scanning early; schedule regular audits

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [Contexts and Expression Syntax](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [Security Hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

---

*This learning journey was built as part of a DevSecOps curriculum, focusing on practical automation patterns rather than theoretical knowledge.*
