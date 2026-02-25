---
description: PowerShell command conventions to follow at all times in this project
---

# PowerShell Command Conventions

## CRITICAL: Command Chaining

**ALWAYS use `;` to chain commands in PowerShell. NEVER use `&&`.**

`&&` is a bash/Unix operator and causes a `ParserError` in PowerShell.

### ✅ Correct
```powershell
git add src/data/foo.js ; git commit -m "feat: ..." ; git push origin feat/data-generation
```

### ❌ Wrong — Do NOT do this
```powershell
git add src/data/foo.js && git commit -m "feat: ..." && git push origin feat/data-generation
```

This rule applies to **every** `run_command` tool call, without exception.
