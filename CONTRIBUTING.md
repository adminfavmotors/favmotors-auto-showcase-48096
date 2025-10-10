# Contributing to FAVMOTORS

First off, thank you for considering contributing to FAVMOTORS! It's people like you that make this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to creating a positive environment:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior:**

- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.0.0
- Code editor (VS Code recommended)

### Initial Setup

1. **Fork the repository**

Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

```bash
git clone https://github.com/YOUR_USERNAME/favmotors.git
cd favmotors
```

3. **Add upstream remote**

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/favmotors.git
```

4. **Install dependencies**

```bash
npm install
```

5. **Create a branch**

```bash
git checkout -b feature/your-feature-name
```

## Development Workflow

### 1. Stay Updated

Before starting work, sync with upstream:

```bash
git checkout develop
git pull upstream develop
git checkout feature/your-feature-name
git rebase develop
```

### 2. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run the development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

See [Commit Messages](#commit-messages) for guidelines.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

Go to GitHub and create a Pull Request from your fork to the main repository.

## Pull Request Process

### Before Submitting

- [ ] Code builds without errors
- [ ] All tests pass
- [ ] Linting passes
- [ ] Documentation updated
- [ ] Branch is up to date with develop

### PR Title Format

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>

Examples:
feat(products): add product filtering
fix(header): resolve mobile menu bug
docs(readme): update installation steps
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Motivation and Context
Why is this change required? What problem does it solve?

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran

## Screenshots (if appropriate)

## Checklist
- [ ] My code follows the code style of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### Review Process

1. **Automated Checks**
   - Build must succeed
   - Linting must pass
   - No security vulnerabilities

2. **Code Review**
   - At least 1 approval required
   - Address all comments
   - Keep discussion professional

3. **Merge**
   - Squash and merge (default)
   - Delete branch after merge

## Coding Standards

### TypeScript

```typescript
// ✅ GOOD
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price} zł</p>
    </div>
  );
};

// ❌ BAD
function productCard(product: any) {
  return <div>{product.name}</div>;
}
```

### React Components

```typescript
// ✅ GOOD - Functional component with TypeScript
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// ❌ BAD - No types, no clear structure
export default function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### CSS/Tailwind

```tsx
// ✅ GOOD - Use design system tokens
<button className="bg-primary text-white hover:bg-primary/90 transition-smooth">

// ❌ BAD - Direct colors
<button className="bg-orange-500 text-white hover:bg-orange-600">
```

### File Organization

```typescript
// Component file structure
import React from 'react';
import { externalLibrary } from 'external-library';
import { InternalComponent } from '@/components/InternalComponent';
import { utils } from '@/lib/utils';
import './styles.css';

// Types/Interfaces
interface Props {
  // ...
}

// Constants
const CONSTANT_VALUE = 'value';

// Component
export const Component: React.FC<Props> = (props) => {
  // Hooks
  const [state, setState] = useState();
  
  // Handlers
  const handleClick = () => {
    // ...
  };
  
  // Render
  return (
    // JSX
  );
};
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProductCard.tsx` |
| Functions | camelCase | `formatPrice()` |
| Constants | UPPER_SNAKE_CASE | `API_URL` |
| CSS Classes | kebab-case | `product-card` |
| Files | kebab-case | `product-card.tsx` |
| Directories | kebab-case | `components/product-card/` |

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (white-space, formatting)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or correcting tests
- **chore**: Changes to build process or auxiliary tools

### Examples

```bash
# Feature
feat(products): add product search functionality

# Bug fix
fix(header): resolve mobile menu not closing on link click

# Documentation
docs(readme): update installation instructions

# Refactoring
refactor(utils): simplify date formatting function

# Performance
perf(images): implement lazy loading for product images
```

### Breaking Changes

```bash
feat(api): update product API endpoint

BREAKING CHANGE: Product API now uses /api/v2/products instead of /api/products
```

## Testing

### Writing Tests

```typescript
// example.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Documentation

### Code Comments

```typescript
// ✅ GOOD - Explain why, not what
// Calculate discount based on user tier and purchase history
// to incentivize repeat customers
const discount = calculateDiscount(user.tier, purchaseHistory);

// ❌ BAD - State the obvious
// Set discount variable
const discount = 0.1;
```

### JSDoc Comments

```typescript
/**
 * Formats a price value with currency symbol
 * @param price - The numeric price value
 * @param currency - The currency code (default: PLN)
 * @returns Formatted price string
 * @example
 * formatPrice(100, 'PLN') // returns "100 zł"
 */
export const formatPrice = (price: number, currency: string = 'PLN'): string => {
  // Implementation
};
```

### README Updates

When adding new features, update:
- README.md - User-facing documentation
- API documentation (if applicable)
- Code examples

## Issue Reporting

### Bug Reports

Use the bug report template:

```markdown
**Describe the bug**
A clear and concise description

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
 - OS: [e.g. Windows 10]
 - Browser: [e.g. Chrome 120]
 - Version: [e.g. 1.0.0]
```

### Feature Requests

```markdown
**Is your feature request related to a problem?**
A clear description

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Other solutions you've thought about

**Additional context**
Any other context or screenshots
```

## Questions?

- Check [README.md](README.md)
- Search [existing issues](https://github.com/your-username/favmotors/issues)
- Create a new issue with the "question" label

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project website (when available)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to FAVMOTORS! 🚗
