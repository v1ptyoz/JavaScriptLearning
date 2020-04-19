'use strict';

let startButton = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    countBudgetbtn = document.querySelector(".count-budget-btn"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItems = document.querySelectorAll(".expenses-item"),
    buttons = document.getElementsByTagName("button"),
    expensesItemBtn = buttons[0],
    optionalExpensesBtn = buttons[1],
    optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

startButton.addEventListener('click', function(event) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
  
    while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
    }

    let date = new Date(Date.parse(time));

    appData.money = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();

    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate();

    countBudgetbtn.disabled = false;
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;

});

expensesItemBtn.addEventListener("click", function(event) {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
      
        if (typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
          appData.expenses[a] = b;
          sum += +b;
        } else {
          --i;
        }
    }

    expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener("click", function(event) {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";  
      }

});

countBudgetbtn.addEventListener("click", function(event) {
    if (appData.money != undefined) {
      let budget = appData.money - +expensesValue.textContent;
      appData.moneyPerDay = (budget / 30).toFixed();
      dayBudgetValue.textContent = appData.moneyPerDay;
  
      if (appData.moneyPerDay < 100) {
        levelValue.textContent ="Минимальный уровень достатка";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent ="Средний уровень достатка";
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent ="Высокий уровень достатка";
      } else {
        levelValue.textContent ="Произошла ошибка.";
      }
    } else {
      dayBudgetValue.textContent = "Произошла ошибка";
    }


});

chooseIncome.addEventListener("input", function() {
  let items = chooseIncome.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function() {
    if (appData.savings) {
      appData.savings = false;
    } else {
      appData.savings = true;
    }
});

sumValue.addEventListener("input", function() {
  if (appData.savings) {
    let sum =  +sumValue.value,
    perc =  +percent.value;

    appData.monthIncome = sum / 100 / 12 * perc;
    appData.yearIncome = sum / 100 * perc;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(2);

  }
});

percent.addEventListener("input", function() {
  if (appData.savings) {
    let sum =  +sumValue.value,
    perc =  +percent.value;

    appData.monthIncome = sum / 100 / 12 * perc;
    appData.yearIncome = sum / 100 * perc;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
  }
});

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };