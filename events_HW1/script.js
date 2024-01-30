"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Всплытие происходит быстрее в 5 задаче, поскольку родительским элементом является тег ul. Следовательно вывод в консоль происходит сначала из 5-ой задачи, а затем из 3-ей

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

//==============================================

// 1.
document.addEventListener("DOMContentLoaded", () => {
  console.log("все теги прогрузились");
});

// 2.
window.onload = () => {
  console.log("страница загрузилась ");
};

// 3.
document.addEventListener("click", function (event) {
  getTagName(event);
});

function getTagName(event) {
  if (event.srcElement.className !== "super_element")
    console.log(
      `Класс 'super_element' отсутствует в элементе ${event.srcElement.localName}`
    );
  else
    console.log(
      `Класс 'super_element' присутствует в элементе ${event.srcElement.localName}`
    );
}

// 4.
const message = document.querySelector("textarea");
message.addEventListener("mouseover", () => {
  console.log("Вы навели на textarea.");
});

// 5.
const list = document.querySelector("ul");
const listener = function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
};

list.addEventListener("click", listener);

// 7.
const arrayList = Array.from(list.children);

function setBackgroundColor() {
  for (let index = 1; index <= arrayList.length; index++) {
    if (index % 2 === 0) {
      arrayList[index - 1].style.backgroundColor = "red";
    }
  }
}
setBackgroundColor();
