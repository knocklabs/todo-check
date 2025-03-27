# Issue-Listen GitHub Action

A GitHub Action that automatically scans for TODOs in your codebase that mention the current issue being worked on.

## How It Works

1. Extracts the issue number from either:
   - PR title (e.g., "Fix login bug KNO-1234")
   - Branch name (e.g., "kno-1234-fix-login")

2. Searches the codebase for any TODOs that reference the extracted issue number
   - Looks for patterns like `TODO: Fix this for KNO-1234` or `TODO: Needs review kno-1234`

3. Comments on the PR with any found TODOs

## Example

If you create a PR from a branch named `kno-5678-update-api` or with a PR title containing "KNO-5678", 
the action will search for TODOs referencing "KNO-5678" or "kno-5678" and comment with the results.

## Implementation

This repository follows a single-source-of-truth approach for workflow files:

1. The main workflow is defined in `todo-check.yml` at the repository root
2. A second workflow (`deploy-workflow.yml`) automatically copies this file to `.github/workflows/`
   when changes are pushed to the main branch
3. This ensures you only need to update the workflow in one place

### Workflow Files:
- `todo-check.yml` - The main workflow that checks for TODOs (edit this file)
- `.github/workflows/deploy-workflow.yml` - Helper workflow that deploys the main workflow
- `.github/workflows/todo-check.yml` - Auto-generated copy (do not edit directly)