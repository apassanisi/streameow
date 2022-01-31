const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.tsx"
  ],
  "addons": [
    '@storybook/preset-scss',
    "@storybook/addon-links/register",
    "@storybook/addon-essentials",
    '@storybook/addon-controls',
    'storybook-dark-mode',
  ],
}
