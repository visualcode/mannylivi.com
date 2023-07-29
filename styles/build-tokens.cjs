const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');
const { getTailwindFormat } = require('sd-tailwindcss-transformer');

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary, {
  expand: {
    composition: true,
    typography: true,
    border: true,
    shadow: false,
  },
  excludeParentKeys: true,
});

// example value transform, which just returns the token as is
StyleDictionary.registerTransform({
  type: 'value',
  name: 'myCustomTransform',
  matcher: (token) => {},
  transformer: (token) => {
    return token; // <-- transform as needed
  },
});

// format helpers from style-dictionary
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// example css format
StyleDictionary.registerFormat({
  name: 'myCustomFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return `${fileHeader({ file })}:root {
${formattedVariables({ format: 'css', dictionary, outputReferences })}
}`;
  },
});

const sd = StyleDictionary.extend({
  source: ['**/*.json'],
  format: {
    tailwindFormat: ({ dictionary }) => {
      return getTailwindFormat({
        dictionary,
        type: 'all',
      });
    },
  },
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: 'sd',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
    tailwind: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/web/',
      files: [
        {
          destination: 'tailwind.config.js',
          format: 'tailwindFormat',
        },
      ],
    },
  },    
});
sd.cleanAllPlatforms(); // optionally, cleanup files first..
sd.buildAllPlatforms();