const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const buildDir = path.join(__dirname, '../../build');
const tokensPath = path.join(buildDir, 'astro/tokens.json');
const outputPath = path.join(buildDir, 'TOKENS.md');

// Component color keys that should be excluded from color scales
const COMPONENT_COLOR_KEYS = ['font', 'common', 'button', 'input', 'checkbox', 'avatar', 'alert', 'nav-bar', 'nav-bar-item', 'table-row', 'tooltip', 'icon-button', 'color-block-button'];

describe('tokenDocsGenerator', () => {
  let tokens;
  let generatedContent;

  beforeAll(() => {
    // Ensure build directory exists with tokens
    if (!fs.existsSync(tokensPath)) {
      throw new Error(`Tokens file not found at ${tokensPath}. Run 'npm run build' first.`);
    }

    // Read the actual tokens from the build
    const tokensContent = fs.readFileSync(tokensPath, 'utf8');
    tokens = JSON.parse(tokensContent);

    // Run the generator using node (ESM) - this executes build.js which calls generateTokenDocs
    const projectRoot = path.join(__dirname, '../..');
    execSync('node build.js', { cwd: projectRoot, stdio: 'pipe' });

    // Read the generated output
    generatedContent = fs.readFileSync(outputPath, 'utf8');
  });

  describe('generateTokenDocs', () => {
    it('should create TOKENS.md file', () => {
      expect(fs.existsSync(outputPath)).toBe(true);
    });

    it('should generate markdown with correct structure', () => {
      expect(generatedContent).toContain('# Onyx Design Tokens Reference');
      expect(generatedContent).toContain('## Spacing Tokens');
      expect(generatedContent).toContain('## Font Sizes');
      expect(generatedContent).toContain('## Border Radius');
      expect(generatedContent).toContain('## Size Tokens');
      expect(generatedContent).toContain('## Color Palette');
      expect(generatedContent).toContain('## Font Colors');
      expect(generatedContent).toContain('## Component Tokens');
      expect(generatedContent).toContain('## Line Height');
      expect(generatedContent).toContain('## Dark Theme Overrides');
      expect(generatedContent).toContain('## Usage');
    });

    it('should include auto-generated file notice', () => {
      expect(generatedContent).toContain('**Auto-generated file** - Do not edit manually');
      expect(generatedContent).toContain('Source: `@pingux/onyx-tokens`');
    });
  });

  describe('spacing tokens', () => {
    it('should include all base spacing tokens from the library', () => {
      const baseSpacingTokens = Object.entries(tokens.spacing || {})
        .filter(([, value]) => typeof value !== 'object');

      for (const [token] of baseSpacingTokens) {
        expect(generatedContent).toContain(`| \`${token}\` |`);
      }
    });

    it('should include component spacing section', () => {
      expect(generatedContent).toContain('### Component Spacing');
    });

    it('should format spacing values with px units', () => {
      if (tokens.spacing?.md) {
        expect(generatedContent).toContain(`${tokens.spacing.md}px`);
      }
    });
  });

  describe('font size tokens', () => {
    it('should include all base font size tokens from the library', () => {
      const baseFontSizeTokens = Object.entries(tokens['font-size'] || {})
        .filter(([, value]) => typeof value !== 'object');

      for (const [token] of baseFontSizeTokens) {
        expect(generatedContent).toContain(`| \`${token}\` |`);
      }
    });

    it('should include component font sizes section', () => {
      expect(generatedContent).toContain('### Component Font Sizes');
    });
  });

  describe('color tokens', () => {
    it('should include primary colors from the library', () => {
      expect(generatedContent).toContain('### Primary Colors');
      if (tokens.color?.primary) {
        expect(generatedContent).toContain(`| \`primary\` | \`${tokens.color.primary}\` |`);
      }
    });

    it('should include status colors section', () => {
      expect(generatedContent).toContain('### Status Colors');
    });

    it('should include all color scales from the library', () => {
      const colorScales = Object.entries(tokens.color || {})
        .filter(([key, value]) => 
          typeof value === 'object' && 
          value !== null &&
          !COMPONENT_COLOR_KEYS.includes(key) &&
          (value['100'] || value.base)
        );

      for (const [colorName] of colorScales) {
        const capitalizedName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
        expect(generatedContent).toContain(`### ${capitalizedName} Scale`);
      }
    });

    it('should include font colors section', () => {
      expect(generatedContent).toContain('## Font Colors');
      if (tokens.color?.font?.base) {
        expect(generatedContent).toContain(`| \`font.base\` | \`${tokens.color.font.base}\` |`);
      }
    });
  });

  describe('component tokens', () => {
    it('should include button component tokens', () => {
      expect(generatedContent).toContain('### Button');
    });

    it('should include input component tokens', () => {
      expect(generatedContent).toContain('### Input');
    });

    it('should include checkbox component tokens', () => {
      expect(generatedContent).toContain('### Checkbox');
    });

    it('should include avatar colors with correct table headers', () => {
      expect(generatedContent).toContain('### Avatar Colors');
      expect(generatedContent).toContain('| Token | Background | Text |');
    });
  });

  describe('other tokens', () => {
    it('should include border radius section', () => {
      expect(generatedContent).toContain('## Border Radius');
    });

    it('should include size tokens section', () => {
      expect(generatedContent).toContain('## Size Tokens');
    });

    it('should include line height without px unit', () => {
      expect(generatedContent).toContain('## Line Height');
      if (tokens['line-height']?.base) {
        // Line height should NOT have px suffix - check exact row format
        const expectedLineHeight = `| \`base\` | ${tokens['line-height'].base} |`;
        expect(generatedContent).toContain(expectedLineHeight);
        // Ensure the line height value doesn't have px (check exact cell format)
        expect(generatedContent).not.toContain(`| ${tokens['line-height'].base}px |`);
      }
    });
  });

  describe('usage examples', () => {
    it('should include code examples for importing tokens', () => {
      expect(generatedContent).toContain("import { astroTokens } from '@pingux/onyx-tokens'");
      expect(generatedContent).toContain("padding: 'md'");
      expect(generatedContent).toContain("color: 'primary'");
    });

    it('should include programmatic access examples', () => {
      expect(generatedContent).toContain('astroTokens.color.primary');
      expect(generatedContent).toContain('astroTokens.spacing.md');
    });
  });

  describe('markdown formatting', () => {
    it('should have proper table headers', () => {
      expect(generatedContent).toMatch(/\| Token \| Value \|/);
      expect(generatedContent).toMatch(/\|-------\|-------\|/);
    });

    it('should have horizontal rules between sections', () => {
      expect(generatedContent).toContain('---');
    });
  });
});
