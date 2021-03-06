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
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");