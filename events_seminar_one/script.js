// Задача 2

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const box = document.querySelector("#box");

// const pressBtn1 = btn1.addEventListener("click", () => {
//   console.log("Нажата кнопка 1");
// });
// const pressBtn2 = btn2.addEventListener("click", () => {
//   console.log("Нажата кнопка 2");
// });
// const pressBtn3 = btn3.addEventListener("click", () => {
//   console.log("Нажата кнопка 3");
// });
// const pressBtn4 = btn4.addEventListener("click", () => {
//   console.log("Нажата кнопка 4");
// });

box.addEventListener("click", function (e) {
  console.log(e.target);
});

// let count = 0;
// function pressCount() {
//   if()
// }

// Задача 3
// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const createTitle = document.querySelector("#create");
const removeTitle = document.querySelector("#remove");
const hoverText = document.querySelector("#hoverText");
const footer = document.querySelector("#footer");
const boxTitle = document.querySelector("#boxTitle");

createTitle.addEventListener("click", () => {
  const title = document.createElement("h1");
  title.textContent = "Новый заголовок";
  boxTitle.append(title);
});

removeTitle.addEventListener("click", () => {
  const title = document.querySelector("h1");
  title.remove();
});

hoverText.addEventListener("mouseover", () => {
  footer.style.backgroundColor = "red";
  footer.style.linehight = "100px";
  footer.textContent = "footer";
  console.log("вы навели на данную кнопку");
});
hoverText.addEventListener("mouseout", () => {
  footer.style.backgroundColor = "white";
  console.log("Наведения на кнопку больше нет");
});

// Задача 4

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const list = document.querySelector("#list");
console.log(list);
const listBox = document.querySelector("#listBox");
const btnList = document.querySelector("#btnList");
btnList.addEventListener("click", () => {
  const newElemList = document.createElement("li");
  newElemList.textContent = "новый элемент списка";
  // list.append(newElemList);
  list.insertAdjacentElement("beforeend", newElemList);
});
