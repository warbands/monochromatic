const merge = require('lodash.merge');
const chroma = require('chroma-js');
const transform = require('./transform');
const base = require('./base');
const exceptions = require('./exceptions');

/**
 * Generates a monochrome color scheme.
 *
 * @param background Background color of the theme.
 * @param foreground Foreground color of the theme.
 * @param override Overrides for default scheme values.
 * @param amplifier Overall transparency multiplier.
 * @return {*} Created color scheme.
 */
const scheme = ({ background, foreground, override, amplifier }) => {
  // Construct the base values.
  const draft = Object.assign(
    {
      background: background,
      foreground: foreground,
    },
    base()
  );

  // Merge with the generated warning scheme;
  merge(draft, warningScheme(foreground));

  // Apply overrides.
  if (override != null) merge(draft, override);

  // Amplify the transparency multipliers.
  if (amplifier != 1) transform(draft, test, (_, value) => amplify(value, amplifier));

  // Apply color transformation.
  transform(draft, test, (key, value) => colorize(key, value, background, foreground));

  // Return the generated scheme.
  return draft;
};

/**
 * Defines a test for the transform functions.
 *
 * Any value that satisfies the test will be processed.
 *
 * @param {*} key Discarded key.
 * @param {*} value Value.
 */
const test = (key, value) => typeof value === 'number';

/**
 * Modifies the transparency value by the given factor.
 *
 * @param {*} t Transparency value.
 * @param {*} a Amplifier value.
 */
const amplify = (transparency, amplifier) => Math.min(Math.max(0, transparency * amplifier), 1);

/**
 * Colorization transformation.
 *
 * Determinates the color generation strategy and applies it.
 *
 * @param {*} key Key.
 * @param {*} value Value.
 * @param {*} background Background color.
 * @param {*} foreground Foreground color.
 * @returns RRGGBBAA | RRGGBB color in the hex format.
 */
const colorize = (key, value, background, foreground) => colorant(key).call(this, background, foreground, value).hex();

/**
 * Determinates the color generation strategy by looking into exceptions list.
 *
 * @param {*} key Key of the property to be checked.
 */
const colorant = (key) => (exceptions.some((e) => e === key) ? RGBA : RGB);

/**
 * RRGGBBAA Color generation strategy.
 *
 * @param {*} background Discarded background color.
 * @param {*} foreground Foreground color.
 * @param {*} value Transparency value.
 * @returns RRGGBBAA color.
 */
const RGBA = (background, foreground, value) => chroma(foreground).alpha(value);

/**
 * RRGGBB Color generation strategy.
 *
 * @param {*} background Background color.
 * @param {*} foreground Foreground color.
 * @param {*} value Blend value.
 * @returns RRGGBB color.
 */
const RGB = (background, foreground, value) => chroma.scale([background, foreground])(value);

/**
 * Defines the warning colors.
 *
 * @param {*} color The primary color to calculate the warning colors.
 * @return {*} Warning theme data.
 */
const warningScheme = (color) => {
  // Calculate the error color.
  const error = chroma.scale([color, 'red']).mode('lab')(0.75).hex();

  // Calculate the warning color.
  const warning = chroma.scale([color, 'orange']).mode('lab')(0.75).hex();

  return {
    colors: {
      'listFilterWidget.noMatchesOutline': error,
      'list.errorForeground': error,
      'list.warningForeground': warning,
    },
  };
};

module.exports = scheme;
