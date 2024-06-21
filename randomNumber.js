//MATH RANDOM FUNCTIONS 

/**
 * @param {number} min min The minimum value (inclusive).
 * @param {number} max max The maximum value (inclusive).
 * @returns {number} A random integer between the specified range (min to max, min inclusive max exclusive)
 * @throws {RangeError} - If the minimum value is greater then the maximum value. 
 */
function getRandomInt(min, max) {
    if(min > max){
        throw new RangeError("Minimum value cannot be greater than maximum value.")
    }
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


/**
 * @param {number} min min The minimum value (inclusive).
 * @param {number} max max The maximum value (inclusive).
 * @returns {number} A random integer between the specified range (Both inclusive)
 * @throws {RangeError} - If the minimum value is greater then the maximum value. 
 */
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

  //--------

  module.exports = {getRandomInt,getRandomIntInclusive}