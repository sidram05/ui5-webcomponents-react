const { writeFileSync } = require('fs');
const {
  root: ThemingParameters
} = require('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/variables.json');
const PATHS = require('../config/paths');
const path = require('path');
const prettier = require('prettier');
const prettierConfig = require('../prettier.config');

let fileContent = `/* eslint-disable camelcase */

/* 
 * ### WARNING ### 
 * This is an autogenerated file, do not change manually. 
 * In order to recreate this file, please run 'node scripts/generate-theming-parameters.js'
 */

`;

fileContent += 'export const ThemingParameters = {\n';
for (const variable in ThemingParameters) {
  fileContent += `  '${variable}': 'var(--${variable})',\n`;
}
fileContent += '}\n';

writeFileSync(
  path.join(PATHS.packages, 'base', 'src', 'styling', 'ThemingParameters.ts'),
  prettier.format(fileContent, { ...prettierConfig, parser: 'typescript' })
);
