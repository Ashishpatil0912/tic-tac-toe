console.log("Welcome to Tic Tac Toe");
let winImg = document.querySelector("img");
let music = new Audio("click.wav");
let audioTurn = new Audio("click.wav");
let gameover = new Audio("laugh.wav");
let turn = "x";
let isgameover = false;



const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};

// find winner

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let wins = [
    [0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
  ];
	
  wins.forEach((e) => {
    if (
      (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isgameover = true;
			winImg.style.display = "block";
    }
  });
};


// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName(
          "info"
        )[0].innerText = turn;
          // "Turn for  " + turn;
      }
    }
  });
});

// fine till.....


//reset games
document.querySelector("#reset").addEventListener("click",()=>{
  let boxtext = document.querySelectorAll(".boxtext");
	Array.from(boxtext).forEach((e) => {
    e.innerText = " ";
  });
	winImg.style.display = "none";
});