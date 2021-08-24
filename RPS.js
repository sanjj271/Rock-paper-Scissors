let userScore=0;
let compScore = 0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const soreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p ");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getCompchoice() {
  const choices=['r','p','s'];
  const randomnumber= Math.floor(Math.random()*3);
  return choices[randomnumber];
}
function converttoword(letter) {
  if(letter=="r")return "Rock";
  if(letter=="p")return "Paper";
  return "Scissor";

}
function win(userChoice,computerchoice) {
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoice_div=document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  result_p.innerHTML=`${converttoword(userChoice)}${smalluserword} beats ${converttoword(computerchoice)}${smallcompword} . You WIN! 🔥`;
  userchoice_div.classList.add('green-glow');
  setTimeout(function () {userchoice_div.classList.remove('green-glow') },500);

}

function lose(userChoice,computerchoice) {
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoice_div=document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  result_p.innerHTML=`${converttoword(userChoice)}${smalluserword} loses to ${converttoword(computerchoice)}${smallcompword} . You LOST! 😕`;
  userchoice_div.classList.add('red-glow');
  setTimeout(function () {userchoice_div.classList.remove('red-glow') },500);

}
function draw(userChoice,computerchoice) {
  const smalluserword = "user".fontsize(3).sub();
  const smallcompword = "comp".fontsize(3).sub();
  const userchoice_div=document.getElementById(userChoice);
  result_p.innerHTML=`${converttoword(userChoice)}${smalluserword} equals ${converttoword(computerchoice)}${smallcompword} . Its a DRAW! 👏🏻 `;
  userchoice_div.classList.add('grey-glow');
  setTimeout(function () {userchoice_div.classList.remove('grey-glow') },500);

}
function game(userChoice) {
  const computerchoice = getCompchoice();
  switch(userChoice+computerchoice){
    case "rs":
    case "pr":
    case "sp":
       win(userChoice,computerchoice);
       break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerchoice);
      break;
    case "rr":
    case "pp":
    case "ss":
       draw(userChoice,computerchoice);
       break;
  }
}

function main() {
rock_div.addEventListener('click',function() {
  game("r");


})
paper_div.addEventListener('click',function() {
  game("p");


})
scissors_div.addEventListener('click',function() {
  game("s");


})
}
main();

