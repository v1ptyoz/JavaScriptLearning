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

// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = +prompt("Во сколько обойдется?", "");

//   if (typeof(a) != null && typeof(b) != null
//   && a != "" && b != "" && a.length < 50) {
//     appData.expenses[a] = b;
//     i++;
//   } else {
//     continue;
//   }
// }

// let y = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = +prompt("Во сколько обойдется?", "");

//   if (typeof(a) != null && typeof(b) != null
//   && a != "" && b != "" && a.length < 50) {
//     appData.expenses[a] = b;
//     y++;
//   } else {
//     if (y <= 2) {
//       continue;
//     } 
//   }
// }
// while (y < 2);

appData.moneyPerDay = appData.money / 30;

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка.");
}

alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);



