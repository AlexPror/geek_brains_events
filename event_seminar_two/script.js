// Задача 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
const inputEl = document.querySelector(".checkbox");
console.log(inputEl);
const formEl = document.querySelector(".form");
inputEl.addEventListener("click", function (e) {
  const target = e.target;
});

const text = document.createElement("div");
formEl.addEventListener("submit", function (e) {
  if (inputEl.checked) {
    console.log("welldone!");
  } else {
    text.textContent = "Необходимо согласиться с условиями";
    formEl.append(text);
    e.preventDefault();
  }
});

//Задача 2.
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “Кофе закончился”
const form = document.querySelector("#form");
const someTea = document.querySelector("#someTea");
const someCoffe = document.querySelector("#someCoffe");
const message = document.querySelector(".message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  someCoffe.checked
    ? (message.textContent = "Кофе закончился")
    : (message.textContent = "Чай закончился");
});

// Задача 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
const inputPass = document.querySelector("#password");
const formPassword = document.querySelector("#formPassword");
const btnPasword = document.querySelector("#btnPasword");

formPassword.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputPass.value === "пароль") {
    inputPass.style.borderColor = "green";
  } else {
    inputPass.textContent = "Пароль не верный";
    inputPass.style.borderColor = "red";
  }
});

// Задача 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
const title = document.querySelector("#title");
const newTitle = document.querySelector("#newTitle");
const btnEnter = document.querySelector("#btnEnter");

newTitle.addEventListener("input", function () {
  title.textContent = newTitle.value;
});
