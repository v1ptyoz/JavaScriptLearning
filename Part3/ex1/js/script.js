window.addEventListener("DOMContentLoaded", function() { // начинаем работу, когда загрузится DOM

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

    info.addEventListener("click", function(event) {
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

});