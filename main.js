'use strict';

var askRightWrong= function (question,correctAnswer,correctAlert,incorrectAlert,possibleAnswers){
  do{
    var response=prompt(question);
  } while(!possibleAnswers.contains(response));
  if (response===correctAnswer){
    score++;
    return true;
  }else{
    return false;
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



//declares all variables at top of script to ensure scope.
var score=0;


//asks for username and if they return a null reminds the user a valid response is necessary and re prompts.
var userName;
do{
  userName = prompt ('Welcome to my site! What\'s your name?');
} while(!userName);
alert('Hi,'+userName+' Thanks for visiting my webpage! How about I ask you some questions about me?');
console.log('USERNAME: '+userName);

// while the user has not yet answered a question, we continue to remind them they need to respond and re prompt.
// same formula used throughout script, would be more beneficial to create a question asking method that takes in
// each question and response as a parameter and reuses the same framework until no more questions are left. I understand that currently this code is super repetitive

console.log('running skiing question');
var skiing='';
while(skiing.toLowerCase().charAt(0)!=='y' && skiing.toLowerCase().charAt(0)!=='n'){
  skiing = prompt('Do I like to ski?(y/n)');
  if (skiing.toLowerCase().charAt(0)!=='y' && skiing.toLowerCase().charAt(0)!=='n'){
    alert('please answer the question with a y/n response');
  }
}
if(skiing.toLowerCase().charAt(0) ==='y'){
  alert ('Nice job, I love Skiing');
  score++;
}else{
  alert('Actually, I love to ski. I have been riding since I was 3 years old.');
}
console.log(userName+' has answered '+score+' questions correctly.');

console.log('running sushi question');
var sushi='';
while (sushi.toLowerCase().charAt(0)!=='y' && sushi.toLowerCase().charAt(0)!=='n'){
  sushi = prompt('Is sushi my favorite food? (y/n)');
  if (sushi.toLowerCase().charAt(0)!=='y' && sushi.toLowerCase().charAt(0)!=='n'){
    alert('please answer the question with a y/n response');
  }
} if(sushi.toLowerCase().charAt(0) ==='y'){
  alert ('Nice job, I love sushi');
  score++;
}else{
  alert('Actually, I love sushi, if you dont, I\'m sorry.');
}
console.log(userName+' has answered '+score+' questions correctly.');



console.log('running sister question');
var mySister='';
while (mySister.toLowerCase().charAt(0)!=='y' && mySister.toLowerCase().charAt(0)!=='n'){
  mySister= prompt('Do i have a sister?(y/n)');
  if (mySister.toLowerCase().charAt(0)!=='y' && mySister.toLowerCase().charAt(0)!=='n'){
    alert('please answer the question with a y/n response');
  }
} if(mySister.toLowerCase().charAt(0) ==='y'){
  alert ('I dont have a sister, however I do have a younger brother.');
}else{
  alert('You\'re right! I don\'t have a sister.');
  score++;
}
console.log(userName+' has answered '+score+' questions correctly.');



console.log('running cat question');
var dog='';
while (dog.toLowerCase().charAt(0)!=='y' && dog.toLowerCase().charAt(0)!=='n'){
  dog= prompt('Am I a cat person?(y/n)');
  if (dog.toLowerCase().charAt(0)!=='y' && dog.toLowerCase().charAt(0)!=='n'){
    alert('please answer the question with a y/n response');
  }
} if(dog.toLowerCase().charAt(0) ==='y'){
  alert ('I\'m defintely a dog person, i think cats are cool too, though.');
}else{
  alert('This is true, I\'m definitely a dog person.');
  score++;
}
console.log(userName+' has answered '+score+' questions correctly.');



console.log('running color question');
var green='';
while (green.toLowerCase().charAt(0)!=='y' && green.toLowerCase().charAt(0)!=='n'){
  green= prompt('is my favorite color orange?(y/n)');
  if (green.toLowerCase().charAt(0)!=='y' && green.toLowerCase().charAt(0)!=='n'){
    alert('please answer the question with a y/n response');
  }
} if(green.toLowerCase().charAt(0) ==='y'){
  alert ('I like oranges, but orangisnt my favorite color.');
}else{
  alert('You\'re right! my favorite color is green.');
  score++;
}
console.log(userName+' has answered '+score+' questions correctly.');



console.log('playing randomNumber game');
var guessAttempts=0;
var numGuess;
var newRandomNumber = getRandomInt(0,10);


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
  }else if (numGuess<newRandomNumber){
    alert('higher.');
  }else if(numGuess>newRandomNumber){
    alert('lower.');
  }
}


alert('you have answered '+score+' questions correctly, ');





