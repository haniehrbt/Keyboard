let keys = document.querySelectorAll(".keys");
let spaceKey = document.querySelector(".space-key");
let shiftLeft = document.querySelector(".shift-left");
let shiftRight = document.querySelector(".shift-right");
let altLeft=document.querySelector('.alt-left');
let altRight=document.querySelector('.alt-right');
let capsLock = document.querySelector(".capslock-key");
let toggleCircle = document.querySelector(".toggle-circle");
let nightMode = document.querySelector(".night-mode");
let body = document.querySelector("body");
let keyboardWrapp = document.querySelector(".keyboard-wrapp");
let textInput = document.querySelector(".text");
let changeColor = document.querySelector(".change-light-color");
let colorInput = document.querySelector(".color-input");
let keyboardLights = document.querySelector(".keyboard-lights");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}
window.addEventListener("keydown", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.code == "ShiftLeft") {
      shiftRight.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      shiftLeft.classList.remove("active");
    }
    if (e.code == "AltLeft") {
      altRight.classList.remove("active");
    }
    if (e.code == "AltRight") {
      altLeft.classList.remove("active");
    }
    if (e.code == "CapsLock") {
      capsLock.classList.toggle("active");
    }
  }
});
window.addEventListener("keyup", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.remove("active");
      keys[i].classList.add("remove");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.remove("remove");
    }
    if (e.code == "ShiftLeft") {
      shiftRight.classList.remove("active");
      shiftRight.classList.remove("remove");
    }
    if (e.code == "ShiftRight") {
      shiftLeft.classList.remove("active");
      shiftLeft.classList.remove("remove");
    }
    setTimeout(() => {
      keys[i].remove(remove);
    });
  }
});
nightMode.addEventListener("click", function () {
  body.classList.toggle("active");
  toggleCircle.classList.toggle("active");
  nightMode.classList.toggle("active");
  keyboardWrapp.classList.toggle("active");
  textInput.classList.toggle("active");
  changeColor.classList.toggle("active");
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle("keys-night");
  }
});
colorInput.addEventListener("input", function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = colorInput.value;
  }
  keyboardLights.style.background = colorInput.value;
});
