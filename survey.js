
const readline = require('readline');

const questionsList = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const ans = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function() {
  if (i < 7) {
    rl.question(`${questionsList[i]}\n`, (answer) => {
      ans[i] = answer;
      i++;
      console.log();
      question();
    });
  } else {
    rl.close();
    console.log("Your New Profile:");
    setTimeout(() => console.log(`
    ${ans[0]} likes ${ans[1]}. He/She loves listening to ${ans[2]}. 
    He/She likes eating ${ans[4]} for his/her favorite meal: ${ans[3]}. 
    His/Her all time favorite sport is ${ans[5]}.
    When he/she was asked about his/her superpower, ${ans[0]} replied: ${ans[6]}
  `), 1000);
  }
};

question();
