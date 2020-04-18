let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2],menuItem[1]);

let newMenuItem = document.createElement("li");
newMenuItem.classList.add("menu-item");
newMenuItem.textContent = "Пятый пункт";

menu.appendChild(newMenuItem);

document.body.style.background = "url('img/apple_true.jpg')";

document.querySelector("#title").textContent = "Мы продаем только подлинную технику Apple";

let columns = document.querySelectorAll(".column");
let adv = document.querySelector(".adv");
columns[1].removeChild(adv);

let answer = document.querySelector("#prompt");
answer.textContent = prompt("Как вы относитесь к технике Apple?", "");