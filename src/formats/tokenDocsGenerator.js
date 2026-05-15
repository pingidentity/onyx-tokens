/**
 * Token Documentation Generator
 * 
 * Generates a markdown file documenting all design tokens from the onyx-tokens library.
 * This file is auto-generated during the build process - do not edit manually.
 */

import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';

/** Component/semantic color keys to exclude from color scales */
const COMPONENT_COLOR_KEYS = ['font', 'common', 'button', 'input', 'checkbox', 'avatar', 'alert', 'nav-bar', 'nav-bar-item', 'table-row', 'tooltip', 'icon-button', 'color-block-button'];

/**
 * Extracts base spacing token names (primitive values, not nested objects)
 * @param {object} tokens - The full tokens object
 * @returns {string[]} Array of base spacing token names
 */
const getBaseSpacingTokens = (tokens) => 
  Object.entries(tokens.spacing || {})
    .filter(([, value]) => typeof value !== 'object')
    .map(([key]) => key);

/**
 * Extracts base font size token names (primitive values, not nested objects)
 * @param {object} tokens - The full tokens object
 * @returns {string[]} Array of base font size token names
 */
const getBaseFontSizeTokens = (tokens) =>
  Object.entries(tokens['font-size'] || {})
    .filter(([, value]) => typeof value !== 'object')
    .map(([key]) => key);

/**
 * Extracts color scale names (objects with scale structure, excluding components)
 * @param {object} tokens - The full tokens object
 * @returns {string[]} Array of color scale names
 */
const getColorScales = (tokens) =>
  Object.entries(tokens.color || {})
    .filter(([key, value]) => 
      typeof value === 'object' && 
      value !== null &&
      !COMPONENT_COLOR_KEYS.includes(key) &&
      // Has scale structure (100-900 or base/light/dark)
      (value['100'] || value.base)
    )
    .map(([key]) => key);

/**
 * Formats a token value with appropriate unit
 * @param {string|number} value - The token value
 * @param {string} type - The token type (e.g., 'spacing', 'font-size')
 * @returns {string} Formatted value
 */
const formatValue = (value, type = '') => {
  if (typeof value === 'number' && !['line-height', 'font-weight'].includes(type)) {
    return `${value}px`;
  }
  return String(value);
};

/**
 * Recursively flattens nested token objects into table rows
 * @param {object} obj - Token object to flatten
 * @param {string} prefix - Path prefix for token names
 * @param {string} type - Token type for formatting
 * @returns {string} Markdown table rows
 */
const flattenTokensToRows = (obj, prefix, type = '') => {
  let result = '';
  for (const [key, value] of Object.entries(obj)) {
    const tokenPath = `${prefix}.${key}`;
    if (typeof value === 'object' && value !== null) {
      result += flattenTokensToRows(value, tokenPath, type);
    } else {
      result += `| \`${tokenPath}\` | \`${formatValue(value, type)}\` |\n`;
    }
  }
  return result;
};

/**
 * Generates a markdown table header
 * @param {string[]} columns - Column headers
 * @returns {string} Markdown table header
 */
const tableHeader = (columns = ['Token', 'Value']) => 
  `| ${columns.join(' | ')} |\n|${columns.map(() => '-------').join('|')}|\n`;

/**
 * Generates the full markdown documentation
 * @param {object} tokens - Light theme tokens
 * @returns {string} Complete markdown document
 */
