const dino = document.querySelector("#dino");
const background = document.querySelector("#background");

let jumping = false;
let currentSpeed = 10;
let height = 0;
let running = true;

function keyHandler(event) {
  if (event.keyCode === 32) {
    if (!jumping && running) jump();
  }
}

function jump() {
  const gravity = 4;
  let acceleration = 15;
  let step = 0;

  jumping = true;

  let jumpInterval = setInterval(() => {
    if (acceleration > gravity) {
      acceleration *= .92;
    } else {
      if (height + acceleration <= 0) {
        height = 0;
        clearInterval(jumpInterval);
        jumping = false;
      } else {
        acceleration -= 1;
      }
    }
    dino.style.bottom = height + "px";
    height += acceleration;
    step++;

    if (!running) clearInterval(jumpInterval);
  }, 20);
}


function showWarn(warn) {
  const warnEl = document.createElement("h2");
  warnEl.className = "warn";
  warnEl.innerText = warn;

  background.appendChild(warnEl);
  background.style.webkitAnimationPlayState = "paused";
}

function createCactus() {
  let position = 1000;
  const cactus = document.createElement("div");
  cactus.className = "cactus";
  cactus.style.left = position + "px";
  background.appendChild(cactus);

  const randomTime = 600 + Math.random() * 1000;

  let scrollLeftInterval = setInterval(() => {
    if (position < -60) {
      clearInterval(scrollLeftInterval);
      background.removeChild(cactus);
    } else {
      if (position >= 0 && position <= 60 && height <= 60) {
        clearInterval(scrollLeftInterval);
        running = false;
        showWarn("VOCÊ PERDEU!")
      } else {
        position -= currentSpeed;
        cactus.style.left = position + "px";
      }
    }
    if (!running) clearInterval(scrollLeftInterval);
  }, 20);

  if (running) setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keydown", keyHandler);