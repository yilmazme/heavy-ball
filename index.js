let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let div6 = document.querySelector("#div6");
let div7 = document.querySelector("#div7");
let div8 = document.querySelector("#div8");
let div9 = document.querySelector("#div9");
let side1 = document.querySelector("#side1");
let side2 = document.querySelector("#side2");
let warningText = document.querySelector("#warning-text");
let seeCount = document.querySelector("#count");
let guessDiv = document.querySelector("#guess");
let changeText = document.querySelector("#change-text");

function heavySide1() {
  if (side1.childElementCount) {
    for (var i = 0; i < side1.childElementCount; i++) {
      var text = [side1.childNodes[i].className];
      if (text.includes("heavy")) {
        return true;
      } else {
        null;
      }
    }
  }
}
function heavySide2() {
  if (side2.childElementCount) {
    for (var i = 0; i < side2.childElementCount; i++) {
      var text = [side2.childNodes[i].className];
      if (text.includes("heavy")) {
        return true;
      } else {
        null;
      }
    }
  }
}

var random;
window.addEventListener("load", () => {
  random = Math.ceil(Math.random() * 9);
  div1.className = random == 1 ? "heavy" : "";
  div2.className = random == 2 ? "heavy" : "";
  div3.className = random == 3 ? "heavy" : "";
  div4.className = random == 4 ? "heavy" : "";
  div5.className = random == 5 ? "heavy" : "";
  div6.className = random == 6 ? "heavy" : "";
  div7.className = random == 7 ? "heavy" : "";
  div8.className = random == 8 ? "heavy" : "";
  div9.className = random == 9 ? "heavy" : "";
  console.log(random);
});

function reset() {
  location.reload();
}
var count = 0;
function measureFun() {
  const numberChild1 = side1.childElementCount;
  const numberChild2 = side2.childElementCount;

  if (numberChild1 > numberChild2) {
    side1.style.transform = "translate(0px, 25px)";
    side2.style.transform = "translate(0px, -25px)";
    side1.style.transitionDuration = "600ms";
    side1.style.transitionTimingFunction = "ease-out";
    side2.style.transitionDuration = "600ms";
    side2.style.transitionTimingFunction = "ease-out";
  } else if (numberChild2 > numberChild1) {
    side1.style.transform = "translate(0px, -25px)";
    side2.style.transform = "translate(0px, 25px)";
    side1.style.transitionDuration = "600ms";
    side1.style.transitionTimingFunction = "ease-out";
    side2.style.transitionDuration = "600ms";
    side2.style.transitionTimingFunction = "ease-out";
  } else {
    if (heavySide1()) {
      side1.style.transform = "translate(0px, 25px)";
      side2.style.transform = "translate(0px, -25px)";
      side1.style.transitionDuration = "600ms";
      side1.style.transitionTimingFunction = "ease-out";
      side2.style.transitionDuration = "600ms";
      side2.style.transitionTimingFunction = "ease-out";
    } else if (!heavySide1() && !heavySide2()) {
      side1.style.transform = "translate(0px, 0px)";
      side2.style.transform = "translate(0px, 0px)";
      side1.style.transitionDuration = "600ms";
      side1.style.transitionTimingFunction = "ease-out";
      side2.style.transitionDuration = "600ms";
      side2.style.transitionTimingFunction = "ease-out";
    } else {
      side1.style.transform = "translate(0px, -25px)";
      side2.style.transform = "translate(0px, 25px)";
      side1.style.transitionDuration = "600ms";
      side1.style.transitionTimingFunction = "ease-out";
      side2.style.transitionDuration = "600ms";
      side2.style.transitionTimingFunction = "ease-out";
    }
  }
  if (count > 1) {
    warningText.style.visibility = "visible";
  }

  seeCount.innerHTML = count + 1;
  count += 1;
  console.log(count);
}

guessDiv.addEventListener("drop", () => {
  if (guessDiv.childElementCount < 2) {
    if (guessDiv.childNodes[0].className == "heavy" && count < 3) {
      changeText.innerHTML = "Tebrikler!!";
      changeText.style.color = "green";
      changeText.style.fontSize = "20px";
      changeText.style.fontWeight = "bold";
    } else if (guessDiv.childNodes[0].className == "heavy" && count >= 3) {
      changeText.innerHTML = "Doğru ama ölçüm sayısını aştınız :(";
      changeText.style = "unset";
    } else {
      changeText.innerHTML = "Maalesef :(";
      changeText.style = "unset";
    }
  } else {
    changeText.innerHTML = "Sadece bir bilye sürüklemeyi deneyin.";
    changeText.style = "unset";
  }
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  if (!ev.target.getAttribute("ondrop")) return false;
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
