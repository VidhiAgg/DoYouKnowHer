//Do u know me--> Play
var readlineSync = require('readline-sync');
var roundOne = [
  {
    ques: "Where She leave? ",
    ans: "Saharanpur"
  },
  {
    ques: "Where She Work? (DXC/TCS/CSC)",
    ans: "DXC"
  },
  {
    ques: "Where is her birthday? (Format DD/MM) ",
    ans: "24/09"
  },
  {
    ques: "Her favroite food ? ",
    ans: "Dosa"
  },
  {
    ques: "How many siblings she have ?(2/3/1) ",
    ans: "2"
  },
  {
    ques: "Her favroite hairstyle? (Curls/Straight/Both) ",
    ans: "Both"
  },
  {
    ques: "Her favroite ice-cream? (Choclate-Cone/ButterScotch-Cone)",
    ans: "Choclate-Cone"
  },
  {
    ques: "What is her home name? ",
    ans: "Gudiya"
  },
  {
    ques: "One thing she can't control? ",
    ans: "Anger"
  },
]
var name = readlineSync.question("What is your Name ? ");
console.log("Hi " + name + "!" + " Welcome to the 'Do you know her'");
var answer = readlineSync.question("Do you know Vidhi Aggarwal ? ");
if (answer == "Y" || answer == "Yes" || answer == "yes" || answer == "y") {
  var score = 0;
  for (let i = 0; i < roundOne.length; i++) {
    console.log("Question " + (i + 1));
    var answer = readlineSync.question(roundOne[i].ques);
    if (answer == roundOne[i].ans) {
      score++;
    }
    console.log("---------------------");


  }

  if (score == 9) {
    console.log("Yay!! You Scored: " + score);
    console.log("Congratulations!! You are invited to her birthday.");

    console.log("Don't forget to send me screenshot!!");

  }
  else if (score == 8) {
    console.log("Hurrah!! You Scored: " + score);
    console.log("Oops!! You missed by one. Bring her one extra gift.");
    console.log("Don't forget to send me screenshot!!");

  } else {
    console.log("You Scored: " + score);
    console.log("Oops!! You don't know her.You are not invited to her birthday party.");

  }
  console.log("----------END-----------");


} else {
  console.log("Sorry. This game is not for you :-)");
  console.log("----------END-----------");
}
