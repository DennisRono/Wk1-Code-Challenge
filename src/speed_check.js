// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

const prompt = require('prompt-sync')({ sigint: true })

// Function to check the speed of the car and calculate demerit points
const checkSpeed = (speed) => {
  const speedLimit = 70 // Define the speed limit
  const pointsPer5Km = 5 // Points assigned for every 5km/h above the speed limit
  const maxPoints = 12 // Maximum points before license suspension

  if (speed < speedLimit) {
    console.log('Ok')
  } else {
    // Calculate points for exceeding the speed limit
    const points = Math.floor((speed - speedLimit) / pointsPer5Km)
    if (points > maxPoints) {
      console.log(`Points: ${points} - Your License has been suspended`)
    } else {
      console.log(`Points: ${points}`)
    }
  }
}

// Prompt the user to enter the speed of the car
const speed = parseInt(prompt('Enter the speed of the car: '))
checkSpeed(speed)
