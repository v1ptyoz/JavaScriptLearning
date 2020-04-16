'use strict';

let money, time; // Объявление глобальных переменных

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();


let appData = {
  money: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = +prompt("Во сколько обойдется?", "");
    
      if (typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        --i;
        continue;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.money / 30).toFixed();
    alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);
    detectLevel();
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка.");
    }
  },
  checkSavings: function() {
    if (appData.savings) {
      let save = +prompt("Какова сумма накоплений?", ""),
          percent = +prompt("Под какой процент?", "");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExprenses: function() {
    for (let i = 0; i < 3; i++) {
      let a = +prompt("Статья необязательных расходов?", "");
      appData.optionalExpenses[i] = a;
    }
  },
  chooseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? (через запятую)","");
    while (items == "" || items == null || typeof(items) != "string") {
      items = prompt("Что принесет дополнительный доход? (через запятую)","");
    }
    appData.income = items.split(", ");
    let moreItems = prompt("Может что-то еще?","");
    while (moreItems == "" || moreItems == null || typeof(moreItems) != "string") {
      moreItems = prompt("Может что-то еще?","");
      
    }
    appData.income.push(moreItems);
    
    appData.income.sort();

    console.log("Способы доп. заработка: ");
    appData.income.forEach(function(item, i) {
      console.log("" + (++i) + ". " + item);
    });
  }
};

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log(key);
}

