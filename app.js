//jo buttons ko id di h wo colors k naam hi hn unke...id hmne button k colors ko access krne k liye hi di h

let gameSeq = [];
let userSeq = [];
let HighScore = 0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);

  gameFlash(randBtn);
  console.log(gameSeq);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level - 1 > HighScore) {
      HighScore = level - 1;
    }
    h2.innerHTML = `Game Over!Your score was ${level-1} <br>Press any key to start.<br>Highest score: ${HighScore}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnPress() {
  let btn = this;
  gameFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1); //jo index pr user n button press kia h us index pr hi toh hum compare krenge na sequence m...toh user k index ko pass kia h check krne k liye.
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

