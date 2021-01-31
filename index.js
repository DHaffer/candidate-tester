const input = require('readline-sync')
const candidateName = input.question("What is your name?")

const questions = ["True or false: 5000 meters = 5 kilometers", "(5 + 3)/2*10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?]", "Who was the first American woman in space?", "What is the minimum crew size for the International Space Station (ISS)?"];
const correctAnswers = ["True", "40", "Trajectory", "Sally Ride", "3"]

let userAnswers = [];
let correctAnswerNum = 0;

for (let i = 0; i < questions.length; i++) {
  let userQuestions = input.question(questions[i]);
  userAnswers.push(userQuestions);
   if (userAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    correctAnswerNum++;
 }
}

const percentage = (correctAnswerNum)/(questions.length) * 100;

let status = '';

if (percentage >= 80) {
  status = "PASSED";
} else {
  status = "FAILED"
}

const resultsOutput = `
Candidate Name: ${candidateName}
1) True or false: 5000 meters = 5 kilometers.
Your Answer: ${userAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) (5 + 3)/2 * 10 = ?
Your Answer: ${userAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${userAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) Who was the first American woman in space?
Your Answer: ${userAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) What is the minimum crew size for the International Space Station (ISS)?
Your Answer: ${userAnswers[4]}
Correct Answer: ${correctAnswers[4]}

>>> Overall Grade: ${percentage}% (${correctAnswerNum} of ${questions.length} responses correct) <<<
>>> Status: ${status} <<<
`;

console.log(resultsOutput)
