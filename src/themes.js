// NOTES:
// Use Developer: Inspect Editor Tokens and Scopes to see what things are named

const theme = require('./theme');

// Pre-defined monochrome themes.
const themes = [
  theme({
    // This is the base one that we will build all others from
    name: 'monochromatic-dark',
    background: '#171717',
    // background: '#4c0101', // temp testing background to know system is working
    //background: '#41fb63',
    foreground: '#EBEBEB',
    //foreground: '#EBEBEB',
    
    
    // Notes on amplifier usage:
    //   Negative values work exceedingly well
    //   Positive values work ok, but you will need pretty large numbers to really
    //   see a big difference, at that rate, you are going to be better served
    //   changing your color values directly. - Warbands
    // amplifier: 0.5, 
    // amplifier: 10.0,
    
    override: {
      color: {
        "badge.background": 1,
        "badge.foreground": 0,
        
        "button.background": "#FF0000",
        "activityBar.inactiveForeground":"#02f7a2",
        "support.type.property-name": "#02f7a2"
      },
      tokenColors: [
        // COMMENT
        // CONSTANT
        // ENTITY
        // INVALID
        // KEYWORD
        // MARKUP
        // META
        // NONE
        // PUNCTUATION
        // STORAGE
        // STRING
        // SUPPORT
        // VARIABLE
      ],
    }
  }),
  // theme({
  //   name: 'monochromatic-light',
  //   background: '#EBEBEB',
  //   foreground: '#101010',
  // }),
  // theme({
  //   name: 'monochromatic-dark-subtle',
  //   background: '#0A1219',
  //   foreground: '#F1F5F9',
  // }),
  // theme({
  //   name: 'monochromatic-light-subtle',
  //   background: '#F1F5F9',
  //   foreground: '#0A1219',
  // }),
  // theme({
  //   name: 'monochromatic-dark-amplified',
  //   background: '#000000',
  //   foreground: '#FFFFFF',
  // }),
  // theme({
  //   name: 'monochromatic-light-amplified',
  //   background: '#FFFFFF',
  //   foreground: '#000000',
  // }),
  // theme({
  //   name: 'monochromatic-dark-cool-gray',
  //   background: '#111827',
  //   foreground: '#F9FAFB',
  // }),
  // theme({
  //   name: 'monochromatic-light-cool-gray',
  //   background: '#F9FAFB',
  //   foreground: '#111827',
  // }),
];

module.exports = themes;
