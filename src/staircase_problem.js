/**
 *
 * Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character
 * e.g steps(2)  #
 *              ##
 *    steps(3)  #
 *              ##
 *             ###
 */

// function to print the staircase with # based on number
const staircase = (value) => {
  for (let i = 1; i < value; i++) {
    const stair = '#'.repeat(i) // repeats the # based in i value in the loop
    console.log(stair)
  }
}

staircase(100)
