# Self-Healing CI/CD Pipeline 🤖

## Overview

This repository includes a **fully autonomous self-healing CI/CD pipeline** that automatically detects, analyzes, and fixes CI failures without human intervention.

When a CI workflow fails on the `main` branch, the system:
1. **Detects the failure** and creates a GitHub issue assigned to Copilot
2. **Copilot analyzes** the logs, identifies the root cause, and implements a fix
3. **Opens a PR** with the fix
4. **Calculates a confidence score** (0-100) based on multiple safety signals
5. **Auto-merges** if confidence ≥ 80 (default threshold, [configurable](#adjusting-the-confidence-threshold)), or **requests human review** otherwise

---

## Workflows

### 1. Auto-fix on CI Failure

**File:** `.github/workflows/auto-fix-on-failure.yml`

**Trigger:** When any workflow run fails on the `main` branch

**What it does:**
- Detects workflow failures using `workflow_run` events
- Checks for existing open `auto-fix` issues to prevent duplicates
- Creates a GitHub issue with:
  - Title: `🤖 Auto-fix: CI failure in {workflow} ({short-sha})`
  - Labels: `auto-fix`, `copilot`
  - Assignee: `copilot` (this triggers the Copilot coding agent)
  - Body with detailed failure information and instructions

**Permissions:**
- `issues: write` - Create issues
- `actions: read` - Read workflow run details
- `contents: read` - Access repository content

**Loop Prevention:**
Only runs when `head_branch == 'main'`, preventing infinite loops from Copilot's own PR branches.

---

### 2. Confidence-based Auto-merge for Copilot Fixes

**File:** `.github/workflows/auto-merge-copilot-fix.yml`

**Trigger:**
- `pull_request` events (opened, synchronize, labeled)
- `pull_request_review` events (submitted)
- `check_suite` events (completed)

**What it does:**

#### Job 1: `confidence-check`
Calculates a confidence score (0-100) based on four signals:

| Signal | Points | Criteria |
|--------|--------|----------|
| ✅ All CI checks pass | 40 | All check runs (excluding self) have `conclusion === 'success'` |
| 📏 Small diff size | 25 or 15 | **25pts:** ≤20 changes, ≤3 files<br>**15pts:** ≤50 changes, ≤5 files |
| 🛡️ No risky files modified | 20 | None of: `.github/workflows/`, `package.json`, `package-lock.json`, `.env`, `docker`, `terraform` |
| 🗑️ No files deleted | 15 | No files have `status === 'removed'` |

**Threshold:** 80 / 100

Posts a detailed confidence report comment on the PR showing:
- Final score and threshold
- Decision (AUTO-MERGE or NEEDS HUMAN REVIEW)
- Breakdown of each signal (what passed/failed and points awarded)

#### Job 2: `auto-merge`
**Runs if:** `should_merge == 'true'`

- Merges the PR using squash merge
- Commit title: `🤖 Auto-fix: {pr-title}`
- Includes confidence score in commit message

#### Job 3: `request-review`
**Runs if:** `should_merge == 'false'`

- Adds `needs-human-review` label
- Requests review from `Ker102`

**Permissions:**
- `pull-requests: write` - Comment, label, and merge PRs
- `contents: write` - Merge commits
- `checks: read` - Read check run status
- `issues: write` - Add labels

---

## Configuration

### Adjusting the Confidence Threshold

The confidence threshold is set at the top of the script for easy modification:

```javascript
const CONFIDENCE_THRESHOLD = 80; // Easy to change threshold
```

To make the system more conservative (require higher confidence):
```javascript
const CONFIDENCE_THRESHOLD = 90; // Only merge with 90+ score
```

To make it more permissive:
```javascript
const CONFIDENCE_THRESHOLD = 70; // Merge with 70+ score
```

### Modifying Confidence Signals

You can adjust the point values for each signal in `.github/workflows/auto-merge-copilot-fix.yml`:

```javascript
// Example: Increase weight of passing CI checks
if (allChecksPassed) {
  score += 50; // Changed from 40
  breakdown.push('✅ All CI checks pass: **+50 points**');
}
```

Or add new signals:

```javascript
// Example: Bonus points for added tests
const addedTests = files.some(f => f.filename.includes('test') && f.status === 'added');
if (addedTests) {
  score += 10;
  breakdown.push('✅ Tests added: **+10 points**');
}
```

---

## Example Scenarios

### Scenario 1: Simple Lint Fix (AUTO-MERGE)

**Failure:** ESLint error on `main`
**Fix:** Copilot adds missing semicolons in 1 file (8 lines changed)

**Confidence Breakdown:**
- ✅ All CI checks pass: **+40 points**
- ✅ Small diff: 8 changes in 1 file: **+25 points**
- ✅ No risky files modified: **+20 points**
- ✅ No files deleted: **+15 points**
- **Total: 100/100** → **AUTO-MERGE** ✅

---

### Scenario 2: Dependency Update (NEEDS REVIEW)

**Failure:** Build fails due to deprecated API
**Fix:** Copilot updates `package.json` and `package-lock.json`

**Confidence Breakdown:**
- ✅ All CI checks pass: **+40 points**
- ⚠️ Medium diff: 45 changes in 2 files: **+15 points**
- ❌ Risky files modified (package.json, package-lock.json): **+0 points**
- ✅ No files deleted: **+15 points**
- **Total: 70/100** → **NEEDS HUMAN REVIEW** ⚠️

Review requested from `Ker102`, label `needs-human-review` added.

---

### Scenario 3: Refactor (NEEDS REVIEW)

**Failure:** Test fails due to API change
**Fix:** Copilot refactors 6 files, deletes 1 deprecated file

**Confidence Breakdown:**
- ✅ All CI checks pass: **+40 points**
- ❌ Large diff: 120 changes in 6 files: **+0 points**
- ✅ No risky files modified: **+20 points**
- ❌ Files deleted (1): old-api.ts: **+0 points**
- **Total: 60/100** → **NEEDS HUMAN REVIEW** ⚠️

Review requested from `Ker102`, label `needs-human-review` added.

---

## Monitoring

### View Auto-fix Issues

All auto-fix issues are labeled with `auto-fix` and `copilot`:

```
https://github.com/Ker102/Kaelux-DevPortfolio/issues?q=is%3Aissue+label%3Aauto-fix
```

### View Copilot Fix PRs

All fix PRs opened by Copilot:

```
https://github.com/Ker102/Kaelux-DevPortfolio/pulls?q=is%3Apr+author%3Acopilot
```

### View Auto-merged Commits

Search commits for auto-merge prefix:

```bash
git log --oneline --grep="🤖 Auto-fix:"
```

---

## Best Practices

### ✅ Do's
- Review auto-merged commits periodically
- Adjust confidence threshold based on your comfort level
- Monitor the `auto-fix` issues to spot patterns
- Keep risky file patterns updated as your project evolves

### ❌ Don'ts
- Don't disable CI checks — they're crucial for confidence scoring
- Don't bypass the confidence system for convenience
- Don't ignore `needs-human-review` PRs — they need your attention

---

## Troubleshooting

### Issue: Auto-fix issues keep piling up

**Solution:** Check if:
- Copilot is properly configured
- The `copilot` label exists in your repository
- The issue has clear, actionable instructions

### Issue: PRs aren't auto-merging even with high scores

**Solution:** Verify:
- All CI checks are passing (required for the 40-point signal)
- The PR has the `auto-fix` label
- The PR was opened by user `copilot`
- Branch protection rules allow auto-merge

### Issue: Too many false positives (bad auto-merges)

**Solution:**
- Increase the `CONFIDENCE_THRESHOLD` to 85 or 90
- Add more stringent signals (e.g., require code review approval)
- Add more risky file patterns

---

## Security Considerations

### Safe by Design
- **Conservative threshold:** 80/100 requires multiple positive signals
- **Risky file protection:** Workflow files, configs, and dependencies trigger review
- **Deletion protection:** File deletions reduce confidence
- **CI requirement:** All checks must pass (40% of total score)

### Additional Safeguards
Consider enabling:
- **Branch protection rules** requiring reviews for `main`
- **CODEOWNERS** for critical files
- **Status checks** that must pass before merge

---

## Metrics

Track the effectiveness of your self-healing pipeline:

### Auto-merge Rate
```bash
# PRs auto-merged vs. total Copilot PRs
gh pr list --author copilot --state merged --search "🤖 Auto-fix" --json number | wc -l
```

### Average Confidence Score
Check the confidence report comments on Copilot PRs to calculate average scores.

### Mean Time to Resolution (MTTR)
Track time from CI failure to merged fix:
1. CI failure detected
2. Issue created
3. PR opened
4. Auto-merge (or review)

---

## Future Enhancements

Potential improvements to the self-healing system:

- **ML-based scoring:** Use historical data to predict fix quality
- **Incremental rollout:** Merge to staging first, then production
- **Slack notifications:** Alert on auto-merges and review requests
- **Confidence trends:** Track score patterns over time
- **Custom checks:** Add repository-specific confidence signals

---

**Your CI/CD pipeline now heals itself! 🚀**

For questions or issues, contact [@Ker102](https://github.com/Ker102).
