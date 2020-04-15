'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  money: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let first = prompt("Введите обязательную статью расходов в этом месяце", "");
let firstAnswer = +prompt("Во сколько обойдется?", "");
appData.expenses[first] = firstAnswer;

let second = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondAnswer = +prompt("Во сколько обойдется?", "");
appData.expenses[second] = secondAnswer;

let budget = money - (appData.expenses[first] + appData.expenses[second]);

alert("Ваш бюджет на 1 день равен " + budget / 30);

