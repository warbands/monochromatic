const pSBC = require("./pSBC");

/**
 * Deep object transformer.
 *
 * @param {*} object The object that the transformation function will be applied.
 * @param {*} test The test function for the property, takes key and value.
 * @param {*} transfunc The transformation function to be applied.
 * @return {*} Transform applied object.
 */
const transform = function (object, test, transfunc, amplifier) {
  // Handle if amplifier was never set as part of the theme
  if (amplifier == null) {
    amplifier = 1;
  }
  // Debug
  // console.log("Transform Function");
  // console.log("Amplifier: " + amplifier);
  var modifiedAmplifier = amplifier;
  for (var key in object) {
    if (object[key] !== null && typeof object[key] === 'object') {
      // Debug
      // console.log("\test\tInner Key " + key);
      object[key] = transform(object[key], test, transfunc, amplifier);
      continue;
    }

    if (typeof test === 'function' && !test.call(this, key, object[key])) continue;
      // Apply pSBC transformation if this is a hex color
      if (/^#?([0-9A-F]{3}){1,2}$/i.test(object[key])) {
        // Debug
        // console.log("\tKey: " + key);
        // console.log("\tValue: " + object[key]);
        // console.log("\t\tThis is a color: " + object[key]);
        // console.log("\t\tIncoming amplifier: " + amplifier);
        // handle converting amplifier to how pSBC wants it
        // console.log("\t\tMath Sign Value: " + Math.sign(amplifier));
        if (Math.sign(amplifier) == 1 && amplifier < 1) {
          modifiedAmplifier = amplifier * -1;
          // console.log("\t\t\tNew Negative Amplifier: " + modifiedAmplifier);
        }
        else if (amplifier > 1){
          modifiedAmplifier = amplifier * .01;
          // console.log("\t\t\tNew Positive Amplifier: " + modifiedAmplifier);
        }
        if (amplifier != 1) {
          // console.log("\t\t\tpSBCAmplifier: " + modifiedAmplifier);
          // console.log("\t\t\t\tOriginal Color: " + object[key]);
          object[key] = pSBC(modifiedAmplifier, object[key]);
          // console.log("\t\t\t\tModified Color: " + object[key]);
        }
      }
      else {
        object[key] = transfunc.apply(this, [key, object[key]]) || object[key];
      }
  }
  return object;
};

module.exports = transform;
