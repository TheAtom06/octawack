import './style.css'

navigator.serviceWorker.register("./service-worker.js")

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.onclick = () => {
  h1.textContent = Date.now().toString(16);

  if (new Date().getDate() === 11) {
      document.querySelector("div.flexCenter").remove();

      document.body.appendChild(Object.assign(document.createElement('img'), { src: '/nggyu.gif' }));

      new Audio("/nggyu.mp3").play();
  }
}

h1.addEventListener('click', () => {
  navigator.clipboard.writeText(h1.textContent).then(() => {
    alert(`"${h1.textContent}" has been copied clipboard`)
  }, (err) => {
    alert(err)
  })
});