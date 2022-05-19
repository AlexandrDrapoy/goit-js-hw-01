// 'Завдання 6
// Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення додається до значення змінної total.
// Операція введення числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення натиснувши кнопку Cancel, показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно. Якщо хочеш, в разі некоректного введення, показуй alert з текстом
// 'Було написано не число, спробуйте ще раз', при цьому результат prompt плюсувати до загальної суми не потрібно,
// після чого знову користувачеві пропонується ввести число в prompt.''

let input;
let total = 0;
do {
  input = prompt("Введіть число");
  if (input === null) {
    alert(`Загальна сума чисел дорівнює ${total}`);
  } else if (isNaN(input)) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    total += Number.parseFloat(input);
  }
} while (input !== null);
