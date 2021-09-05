const fs = require('fs').promises;
const themes = require('./themes');

/**
 * Theme builder.
 *
 * Generates the given theme and puts it's content into the theme file.
 *
 * @param {*} theme Generated theme data.
 */
const builder = (theme) => fs.writeFile(file(theme.name), JSON.stringify(theme));

/**
 * Pipes the defined themes into builder.
 */
const build = () => Promise.all(themes.map(builder));

/**
 * Error handler.
 */
const error = () => process.exit(1);

/**
 * File name utility.
 *
 * @param {*} filename File name.
 */
const file = (filename) => `./theme/${filename}.json`;

// Create the output folder and build the defined themes.
fs.mkdir('./theme', { recursive: true }).then(build).catch(error);
