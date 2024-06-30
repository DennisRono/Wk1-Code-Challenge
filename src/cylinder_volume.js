// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

// function to calculate cylinder volume
const cylinderVolume = (r, h) => {
  const pi = 3.142
  // calculate and retrun the volume
  return (pi * Math.pow(r, 2) * h).toFixed(4)
}

console.log(cylinderVolume(3, 5))
