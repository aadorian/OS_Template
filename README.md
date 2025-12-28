# Software Engineering Project Template

A comprehensive Cursor AI rules-based template for maintaining code quality, testing standards, and development best practices across your software engineering projects.

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Template Structure](#template-structure)
- [Cursor Rules Explained](#cursor-rules-explained)
- [How to Use This Template](#how-to-use-this-template)
- [Customization Guide](#customization-guide)
- [Rule Files Breakdown](#rule-files-breakdown)
- [Best Practices](#best-practices)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

## Overview

This template provides a complete set of Cursor AI rules that enforce:

- **Code Quality**: TypeScript standards, functional patterns, proper file organization
- **UI Development**: Design system usage, Tailwind CSS patterns, component hierarchy
- **Testing Standards**: Unit testing, component-view testing, E2E testing with strict patterns
- **PR Guidelines**: Conventional commits, proper labeling, complete templates
- **Feature Development**: Step-by-step guides for implementing new features (e.g., deeplink handlers)

### Why Use This Template?

- ✅ **Consistency**: Enforce the same standards across your entire team
- ✅ **Quality**: Prevent common mistakes before code review
- ✅ **Speed**: AI assistance follows your project's exact patterns
- ✅ **Documentation**: Rules serve as living documentation
- ✅ **Onboarding**: New developers learn standards through AI guidance

## Quick Start

### 1. Copy Template to Your Project

```bash
# Clone or copy this template
cp -r /path/to/OS_Template/.cursor /path/to/your-project/

# Your project structure should now include:
your-project/
├── .cursor/
│   └── rules/
│       ├── general-coding-guidelines.mdc
│       ├── ui-development-guidelines.mdc
│       ├── unit-testing-guidelines.mdc
│       ├── component-view-testing.mdc
│       ├── e2e-testing-guidelines.mdc
│       ├── pr-creation-guidelines.mdc
│       └── deeplink-handler-guidelines.mdc
├── src/
└── ...
```

### 2. Install Cursor AI

If you haven't already:
1. Download [Cursor](https://cursor.com)
2. Open your project in Cursor
3. The `.cursor/rules/` files will be automatically detected

### 3. Verify Rules Are Active

Open Cursor and check that rules are loaded:
- Open any `.ts` or `.tsx` file
- Ask Cursor: "What coding guidelines should I follow?"
- Cursor should reference the rules from your `.cursor/rules/` directory

## Template Structure

```
.cursor/
└── rules/
    ├── general-coding-guidelines.mdc      # Core development standards (ALWAYS APPLIES)
    ├── ui-development-guidelines.mdc      # React Native UI patterns (ALWAYS APPLIES)
    ├── unit-testing-guidelines.mdc        # Unit test standards (*.test.* files)
    ├── component-view-testing.mdc         # Component testing (*.view.test.* files)
    ├── e2e-testing-guidelines.mdc         # E2E testing (ALWAYS APPLIES)
    ├── pr-creation-guidelines.mdc         # Pull request guidelines (manual trigger)
    └── deeplink-handler-guidelines.mdc    # Feature-specific guide (specific globs)
```

### Rule File Format

Each `.mdc` file uses this structure:

```markdown
---
description: Brief description of what this rule covers
globs: "**/*.{ts,tsx}"  # File patterns where rule applies
alwaysApply: true        # Whether to apply globally or only to matching files
---

# Rule Title

## Section 1
Content...

## Section 2
Content...
```

## Cursor Rules Explained

### Front Matter Configuration

```yaml
---
description: "Brief description for Cursor AI"
globs: "**/*.test.{ts,tsx}"  # Glob patterns to match files
alwaysApply: false            # true = always active, false = only for matching globs
---
```

### When Rules Apply

| `alwaysApply` | `globs` | Behavior |
|---------------|---------|----------|
| `true` | Any | Rule applies to ALL files |
| `false` | `**/*.test.*` | Rule applies ONLY to test files |
| `false` | `app/**/*.tsx` | Rule applies ONLY to .tsx files in app/ |

### Example Rule Activation

```markdown
---
description: Unit testing rules
globs: "*.test.*"
alwaysApply: false
---
```

When you open `MyComponent.test.tsx`, Cursor automatically loads this rule and enforces:
- No "should" in test names
- AAA pattern (Arrange, Act, Assert)
- Specific assertion patterns

## How to Use This Template

### For New Projects

1. **Copy the entire `.cursor/` directory** to your project root
2. **Customize each rule file** to match your tech stack
3. **Update references** (file paths, documentation links)
4. **Add project-specific rules** as needed

### For Existing Projects

1. **Start with general-coding-guidelines.mdc**
   - Adapt to your coding standards
   - Update file organization patterns
   - Adjust documentation references

2. **Add testing rules incrementally**
   - Start with `unit-testing-guidelines.mdc`
   - Enforce gradually across team
   - Update existing tests to match patterns

3. **Create feature-specific rules**
   - Use `deeplink-handler-guidelines.mdc` as a template
   - Document complex patterns once, reference everywhere

### For Teams

1. **Establish rules as team standards**
   - Review and approve each rule file
   - Make rules part of PR checklist
   - Update rules based on team feedback

2. **Version control the rules**
   - Commit `.cursor/rules/` to git
   - Review rule changes in PRs
   - Keep rules synchronized with actual practices

3. **Onboard new developers**
   - Point them to `.cursor/rules/README.md` (this file)
   - Let Cursor guide them through standards
   - Rules serve as interactive documentation

## Customization Guide

### Step 1: Update General Guidelines

Edit [.cursor/rules/general-coding-guidelines.mdc](.cursor/rules/general-coding-guidelines.mdc):

```markdown
---
globs: "**/*"
alwaysApply: true
---

# Your Project Coding Guidelines

## Required Reading Before Development

**ALWAYS** check: `.github/guidelines/CODING_GUIDELINES.md` • `README.md`

## Development Workflow

**Before Starting**: Read README.md → Check guidelines → Review docs

**Code Quality**:
- [Your language] guidelines
- [Your framework] patterns
- Naming conventions: [Your standards]

**File Organization**:
```
YourComponent/
├── YourComponent.tsx
├── YourComponent.test.tsx
└── index.ts
```
```

### Step 2: Customize UI Guidelines (if applicable)

Edit [.cursor/rules/ui-development-guidelines.mdc](.cursor/rules/ui-development-guidelines.mdc):

**For React projects:**
- Keep the design system hierarchy
- Update component library references
- Adjust styling patterns (CSS Modules, styled-components, etc.)

**For non-React projects:**
- Rename to `frontend-guidelines.mdc`
- Adapt component patterns to your framework
- Keep the principle of "prefer framework components over custom"

### Step 3: Customize Testing Guidelines

Edit [.cursor/rules/unit-testing-guidelines.mdc](.cursor/rules/unit-testing-guidelines.mdc):

```markdown
## Test Naming Rules (MANDATORY for all projects)

- **NEVER use "should"** - universal rule
- **Use action-oriented descriptions**
- **Be specific about behavior**

## Test Framework: [Jest/Mocha/Your Framework]

**Commands**:
```bash
# Run tests
[your-test-command]

# Run with coverage
[your-coverage-command]
```

## Mocking Rules

- Mock external dependencies: [Your mocking library]
- Use [Your pattern] for API mocks
```

### Step 4: Add Project-Specific Rules

Create new rule files for your project's unique needs:

```bash
# Example: API development rules
touch .cursor/rules/api-development-guidelines.mdc

# Example: Database guidelines
touch .cursor/rules/database-guidelines.mdc

# Example: Security rules
touch .cursor/rules/security-guidelines.mdc
```

Example API rule file:

```markdown
---
description: API Development Guidelines
globs: "api/**/*.{ts,js}"
alwaysApply: false
---

# API Development Guidelines

## Required Patterns

- RESTful conventions
- Error handling with [Your pattern]
- Authentication using [Your method]

## File Structure

```
api/
├── routes/
├── controllers/
├── models/
└── middleware/
```

## Examples

[Your specific patterns]
```

### Step 5: Update Documentation References

Search and replace these references throughout the rules:

```bash
# Find project-specific references
grep -r "MetaMask" .cursor/rules/
grep -r "app/component-library" .cursor/rules/
grep -r "github.com/MetaMask" .cursor/rules/

# Replace with your project references
# Example: Update to your documentation
# OLD: `.github/guidelines/CODING_GUIDELINES.md`
# NEW: `docs/coding-standards.md`
```

## Rule Files Breakdown

### 1. general-coding-guidelines.mdc

**Purpose**: Core development standards that apply to ALL files

**Key Sections**:
- Required documentation reading
- Development workflow
- Code quality standards
- File organization patterns
- Enforcement policies

**When to Use**: Always active (`alwaysApply: true`)

**Customization Priority**: 🔴 HIGH - Update first for your project

---

### 2. ui-development-guidelines.mdc

**Purpose**: UI development patterns for React Native (adaptable to other frameworks)

**Key Sections**:
- Component hierarchy (design system → component library → custom)
- Styling rules (Tailwind CSS patterns)
- Code templates for common patterns
- Error prevention guidelines

**When to Use**: Applies to all `.tsx` files

**Customization Priority**: 🟡 MEDIUM - Adapt to your UI framework

**Adaptation Examples**:
- **React with CSS Modules**: Update styling rules to CSS Modules patterns
- **Vue.js**: Adapt component patterns to Vue SFC structure
- **Angular**: Update to Angular component architecture

---

### 3. unit-testing-guidelines.mdc

**Purpose**: Comprehensive unit testing standards

**Key Sections**:
- Test naming (NO "should" rule)
- AAA pattern (Arrange, Act, Assert)
- Mocking rules
- Test isolation
- Coverage requirements
- Async testing patterns

**When to Use**: Applies to `*.test.*` files

**Customization Priority**: 🔴 HIGH - Core to code quality

**Universal Rules** (keep for any project):
- ✅ No "should" in test names
- ✅ AAA pattern with blank line separation
- ✅ One behavior per test
- ✅ Mock all external dependencies

---

### 4. component-view-testing.mdc

**Purpose**: Component-level testing for React components (Redux state-driven)

**Key Sections**:
- Mock policy (engine-only mocks)
- State-driven testing patterns
- Navigation testing
- Framework usage (presets, renderers)

**When to Use**: Applies to `**/*.view.test.{ts,tsx}` files

**Customization Priority**: 🟡 MEDIUM - If using component testing

**Adapt For**:
- **React Testing Library**: Keep patterns, update framework imports
- **Vue Test Utils**: Adapt state management mocking
- **Remove if**: Not using component-level testing

---

### 5. e2e-testing-guidelines.mdc

**Purpose**: End-to-end testing patterns using Detox (adaptable to Playwright, Cypress)

**Key Sections**:
- Test naming conventions
- Test organization by feature
- Page Object Model (POM) pattern
- Element state checking
- Handling flaky tests
- No delays policy

**When to Use**: Always active for E2E awareness

**Customization Priority**: 🟢 LOW - If not using E2E testing initially

**Adapt For**:
- **Playwright**: Update framework imports and patterns
- **Cypress**: Adapt commands and assertions
- **Selenium**: Update to WebDriver patterns

---

### 6. pr-creation-guidelines.mdc

**Purpose**: Pull request standards and conventions

**Key Sections**:
- PR title format (Conventional Commits)
- Template compliance
- Required labels
- Branch naming conventions
- Force push policy

**When to Use**: Manually referenced when creating PRs (`alwaysApply: false`)

**Customization Priority**: 🟡 MEDIUM - Adapt to your workflow

**Customize**:
```markdown
## PR Title Requirements

**Format**: `<type>[optional scope]: <description>`

**Types**: [your-types] (e.g., feat|fix|docs|refactor)

**Examples**:
- `feat: add user authentication`
- `fix: resolve login timeout issue`
```

---

### 7. deeplink-handler-guidelines.mdc

**Purpose**: Feature-specific implementation guide (example template)

**Key Sections**:
- Step-by-step implementation guide
- File locations and structure
- Code patterns and templates
- Common pitfalls
- Testing checklist

**When to Use**: Applies to `app/core/DeeplinkManager/**` files

**Customization Priority**: 🟢 LOW - Template for feature-specific guides

**Use As Template For**:
- API endpoint creation guides
- Database migration guides
- Authentication implementation guides
- Feature flag setup guides

**Example Adaptation**:

```markdown
---
description: Guide for creating new API endpoints
globs:
  - "api/routes/**"
  - "api/controllers/**"
alwaysApply: false
---

# Creating New API Endpoints

## Quick Reference

| File | Purpose |
|------|---------|
| `api/routes/your-route.ts` | Route definition |
| `api/controllers/YourController.ts` | Business logic |
| `api/models/YourModel.ts` | Data model |

## Step 1: Define the Route

[Your pattern]

## Step 2: Create Controller

[Your pattern]

[Continue with your specific steps]
```

## Best Practices

### DO ✅

1. **Keep rules focused and actionable**
   ```markdown
   # ✅ GOOD
   - Use `const` for immutable variables
   - Use `let` for reassignable variables
   - Never use `var`

   # ❌ TOO VAGUE
   - Use modern JavaScript
   ```

2. **Provide examples for every rule**
   ```markdown
   ## Naming Conventions

   ```typescript
   // ✅ CORRECT
   const getUserById = (id: string) => {...}

   // ❌ WRONG
   const get_user_by_id = (id: string) => {...}
   ```
   ```

3. **Use visual markers**
   - ✅ / ❌ for correct/incorrect examples
   - 🔴 🟡 🟢 for priority levels
   - ⚠️ for warnings
   - 📝 for notes

4. **Link to external documentation**
   ```markdown
   **References**:
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/)
   - [Project Wiki](https://your-wiki-link)
   ```

5. **Make rules scannable**
   - Use tables for comparisons
   - Use bulleted lists
   - Use code blocks liberally
   - Add "Quick Reference" sections

### DON'T ❌

1. **Don't write novels**
   - Keep rules concise
   - Link to detailed docs instead
   - Use "Quick Reference" for TL;DR

2. **Don't make rules ambiguous**
   ```markdown
   # ❌ AMBIGUOUS
   - Write good code
   - Make tests better

   # ✅ SPECIFIC
   - Functions should be under 50 lines
   - Tests must cover all error conditions
   ```

3. **Don't duplicate rules across files**
   - Put global rules in `general-coding-guidelines.mdc`
   - Put specific rules in targeted files
   - Reference other rules instead of repeating

4. **Don't forget to update globs**
   ```markdown
   # If rule applies to TypeScript only
   globs: "**/*.{ts,tsx}"

   # If rule applies to all files
   globs: "**/*"
   alwaysApply: true
   ```

## Examples

### Example 1: Creating a Feature-Specific Rule

Let's create a rule for Redux slice creation:

```bash
# Create new rule file
touch .cursor/rules/redux-slice-guidelines.mdc
```

```markdown
---
description: Guidelines for creating Redux slices
globs: "store/slices/**/*.ts"
alwaysApply: false
---

# Redux Slice Creation Guidelines

## Quick Reference

| File | Purpose |
|------|---------|
| `store/slices/yourSlice.ts` | Slice definition |
| `store/slices/yourSlice.test.ts` | Slice tests |

## Required Pattern

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  data: YourData[];
  loading: boolean;
  error: string | null;
}

const initialState: YourState = {
  data: [],
  loading: false,
  error: null,
};

const yourSlice = createSlice({
  name: 'your-feature',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (state, action: PayloadAction<YourData[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setData, setError } = yourSlice.actions;
export default yourSlice.reducer;
```

## Naming Conventions

- Slice name: kebab-case (e.g., 'user-profile')
- Reducer names: camelCase actions (e.g., 'setLoading')
- State interface: PascalCase with 'State' suffix (e.g., 'UserProfileState')

## Testing Requirements

- Test each reducer independently
- Test initial state
- Test async thunks if present

## Checklist

- [ ] Interface defined for state
- [ ] Initial state matches interface
- [ ] All reducers have PayloadAction types
- [ ] Actions exported
- [ ] Reducer exported as default
- [ ] Tests written
```

### Example 2: Adding a Custom Enforcement Rule

Let's enforce a specific pattern for error handling:

Edit `.cursor/rules/general-coding-guidelines.mdc`:

```markdown
## Error Handling (MANDATORY)

### Required Pattern

ALL functions that can throw MUST:
1. Have try/catch blocks
2. Log errors with context
3. Return/throw typed errors

```typescript
// ✅ CORRECT
async function fetchUserData(userId: string): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch user data', { userId, error });
    throw new UserFetchError(`Unable to fetch user ${userId}`, error);
  }
}

// ❌ WRONG - No error handling
async function fetchUserData(userId: string): Promise<User> {
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

// ❌ WRONG - Silent failure
async function fetchUserData(userId: string): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null; // Don't hide errors!
  }
}
```

### Custom Error Classes

Define in `src/errors/index.ts`:

```typescript
export class UserFetchError extends Error {
  constructor(message: string, public originalError?: unknown) {
    super(message);
    this.name = 'UserFetchError';
  }
}
```
```

### Example 3: Team-Specific Code Review Rule

Create `.cursor/rules/code-review-guidelines.mdc`:

```markdown
---
description: Code review standards for the team
alwaysApply: false
---

# Code Review Guidelines

## Reviewer Checklist

Before approving ANY PR, verify:

### Code Quality
- [ ] No console.log statements (use logger)
- [ ] No commented-out code
- [ ] No TODO comments without tickets
- [ ] No magic numbers (use constants)
- [ ] Functions under 50 lines
- [ ] Files under 300 lines

### Testing
- [ ] Unit tests for new functions
- [ ] Tests follow AAA pattern
- [ ] No "should" in test names
- [ ] Edge cases covered
- [ ] Error conditions tested

### Documentation
- [ ] Public functions have TSDoc
- [ ] Complex logic has inline comments
- [ ] README updated if needed
- [ ] CHANGELOG updated

### Security
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] No SQL injection risks
- [ ] XSS prevention in place

## Auto-Reject Criteria

Immediately request changes if PR has:

- ❌ Failing tests
- ❌ TypeScript errors
- ❌ Linting errors
- ❌ Merge conflicts
- ❌ Missing PR description
- ❌ No linked issue

## Approval Standards

Only approve if:

- ✅ All checklist items pass
- ✅ CI/CD pipeline passes
- ✅ You understand the changes
- ✅ Changes match the issue description
```

## Troubleshooting

### Rules Not Being Applied

**Problem**: Cursor doesn't seem to follow the rules

**Solutions**:

1. **Check file location**
   ```bash
   # Rules MUST be in .cursor/rules/ directory
   ls -la .cursor/rules/
   ```

2. **Check glob patterns**
   ```markdown
   # Make sure globs match your files
   globs: "**/*.ts"  # ✅ Matches TypeScript
   globs: "*.ts"     # ❌ Only root level
   ```

3. **Verify alwaysApply setting**
   ```markdown
   # For global rules
   alwaysApply: true

   # For specific files
   alwaysApply: false
   globs: "**/*.test.ts"
   ```

4. **Restart Cursor**
   - Close and reopen Cursor
   - Rules are loaded on startup

5. **Check for YAML errors**
   ```markdown
   ---
   globs: "**/*.ts"
   alwaysApply: true
   ---
   # ^ Make sure there's a blank line after closing ---
   ```

### Conflicting Rules

**Problem**: Multiple rules contradict each other

**Solutions**:

1. **Use specificity in globs**
   ```markdown
   # General rule
   globs: "**/*.ts"

   # More specific rule takes precedence
   globs: "**/*.test.ts"
   ```

2. **Document precedence**
   ```markdown
   ## Rule Precedence

   1. Feature-specific rules (highest priority)
   2. File-type rules
   3. General guidelines (lowest priority)
   ```

### Rules Too Verbose

**Problem**: Cursor AI provides too much information

**Solutions**:

1. **Add "Quick Reference" sections**
   ```markdown
   ## Quick Reference

   - Use `const` for immutable
   - Use `let` for mutable
   - Never use `var`

   ## Detailed Explanation
   [Longer explanation here]
   ```

2. **Use external links**
   ```markdown
   Follow [TypeScript Guidelines](link) for detailed rules.

   ## Key Points
   - Point 1
   - Point 2
   ```

### Team Not Following Rules

**Problem**: Team members ignore the rules

**Solutions**:

1. **Add to PR checklist**
   ```markdown
   ## PR Checklist

   - [ ] Code follows .cursor/rules/ guidelines
   - [ ] Cursor AI was used during development
   ```

2. **Make rules enforceable**
   ```bash
   # Add linting rules that match .cursor/rules/
   # Example: ESLint rules matching naming conventions
   ```

3. **Regular rule reviews**
   - Review rules in team meetings
   - Update based on feedback
   - Make rules collaborative

## Contributing to This Template

Want to improve this template? Here's how:

1. **Fork the template**
2. **Add/improve rule files**
3. **Update this README**
4. **Submit improvements**

### Rule File Contribution Guidelines

When adding new rule files:

1. **Follow the existing format**
   ```markdown
   ---
   description: Clear, concise description
   globs: "appropriate/pattern/**"
   alwaysApply: true/false
   ---

   # Clear Title

   ## Quick Reference
   [Summary]

   ## Detailed Sections
   [Content]
   ```

2. **Include examples**
   - ✅ Correct patterns
   - ❌ Incorrect patterns
   - Real-world use cases

3. **Make it actionable**
   - Checklists
   - Step-by-step guides
   - Clear do/don't lists

4. **Test the rule**
   - Use it in a real project
   - Verify Cursor follows it
   - Get team feedback

## Additional Resources

- [Cursor Documentation](https://cursor.com/docs)
- [Cursor Context Rules](https://cursor.com/docs/context/rules)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [TypeScript Guidelines](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

## License

This template is provided as-is for use in your projects. Adapt and modify as needed.

## Support

For questions or issues:
1. Check this README thoroughly
2. Review the specific rule file documentation
3. Open an issue with specific questions

---

**Last Updated**: 2025-12-28

**Template Version**: 1.0.0

**Maintained By**: Your Team/Organization
