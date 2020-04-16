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
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
  
    if (typeof(a) != null && typeof(b) != null
        && a != "" && b != "" && a.length < 50) {
      appData.expenses[a] = b;
    } else {
      --i;
      continue;
    }
  }
}

function chooseOptExprenses() {
  for (let i = 0; i < 3; i++) {
    let a = +prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i] = a;
  }
}

chooseExpenses();


function detectDayBudget() {
  appData.moneyPerDay = (appData.money / 30).toFixed();
  alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);
  detectLevel()
}

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка.");
  }
}

detectDayBudget()


function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();
