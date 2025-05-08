// DOM
// Single Selectors
let form = document.getElementById("my-form");
let form1 = document.querySelector("h1");

// multiple selectors
let items = document.querySelectorAll(".item");
let items1 = document.getElementsByClassName("item");
let items2 = document.getElementsByTagName("li");

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[2].innerText = "John";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "blue";

// mouseover
// mouseout
// etc
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let form = document.querySelector("#my-form");
  form.style.backgroundColor = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>John Smith</h1>";
});

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (nameInput.value === "" || emailInput === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
