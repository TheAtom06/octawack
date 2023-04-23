import './style.css'

navigator.serviceWorker.register("./service-worker.js")

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.onclick = () => {
  h1.textContent = Date.now().toString(36);
}

h1.addEventListener('click', () => {
  navigator.clipboard.writeText(copyText).then(() => {
    alert(`"${h1.textContent}" is copied to your clipboard`)
  }, (err) => {
    alert(err)
  })
});