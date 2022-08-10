var readlineSync = require('readline-sync');

score = 0;
var userNAme = readlineSync.question('what is your good name? ')
var userAns = readlineSync.question('welcome! ' + userNAme + ' do you want to play quiz on capitals of country? ')
console.log('------')
if (userAns === 'yes') {
    function play(question, answer) {
        var userAnswer = readlineSync.question(question)
        if (userAnswer.toUpperCase() === answer.toUpperCase()) {
            console.log('you entered: ' +  userAnswer);
            console.log('congrats! you are right')
            score = score + 1;
            console.log('your score is ' + score);
            console.log('-----')
        } else {
            console.log('you entered: ' + userAnswer);
            console.log('oops! you are wrong')
            score = score - 1;
            console.log('your score is ' + score);
        }
    }
    var ques = [{
        question: 'what is the capital of India? ',
        answer: 'New Delhi'
    },
    {
        question: 'what is the capital of united state of america? ',
        answer: 'Washington DC'
    },
    {
        question: 'what is the capital of China? ',
        answer: 'Beijing'
    },
    {
        question: 'what is the capital of Russia? ',
        answer: 'Moscow'
    },
    {
        question: 'what is the capital of Japan? ',
        answer: 'Tokyo'
    },
    {
        question: 'what is the capital of Spain? ',
        answer: 'Madrid'
    },
    {
        question: 'waht is ths capital of Germany?',
        answer: 'Berlin'
    },
    {
        question: 'waht is ths capital of United Kingdom?',
        answer: 'London'
    }
        , {
        question: 'waht is ths capital of France?',
        answer: 'Paris'
    },
    {
        question: 'waht is ths capital of Australia?',
        answer: 'Canberra'
    }]
    for (i = 0; i < ques.length; i++) {
        var currentQuestion = ques[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
} else {
    console.log('ok! thanks for your time')
}
console.log('your final score is ' + score)