// Завдання 5
// Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. Врахуй,
// користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.

// Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch.
// Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

// Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 'У вашій країні доставка недоступна'.

// Нижче наведено список країн і вартість доставки.

// Китай - 100 кредитів
// Чилі - 250 кредитів
// Австралія - 170 кредитів
// Індія - 80 кредитів
// Ямайка - 120 кредитів
const deliveryCountry = prompt(
  "Введіть країну доставки - (Китай, Чилі, Австралія, Індія, Ямайка)"
);
if (deliveryCountry !== null) {
  const firstLetter = deliveryCountry.slice(0, 1);
  const wordWithOutFirstLetter = deliveryCountry.slice(
    1,
    deliveryCountry.length
  );

  const normalaizeDeliveryCountry =
    firstLetter.toUpperCase() + wordWithOutFirstLetter.toLowerCase();
  let deliveryCost;
  let isNameCountryCorrect = true;

  switch (normalaizeDeliveryCountry) {
    case "Китай":
      deliveryCost = 100;
      break;

    case "Чилі":
      deliveryCost = 250;
      break;

    case "Австралія":
      deliveryCost = 170;
      break;

    case "Індія":
      deliveryCost = 80;
      break;

    case "Ямайка":
      deliveryCost = 120;
      break;

    default:
      console.log("У вашій країні доставка недоступна");
      isNameCountryCorrect = false;
      break;
  }
  if (isNameCountryCorrect === true) {
    console.log(
      `Доставка в ${normalaizeDeliveryCountry} буде коштувати ${deliveryCost} кредитів`
    );
  }
} else {
  console.log(" Ви відмінли введення, якщо хочете спробувати ще натисніть F5");
}
