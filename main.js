// 'use strict';




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var score=0;
var askRightWrong= function (question){
  var query = question [0]
  var correctAnswer = question [1]
  var correctAlert = question [2]
  var incorrectAlert = question [3]
  var possibleAnswers = question [4]

  do{
    var response=prompt(query);
  } while(!possibleAnswers.includes(response.charAt(0).toLowerCase()));
  if (response.charAt(0).toLowerCase() === correctAnswer){
    score++;
    alert(correctAlert);
    console.log('User answered correctly.');
  }else{
    alert(incorrectAlert);
    console.log('User answered incorrectly.');
  }
};


var skiingQuestion = ['Do I like to ski?(y/n)', 'y', 'Nice job, I love Skiing', 'Actually, I love to ski. I have been riding since I was 3 years old.',['y', 'n']]
var sushiQuestion = ['Is sushi my favorite food? (y/n)', 'y', 'Nice job, I love sushi', 'Actually, I love sushi, if you dont, I\'m sorry.',['y', 'n']]
var brotherQuestion = ['Do i have a sister?(y/n)', 'n', 'You\'re right! I don\'t have a sister.', 'I dont have a sister, however I do have a younger brother.',['y', 'n']]
var catQuestion = ['Am I a cat person?(y/n)', 'n', 'This is true, I\'m definitely a dog person.', 'I\'m defintely a dog person, i think cats are cool too, though.',['y', 'n']]
var colorQuestion = ['is my favorite color orange?(y/n)', 'n', 'You\'re right! my favorite color is green.', 'I like oranges, but orangisnt my favorite color.',['y', 'n']]

askRightWrong(skiingQuestion);
askRightWrong(sushiQuestion);
askRightWrong(brotherQuestion);
askRightWrong(catQuestion);
askRightWrong(colorQuestion);
// //declares all variables at top of script to ensure scope.

// var countriesVisited = ["canada", "mexico", "france", "germany"]
// var countryGuess;
// while(!countryGuess){
//   countryGuess = prompt('What is a country I have visited?');
// }
// if(countriesVisited.includes(countryGuess.toLowerCase())){
//   alert('Yes, I have visited ' + countryGuess + '.');
//   score++;
// } else{
// alert('No I haven\'t visited ' + countryGuess + '.')
// }


// //asks for username and if they return a null reminds the user a valid response is necessary and re prompts.
// var userName;
// do{
//   userName = prompt ('Welcome to my site! What\'s your name?');
// } while(!userName);
// alert('Hi,'+userName+' Thanks for visiting my webpage! How about I ask you some questions about me?');
// console.log('USERNAME: '+userName);

// //while the user has not yet answered a question, we continue to remind them they need to respond and re prompt.
// //same formula used throughout script, would be more beneficial to create a question asking method that takes in
// //each question and response as a parameter and reuses the same framework until no more questions are left. I understand that currently this code is super repetitive



// console.log('playing randomNumber game');
// var guessAttempts=0;
// var numGuess;
// var newRandomNumber = getRandomInt(0,10);


// console.log('the random randomNumber is: '+newRandomNumber);
// while (guessAttempts<5 && numGuess!== newRandomNumber){
//   console.log('the random number is: '+newRandomNumber);
//   numGuess=parseInt(prompt('Guess a randomNumber between 1 and 10'));
//   guessAttempts++;
//   console.log(numGuess+' was '+userName+'s guess randomNumber '+guessAttempts);
//   if (newRandomNumber===numGuess){
//     alert('You guessed correctly in '+guessAttempts+' tries. Congratulations!');
//     console.log(userName+'guessed correctly.');
//   }else if (guessAttempts===4){
//     alert('you didnt guess correctly, the correct answer was '+newRandomNumber);
//   }else if (numGuess<newRandomNumber){
//     alert('higher.');
//   }else if(numGuess>newRandomNumber){
//     alert('lower.');
//   }
// }

// alert('you have answered '+score+' questions correctly, ');