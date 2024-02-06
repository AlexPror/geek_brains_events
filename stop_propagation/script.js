const html = document.documentElement,
  body = document.body,
  div = body.querySelector("div"),
  ul = body.querySelector("ul"),
  li = body.querySelector("li"),
  pause = 200;
//Capture (захват)
html.addEventListener("click", callback, true);
body.addEventListener("click", callback, true);
div.addEventListener("click", callback, true);
html.addEventListener("click", callback, true);
ul.addEventListener("click", callback, true);
li.addEventListener("click", callback, true);
//Buble (всплытие)
html.addEventListener("click", callback, false);
body.addEventListener("click", callback, false);
div.addEventListener("click", callback, false);
html.addEventListener("click", callback, false);
ul.addEventListener("click", callback, false);
li.addEventListener("click", callback, false);

function callback(event) {
  const elem = (event.timeout = event.timeout + pause || 0);
  const target = event.currentTarget;

  setTimeout(function () {
    target.classList.add("highlight");
    setTimeout(function () {
      target.classList.remove("highlight");
    }, pause);
  }, elem);
}
