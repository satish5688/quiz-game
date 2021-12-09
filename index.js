//         A General Knowledge Quiz Game


var readline=require("readline-sync")
score=0

//  Welcome Code

var userName=readline.question("Enter your name ")
console.log("hello ",userName,"\nPlease play this game and improve your knowledge:")

// Use Function & if else

function play(question,answer){
    var Answer=readline.question(question);
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('Right')
        console.log("----------")
        console.log("")
        score+=1
    }else{
        console.log('Wrong')
        console.log("----------")
    }
};

// Array of Objects

var questi = [{
  question: " 1] Who is Rohit sharma ?. \n1. Cricketer  \n2. Rider \n3. Reporter \n4. pilet  \n",
  answer: '1'
}, {
  question: " 2] Which IPL team does Rohit Sharma play for ? \n1. MI  \n2. CSK  \n3. KXIP  \n4. RR\n",
  answer: '1'
}, {
  question: "3] How much tropys won MI ? \n1. 3 \n2. 4  \n3. 5  \n4. 6\n",
  answer: '3'
}, {
  question: "4] Is Rohit Sharma still the part of team India. \n1. No \n2. I don't know \n3. Yes \n4.I don't know who is Dhoni \n ",
  answer: "3"
}];

// Use Loop for call function

for (var i=0;i<questi.length;i++){
    var queslist=questi[i]
    play(queslist.question,queslist.answer)
};

// For Print Output

console.log(userName,"Your final Score is ",score)