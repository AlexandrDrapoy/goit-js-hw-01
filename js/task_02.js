// Завдання 2
// Напиши скрипт перевірки кількості товарів на складі. Є змінні total (кількість товарів на складі) і ordered (одиниць товару в замовленні).

// Порівняй ці значення і за результатами виведи:

// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення "На складі недостатньо товарів!".
// В іншому випадку виводь повідомлення "Замовлення оформлено, з вами зв'яжеться менеджер".
// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.
let ordered = [20, 50, 80, 130];
const total = 100;
// const ordered = 50;
for (
  let index = 0;
  index < ordered.length;
  index++
) {
  const element = ordered[index];
  if (element > total) {
    console.log(
      "На складі недостатньо товарів!"
    );
  } else {
    console.log(
      "Замовлення оформлено, з вами зв'яжеться менеджер"
    );
  }
}
// if (ordered > total) {
//   console.log(
//     "На складі недостатньо товарів!"
//   );
// } else {
//   console.log(
//     "Замовлення оформлено, з вами зв'яжеться менеджер"
//   );
// }
