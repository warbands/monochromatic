const theme = require('./theme');

// Pre-defined monochrome themes.
const themes = [
  theme({
    // This is the base one that we will build all others from
    name: 'monochromatic-dark',
    background: '#141414',
    //background: '#41fb63',
    foreground: '#EBEBEB',
    //foreground: '#EBEBEB',
    //amplifier: 1.5,
    override: {
      color: {
        "badge.background": 1,
        "badge.foreground": 0,
        
        "button.background": "#FF0000",
        "activityBar.inactiveForeground":"#02f7a2",
        "support.type.property-name": "#02f7a2"
      },
      tokenColors: [
      ],
    }
  }),
  theme({
    name: 'monochromatic-light',
    background: '#EBEBEB',
    foreground: '#101010',
  }),
  theme({
    name: 'monochromatic-dark-subtle',
    background: '#0A1219',
    foreground: '#F1F5F9',
  }),
  theme({
    name: 'monochromatic-light-subtle',
    background: '#F1F5F9',
    foreground: '#0A1219',
  }),
  theme({
    name: 'monochromatic-dark-amplified',
    background: '#000000',
    foreground: '#FFFFFF',
  }),
  theme({
    name: 'monochromatic-light-amplified',
    background: '#FFFFFF',
    foreground: '#000000',
  }),
  theme({
    name: 'monochromatic-dark-cool-gray',
    background: '#111827',
    foreground: '#F9FAFB',
  }),
  theme({
    name: 'monochromatic-light-cool-gray',
    background: '#F9FAFB',
    foreground: '#111827',
  }),
];

module.exports = themes;
