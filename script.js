let buttons = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let resetGame = () => {
  turn0 = true;
  enableBox();
  msgContainer.classList.add("hide");
};

let disableBox = () => {
  for (let box of buttons) {
    box.disabled = true;
  }
};
let enableBox = () => {
  for (let box of buttons) {
    box.disabled = false;
    box.innerText = "";
  }
};

let displayWinner = (winner) => {
  msg.innerText = `congratulation the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern)
    // console.log(pattern[0], pattern[1],pattern[2])
    // console.log(buttons[pattern[0]], buttons[pattern[1]],buttons[pattern[2]])

    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;

    // console.log(val1,val2,val3)

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        // console.log(`congratulation winner ${val1}`)
        displayWinner(val1);
        disableBox();
      }
    }
  }
};

buttons.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

reset.addEventListener("click", resetGame);
