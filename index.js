var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.red.bold('Welcome to the quiz everyone!!!! \n'));

console.log(chalk.yellowBright.bold(
'* This quiz app is being made to help you check whether you have Covid symptoms or not!!! \n'));

console.log(chalk.yellowBright.bold(
'* Not all but the major symptoms of covid will be there in the questions which you will have to answer!!! \n'
));

console.log(chalk.yellowBright.bold('* You have to answer in either "yes" or "no" \n'));

var userName = readlineSync.question('What is your name ? ');

console.log('Welcome ' + userName + ' ' + 'to ' + chalk.bgMagenta('Covid-Self-Checker'));;

console.log("----------------------------\n");

var score = 0;

var questions = [{
question: `1. Do you suffer from mild or high fever ?
Ans: `
},
{
question: `2. Do you suffer from dry cough or pain in the chest ?
Ans: `
},
{
question: `3. Do you have lost your taste and smelling sense ?
Ans: `
},
{
question: `4. Do you suffer from breathing problem ?
Ans: `
},
{
question: `5. Do you suffer from Conjunctivitis (also known as red eyes) ?
Ans: `
},
{
question: `6. Do you suffer from Tiredness ?
Ans: `
},
{
question: `7. Do you suffer from Nasal congestion ?
Ans: `
},
{
question: `8. Do you have different types of skin rash ?
Ans: `
},
{
question: `9. Do you suffer from Diarrhoea ?
Ans: `
},
{
question: `10. Do you suffer from Headache ?
Ans: `
}
];

function quiz(question, answer) {

userAnswer = readlineSync.question(question);

if (userAnswer.toLowerCase() == 'yes') {
score++;
console.log('Current score: ', score);
console.log("------------------------");
} else if (userAnswer.toLowerCase() == 'no') {
console.log('Current score: ', score);
console.log("------------------------");
} else {
console.log(chalk.red.bold('Please answer the question again!!! either "yes" or "no" '));
console.log("------------------------");
quiz(currentQuestion.question, currentQuestion.answer);
}
}

for (var i = 0; i < questions.length; i++) { var currentQuestion=questions[i]; quiz(currentQuestion.question,
    currentQuestion.answer); } console.log("Your name: ", userName);
        console.log(" Your final score: ", score);



        if (score == 10 || score >= 3) {
            console.log(chalk.black.bgRed('You are having major symptoms, kindly consult your doctor!!!'));
        } else if (score >= 1 && score <= 2) {
            console.log(chalk.black.bgYellow('You are having mild symptoms, kindly take necessary precautions!!!'));
        } else {
            console.log(chalk.black.bgGreen('You are safe for now!!!'));
        }