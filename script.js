const display = document.getElementById("display");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const themeToggle = document.getElementById("themeToggle");
const clickSound = document.getElementById("clickSound");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();

    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
      result.textContent = "";
    }
    else if (value === "=") {
      calculate();
    }
    else if (value === "√") {
      display.value = Math.sqrt(display.value);
    }
    else if (value === "%") {
      display.value = display.value / 100;
    }
    else if (value === "^") {
      display.value += "**";
    }
    else if (!btn.id) {
      display.value += value;
    }

    updatePreview();
  });
});

function calculate() {
  try {
    display.value = eval(display.value);
    result.textContent = "";
  } catch {
    display.value = "Error";
    result.textContent = "";
  }
}

function updatePreview() {
  try {
    if (display.value !== "") {
      result.textContent = eval(display.value);
    } else {
      result.textContent = "";
    }
  } catch {
    result.textContent = "";
  }
}

themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
};
