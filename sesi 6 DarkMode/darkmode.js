let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
  if (darkRemainingLeft == 1) {
    info.textContent = "💥 JATAH FITUR DARKMODE ANDA SUDAH HABIS 💥";
    mode.style.display = "none";
    home.textContent = "RESTART";
    return;
  }

  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  // render ke info element
  mode.textContent = `MODE-LIGHT`;
  info.textContent = `Darkmode dipakai ${darkCounter}x tersisa ${darkRemainingLeft}`;

  body.classList.toggle("dark");
}

function reRender() {
  location.reload();
}
