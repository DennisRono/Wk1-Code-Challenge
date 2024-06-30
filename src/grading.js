// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

const prompt = require('prompt-sync')({ sigint: true })

// Function to get and validate student marks, then assign a grade
const getStudentGrade = () => {
  let marks

  // Loop until valid marks are provided
  while (true) {
    marks = prompt('Enter student marks (0-100):')

    if (marks === null) {
      console.log('User cancelled the prompt.')
      return
    }

    marks = Number(marks)

    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      break // Exit the loop when valid marks are entered
    } else {
      console.log('Marks should be a number between 0 and 100!')
    }
  }

  let grade

  // Determining the grade based on marks
  if (marks > 79) {
    grade = 'A'
  } else if (marks >= 60) {
    grade = 'B'
  } else if (marks >= 50) {
    grade = 'C'
  } else if (marks >= 40) {
    grade = 'D'
  } else {
    grade = 'E'
  }

  console.log(`The grade for marks ${marks} is: ${grade}`)
}

// Call the function to get and display the student grade
getStudentGrade()
