window.addEventListener("DOMContentLoaded", () => { // начинаем работу, когда загрузится DOM

    'use strict';

    let tab = document.querySelectorAll(".info-header-tab"), // находим нужные элементы
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");
    
    function hideTabContent(a) { // скрываем все элементы в tabContent, начиная с a
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1); // запускаем с параметром 1, чтобы остался нулевой (первый) таб

    function showTabContent(b) { // показать элемент b
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) { // делегирование: если кликнули по элементу с классом info-header-tab
            for(let i = 0; i < tab.length; i++) { // цикл по количеству табов
                if (target == tab[i]) { // если то, куда мы ткнули это i-тый элемент, то 
                    hideTabContent(0); // скрываем все
                    showTabContent(i); // показываем этот элемент
                    break; // выходим из цикла.
                }
            }
        }
    });

    // таймер
    let deadLine = "2020-05-25";

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));
            // hours = Math.floor((t / 1000 / 60 / 60) % 24),
            // days = Math.floor(t / (1000 * 60 * 60 * 24)),
        if (t <= 0) {
            seconds = 0;
            minutes = 0;
            hours = 0;
            // hours = Math.floor((t / 1000 / 60 / 60) % 24),
            // days = Math.floor(t / (1000 * 60 * 60 * 24)),
        }
        
        return {
            "total" : t,
            "seconds" : seconds,
            "minutes" : minutes,
            "hours" : hours,
            // "days" : days
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            // days = timer.querySelector(".days"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            if (t.hours < 10) {
                hours.textContent = "0" + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }

            // if (t.days < 10) {
            //     days.textContent = "0" + t.days;
            // } else {
            //     days.textContent = t.days;
            // }

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock("timer", deadLine);

    // модальное окно

    function openModal(button) {
        let overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close"),
            buttons = document.querySelectorAll(button);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                overlay.style.display = "block";
                buttons[i].classList.add("more-splash");
                document.body.style.overflow = "hidden";
            });

            close.addEventListener("click", () => {
                overlay.style.display = "none";
                buttons[i].classList.remove("more-splash");
                document.body.style.overflow = "";
            });
        }
    }    

    openModal(".more");
    openModal(".description-btn");

    
    
    // Форма

    function setFormSender(selector) {
        let message = {
            loading: "Загрузка",
            success: "Спасибо! Скоро мы с вами свяжемся!",
            failure: "Что-то пошло не так..."
        };
    
        let form = document.querySelector(selector),
            input = form.getElementsByTagName("input"),
            statusMessage = document.createElement("div");
    
        statusMessage.classList.add("status");
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
    
            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    
            let  formData = new FormData(form);
            console.log(formData);
            
    
            let obj = {};
    
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
    
            let json = JSON.stringify(obj);
    
            // request.send(formData);
            request.send(json);
    
    
            request.addEventListener("readystatechange", () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
    
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
    
        });
    }

    setFormSender(".main-form");
    setFormSender("#form");

});