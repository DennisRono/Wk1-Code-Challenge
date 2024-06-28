const prompt = require('prompt-sync')({ sigint: true })

const checkSpeed = (speed) => {
  const speedLimit = 70
  const pointsPer5Km = 5
  const maxPoints = 12

  if (speed < speedLimit) {
    console.log('Ok')
  } else {
    const points = Math.floor((speed - speedLimit) / pointsPer5Km)
    if (points > maxPoints) {
      console.log(`Points: ${points} - Your License has been suspended`)
    } else {
      console.log(`Points: ${points}`)
    }
  }
}

const speed = parseInt(prompt('Enter the speed of the car: '))

checkSpeed(speed)
