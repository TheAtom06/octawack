import './style.css'

navigator.serviceWorker.register("./service-worker.js")

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

function transformString(inputStr) {
  if (inputStr.length < 8) {
      throw new Error("The input string must have at least 8 characters.");
  }

  const first = inputStr[1];
  const second = inputStr[2];
  const third = inputStr[3];
  const fourth = inputStr[4];
  const fifth = inputStr[2];
  const sixth = inputStr[3];
  const seventh = inputStr[6];
  const eighth = inputStr[inputStr.length - 3];

  return eighth + seventh + sixth + fifth + fourth + third + second + first;
}

button.onclick = () => {
  h1.textContent = transformString(Date.now().toString(36));
}

h1.addEventListener('click', () => {
  navigator.clipboard.writeText(h1.textContent).then(() => {
    alert(`"${h1.textContent}" is copied to your clipboard`)
  }, (err) => {
    alert(err)
  })
});