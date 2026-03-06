# @pingux/onyx-tokens

Design tokens for the Onyx/NextGen theme, built with [Style Dictionary](https://amzn.github.io/style-dictionary/).

## Usage

```jsx
import { astroTokens, astroTokensDark } from '@pingux/onyx-tokens';

// Access tokens programmatically
const primaryColor = astroTokens.color.primary; // '#1a73e8'
const spacing = astroTokens.spacing.md;         // 16
```

## Token Reference

See [`build/TOKENS.md`](./build/TOKENS.md) for the complete list of available tokens with values.

## Building

```bash
npm run build
```

This generates:
- `build/astro/tokens.json` - Light theme tokens
- `build/astro/tokens-dark.json` - Dark theme tokens  
- `build/TOKENS.md` - Auto-generated token documentation
- CSS and SCSS variables

## Running Tests

```bash
npm test
```
