import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import StyleDictionary from 'style-dictionary';
import designTokensFormatter from './src/formats/designTokensFormatter.js';
import astroThemeFormatter from './src/formats/astroThemeFormatter.js';
import generateTokenDocs from './src/formats/tokenDocsGenerator.js';

const pxTransform = {
    name: 'size/px',
    type: 'value',
    filter: function (token) {
        // Match tokens where the value is a number
        return typeof token.value === 'number' && token.path[0] !== 'line-height';
    },
    transform: function (token) {
        return `${token.value}px`;
    }
};

const sd = new StyleDictionary('config.json');
sd.registerTransform(pxTransform);

sd.registerFormat({
    name: 'design-tokens',
    format: designTokensFormatter
});

sd.registerFormat({
    name: 'astro-theme',
    format: astroThemeFormatter
});

await sd.buildAllPlatforms();

const sdDark = new StyleDictionary('config-dark.json');
sdDark.registerTransform(pxTransform);

sdDark.registerFormat({
    name: 'design-tokens',
    format: designTokensFormatter
});

sdDark.registerFormat({
    name: 'astro-theme',
    format: astroThemeFormatter
});

await sdDark.buildAllPlatforms();

const buildIndexFile = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const buildDirPath = path.join(__dirname, 'build');
    const astroDirPath = path.join(buildDirPath, 'astro');
    const scssDirPath = path.join(buildDirPath, 'scss');
    const indexFilePath = path.join(buildDirPath, 'index.ts');

    // Helper function to convert file paths to camel case
    const toCamelCase = (str) => {
        return str
            .replace(/[-_/](.)/g, (_, char) => char.toUpperCase()) // Convert -/_ to uppercase
            .replace(/^[a-z]/, (char) => char.toLowerCase()); // Ensure the first character is lowercase
    };

    // Read all files in the astro and scss directories
    const astroFiles = fs.readdirSync(astroDirPath).filter((file) => file.endsWith('.json'));
    const scssFiles = fs.readdirSync(scssDirPath).filter((file) => file.endsWith('.scss'));

    // Generate import and export statements for JSON files
    const jsonImports = astroFiles.map((file) => {
        const varName = toCamelCase(`astro/${file.replace('.json', '')}`);
        return `import * as ${varName} from './astro/${file}';`;
    });

    const jsonExports = astroFiles.map((file) => {
        return toCamelCase(`astro/${file.replace('.json', '')}`);
    });

    // Generate import statements for SCSS files
    const scssImports = scssFiles.map((file) => {
        const varName = toCamelCase(`scss/${file.replace('.scss', '')}`);
        return `import './scss/${file}'; // ${varName}`;
    });

    // Combine all imports and exports
    const content = `${jsonImports.join('\n')}\n${scssImports.join('\n')}\n\nexport { ${jsonExports.join(', ')} };`;

    // Write the generated content to index.ts
    fs.writeFileSync(indexFilePath, content, 'utf8');
    console.log(`Successfully built ${indexFilePath}`);
};

buildIndexFile();

// Generate token documentation
generateTokenDocs();