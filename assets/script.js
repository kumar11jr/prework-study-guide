var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics that we learned in prework:");
listTopics();
console.log("Which topic should we study first");
selectTopic();

var header = document.getElementById("top");
var card = document.getElementById("card");
var foot = document.getElementById("foot");
var display = 0;
const Dark = () =>{
  if (display==0) {
    ModeD();
  }else{
   ModeL();
  }
  
}

const ModeD = () =>{
  document.body.style.backgroundColor = "black";
  header.style.backgroundColor="black";
  header.style.color = "white";
  card.style.color = "white";
  foot.style.backgroundColor = "black";
  foot.style.color = "white";
  ++display;
 
}

const ModeL= ()=>{
  document.body.style.backgroundColor = "white";
  header.style.backgroundColor="rgb(86, 86, 184)";
  header.style.color = "white";
  card.style.color = "black";
  foot.style.backgroundColor = "rgb(86, 86, 184)";
  foot.style.color = "white";
  --display;
  
}

