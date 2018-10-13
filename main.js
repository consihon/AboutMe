
'use strict';

//this function takes in mulitple arrays containing the questions, right answers, responses, and possible responses for each question,
// then iterates through taking the nth element from each array to prompt the user and ask each question, asks all questions using
// only 1 function call.(31 lines) it totally runs. check it out!
var askQuestionClassDefinedStretch=function(questions,rightAnswers,responses,possibleResponses){
  for (var i=0; i<questions.length;i++){
    do{
      var answer=prompt(questions[i]);
    }while (!possibleResponses[i].includes(answer));
    answer=answer.toLowerCase().charAt(0);
    if (answer===rightAnswers[i]){
      console.log('correct response '+score);
      alert(responses[i][0]);
      //score++;
    }else{
      alert(responses[i][1]);
    }
  }
};

var questions=[
  'Do I like to ski?(y/n)',
  'Is sushi my favorite food? (y/n)',
  'Do i have a sister?(y/n)',
  'Am I a cat person?(y/n)',
  'is my favorite color orange?(y/n)'];
var rightAnswers=['y','y','n','n','n'];
var responses=[
  ['Nice job, I love Skiing', 'Actually, I love to ski. I have been riding since I was 3 years old.'],
  ['Nice job, I love sushi', 'Actually, I love sushi, if you dont, I\'m sorry.'],
  ['You\'re right! I don\'t have a sister.', 'I dont have a sister, however I do have a younger brother.'],
  ['This is true, I\'m definitely a dog person.', 'I\'m defintely a dog person, i think cats are cool too, though.'],
  ['You\'re right! my favorite color is green.', 'I like oranges, but orangisnt my favorite color.']
];
var possibleResponses=[['y','n'],['y','n'],['y','n'],['y','n'],['y','n']];


//global variables
var score=0;
var userName;

//this function was obtained from the MDN docs and is used to roll a random integer between including the min but excluding the max number that it is passed
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//this function will obtain the users name, does not accept a blank response, however will accept any non null.
var getName=new function(){
  var userName;
  do{
    userName = prompt ('Welcome to my site! What\'s your name?');
  } while(!userName);
  alert('Hi,'+userName+' Thanks for visiting my webpage! How about I ask you some questions about me?');
  console.log('USERNAME: '+userName);
  return userName;
};

//this function is passed an array that defines a singular question, containing the question, correct answer,
// possible alerts for right and wrong answers, as well as the possible accepted answers, it then uses this information to prompt
// the user their question and detect whether they have answered correctly (24 lines)

//personally i think that this is more readable code than setting it up how the class defined stretch was set up because when reading the code we can clearly see each
// part of each question and add or remove questions from our survey easier since we call the function for each question. feels more like a usable question asking
//tool than creating a function that asks our 5 predefined questions.

var skiingQuestion = ['Do I like to ski?(y/n)', 'y', 'Nice job, I love Skiing', 'Actually, I love to ski. I have been riding since I was 3 years old.',['y', 'n']];
var sushiQuestion = ['Is sushi my favorite food? (y/n)', 'y', 'Nice job, I love sushi', 'Actually, I love sushi, if you dont, I\'m sorry.',['y', 'n']];
var brotherQuestion = ['Do i have a sister?(y/n)', 'n', 'You\'re right! I don\'t have a sister.', 'I dont have a sister, however I do have a younger brother.',['y', 'n']];
var catQuestion = ['Am I a cat person?(y/n)', 'n', 'This is true, I\'m definitely a dog person.', 'I\'m defintely a dog person, i think cats are cool too, though.',['y', 'n']];
var colorQuestion = ['is my favorite color orange?(y/n)', 'n', 'You\'re right! my favorite color is green.', 'I like oranges, but orangisnt my favorite color.', ['y', 'n']];

var askRightWrong= function (question){
  do{
    var response=prompt(question[0]);
  } while(!question[4].includes(response.charAt(0).toLowerCase()));
  if (response.charAt(0).toLowerCase() === question[1]){
    score++;
    alert(question[2]);
    console.log('User answered correctly.');
  }else{
    alert(question[3]);
    console.log('User answered incorrectly.');
  }
};

//this is my question with multiple right answers. it is simply encapsulated in a function and i
//have done no work to strectch this into a function that accepts the info for a multiple correct answer question.
var countriesIVisited = new function(){
  var countriesVisited = ['canada', 'mexico', 'france', 'germany'];
  var countryGuess;
  while(!countryGuess){
    countryGuess = prompt('What is a country I have visited?');
  }
  if(countriesVisited.includes(countryGuess.toLowerCase())){
    alert('Yes, I have visited ' + countryGuess + '.');
    score++;
  } else{
    alert('No I haven\'t visited ' + countryGuess + '.');
  }
};

//this function makes the user play a guessing game where the user tries to guess a random number and the program
//tells the user whether the number is higher or lower, wasnt sure if adding functionality to let user define the
//scope of the guessing game and number of guesses would be allowed so i didnt.
var numberGame = new function (){
  console.log('playing randomNumber game');
  var guessAttempts=0;
  var numGuess;
  var newRandomNumber = getRandomInt(1,10);

  console.log('the random randomNumber is: '+newRandomNumber);
  while (guessAttempts<5 && numGuess!== newRandomNumber){
    console.log('the random number is: '+newRandomNumber);
    numGuess=parseInt(prompt('Guess a randomNumber between 1 and 10'));
    guessAttempts++;
    console.log(numGuess+' was '+userName+'s guess randomNumber '+guessAttempts);
    if (newRandomNumber===numGuess){
      alert('You guessed correctly in '+guessAttempts+' tries. Congratulations!');
      console.log(userName+'guessed correctly.');
    }else if (guessAttempts===4){
      alert('you didnt guess correctly, the correct answer was '+newRandomNumber);
      break;
    }else if (numGuess<newRandomNumber){
      alert('higher.');
    }else if(numGuess>newRandomNumber){
      alert('lower.');
    }
  }
};

//call functions
//userName=getName();
askQuestionClassDefinedStretch(questions,rightAnswers,responses,possibleResponses);

// askRightWrong(skiingQuestion);
// askRightWrong(sushiQuestion);
// askRightWrong(brotherQuestion);
// askRightWrong(catQuestion);
// askRightWrong(colorQuestion);
//countriesIVisited();
//numberGame();
//alert('you have answered '+score+' questions correctly.');