const generateMarkdownDocs = (tokens) => {
  const timestamp = new Date().toISOString();
  
  // Derive token categories from the actual data
  const baseSpacingTokens = getBaseSpacingTokens(tokens);
  const baseFontSizeTokens = getBaseFontSizeTokens(tokens);
  const colorScales = getColorScales(tokens);

  let md = `# Onyx Design Tokens Reference

> **Auto-generated file** - Do not edit manually.  
> Generated: ${timestamp}  
> Source: \`@pingux/onyx-tokens\`

<!-- AI AGENT CONTEXT:
This is the authoritative source for all design token values in @pingux/astro.
Read this file when users ask about:
- Specific token values (colors, spacing, sizes)
- Available color scales and their hex values  
- Component-specific tokens (button, input, avatar, etc.)
- Token names to use in the sx prop

For component VARIANTS and PATTERNS, see .github/astro-reference.md instead.
-->

This file contains all design tokens available in the Onyx/NextGen theme.

---

## Spacing Tokens

Use these tokens in the \`sx\` prop for consistent spacing:

${tableHeader()}`;

  // Base spacing tokens
  for (const token of baseSpacingTokens) {
    const value = tokens.spacing?.[token];
    if (value !== undefined) {
      md += `| \`${token}\` | ${formatValue(value, 'spacing')} |\n`;
    }
  }

  md += `
### Component Spacing

${tableHeader()}`;

  // Component-specific spacing
  for (const [key, value] of Object.entries(tokens.spacing || {})) {
    if (!baseSpacingTokens.includes(key) && typeof value === 'object') {
      md += flattenTokensToRows(value, `spacing.${key}`, 'spacing');
    }
  }

  md += `
---

## Font Sizes

${tableHeader()}`;

  // Base font sizes
  for (const token of baseFontSizeTokens) {
    const value = tokens['font-size']?.[token];
    if (value !== undefined) {
      md += `| \`${token}\` | ${formatValue(value, 'font-size')} |\n`;
    }
  }

  md += `
### Component Font Sizes

${tableHeader()}`;

  for (const [key, value] of Object.entries(tokens['font-size'] || {})) {
    if (!baseFontSizeTokens.includes(key) && typeof value === 'object') {
      md += flattenTokensToRows(value, `font-size.${key}`, 'font-size');
    }
  }

  md += `
---

## Border Radius

${tableHeader()}`;

  for (const [key, value] of Object.entries(tokens.radius || {})) {
    if (typeof value === 'object') {
      md += flattenTokensToRows(value, `radius.${key}`);
    } else {
      md += `| \`radius.${key}\` | ${formatValue(value)} |\n`;
    }
  }

  md += `
---

## Size Tokens

${tableHeader()}`;

  for (const [key, value] of Object.entries(tokens.size || {})) {
    if (typeof value === 'object') {
      md += flattenTokensToRows(value, `size.${key}`);
    } else {
      md += `| \`size.${key}\` | ${formatValue(value)} |\n`;
    }
  }

  md += `
---

## Color Palette

### Primary Colors

${tableHeader()}| \`primary\` | \`${tokens.color?.primary}\` |
| \`primary-light\` | \`${tokens.color?.['primary-light']}\` |
| \`primary-dark\` | \`${tokens.color?.['primary-dark']}\` |

### Status Colors

${tableHeader()}| \`success\` | \`${tokens.color?.success}\` |
| \`success-light\` | \`${tokens.color?.['success-light']}\` |
| \`success-dark\` | \`${tokens.color?.['success-dark']}\` |
| \`critical\` | \`${tokens.color?.critical}\` |
| \`critical-light\` | \`${tokens.color?.['critical-light']}\` |
| \`critical-dark\` | \`${tokens.color?.['critical-dark']}\` |
| \`warning\` | \`${tokens.color?.warning}\` |
| \`warning-light\` | \`${tokens.color?.['warning-light']}\` |
| \`warning-dark\` | \`${tokens.color?.['warning-dark']}\` |
| \`info\` | \`${tokens.color?.info}\` |
| \`info-light\` | \`${tokens.color?.['info-light']}\` |
| \`info-dark\` | \`${tokens.color?.['info-dark']}\` |

### Common Colors

${tableHeader()}| \`white\` | \`${tokens.color?.white}\` |
| \`black\` | \`${tokens.color?.black}\` |
`;

  // Color scales
  for (const colorName of colorScales) {
    const colorScale = tokens.color?.[colorName];
    if (colorScale) {
      md += `
### ${colorName.charAt(0).toUpperCase() + colorName.slice(1)} Scale

${tableHeader()}`;
      for (const [key, value] of Object.entries(colorScale)) {
        if (typeof value === 'string') {
          md += `| \`${colorName}.${key}\` | \`${value}\` |\n`;
        }
      }
    }
  }

  md += `
---

## Font Colors

${tableHeader()}`;

  for (const [key, value] of Object.entries(tokens.color?.font || {})) {
    md += `| \`font.${key}\` | \`${value}\` |\n`;
  }

  md += `
---

## Component Tokens

### Button

${tableHeader()}${flattenTokensToRows(tokens.color?.button || {}, 'button')}
### Input

${tableHeader()}${flattenTokensToRows(tokens.color?.input || {}, 'input')}
### Checkbox

${tableHeader()}${flattenTokensToRows(tokens.color?.checkbox || {}, 'checkbox')}
### Avatar Colors

${tableHeader(['Token', 'Background', 'Text'])}`;

  for (const [key, value] of Object.entries(tokens.color?.avatar || {})) {
    if (typeof value === 'object') {
      md += `| \`${key}\` | \`${value.bg}\` | \`${value.text}\` |\n`;
    }
  }

  // Common Colors (Semantic)
  if (tokens.color?.common) {
    md += `
### Common Colors (Semantic)

${tableHeader()}${flattenTokensToRows(tokens.color.common, 'common')}`;
  }

  // Alert
  if (tokens.color?.alert) {
    md += `
### Alert

${tableHeader()}${flattenTokensToRows(tokens.color.alert, 'alert')}`;
  }

  // NavBar
  if (tokens.color?.['nav-bar'] || tokens.color?.['nav-bar-item']) {
    md += `
### NavBar

${tableHeader()}`;
    if (tokens.color['nav-bar']) {
      md += flattenTokensToRows(tokens.color['nav-bar'], 'nav-bar');
    }
    if (tokens.color['nav-bar-item']) {
      md += flattenTokensToRows(tokens.color['nav-bar-item'], 'nav-bar-item');
    }
  }

  // Table Row
  if (tokens.color?.['table-row']) {
    md += `
### Table Row

${tableHeader()}${flattenTokensToRows(tokens.color['table-row'], 'table-row')}`;
  }

  // Tooltip
  if (tokens.color?.tooltip) {
    md += `
### Tooltip

${tableHeader()}${flattenTokensToRows(tokens.color.tooltip, 'tooltip')}`;
  }

  // Icon Button
  if (tokens.color?.['icon-button']) {
    md += `
### Icon Button

${tableHeader()}${flattenTokensToRows(tokens.color['icon-button'], 'icon-button')}`;
  }

  // Color Block Button
  if (tokens.color?.['color-block-button']) {
    md += `
### Color Block Button

${tableHeader()}${flattenTokensToRows(tokens.color['color-block-button'], 'color-block-button')}`;
  }

  // Font Weight
  if (tokens['font-weight']) {
    md += `
---

## Font Weight

${tableHeader()}`;
    for (const [key, value] of Object.entries(tokens['font-weight'])) {
      if (typeof value === 'object') {
        md += flattenTokensToRows(value, `font-weight.${key}`, 'font-weight');
      } else {
        md += `| \`font-weight.${key}\` | ${formatValue(value, 'font-weight')} |\n`;
      }
    }
  }

  md += `
---

## Line Height

${tableHeader()}`;

  for (const [key, value] of Object.entries(tokens['line-height'] || {})) {
    md += `| \`${key}\` | ${formatValue(value, 'line-height')} |\n`;
  }

  md += `
---

## Dark Theme Overrides

The dark theme (\`tokens-dark.json\`) contains overrides for colors when using dark mode.
Import \`astroTokensDark\` from \`@pingux/onyx-tokens\` for dark theme values.

---

## Usage

\`\`\`jsx
// Import tokens directly
import { astroTokens } from '@pingux/onyx-tokens';

// Use in sx prop
<Box sx={{ 
  padding: 'md',      // 16px
  color: 'primary',   // #1a73e8
  bg: 'gray.100'      // #f6f8fa
}}>
\`\`\`

\`\`\`jsx
// Access programmatically
const primaryColor = astroTokens.color.primary; // '#1a73e8'
const spacing = astroTokens.spacing.md;         // 16
\`\`\`
`;

  return md;
};

/**
 * Main function to generate and write the documentation
 * @returns {string} Path to the generated file
 * @throws {Error} If token files cannot be read or output cannot be written
 */
export const generateTokenDocs = () => {
  // Use import.meta.dirname (Node 20.11+) or fallback for older versions/test environments
  const __dirname = import.meta.dirname || dirname(new URL(import.meta.url).pathname);

  const buildDir = path.join(__dirname, '../../build');
  const tokensPath = path.join(buildDir, 'astro/tokens.json');
  const outputPath = path.join(buildDir, 'TOKENS.md');

  try {
    // Read the generated token files
    const tokensContent = fs.readFileSync(tokensPath, 'utf8');
    const tokens = JSON.parse(tokensContent);

    // Generate markdown
    const markdown = generateMarkdownDocs(tokens);

    // Write to file
    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`✓ Generated token documentation: ${outputPath}`);

    return outputPath;
  } catch (error) {
    console.error(`✗ Failed to generate token documentation: ${error.message}`);
    throw error;
  }
};

export default generateTokenDocs;
