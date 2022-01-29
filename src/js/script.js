let name = prompt('Как вас зовут?');
if (name) {
  alert('Привет, ' + name);
} else {
  alert('Хорошо, можете не представлятся');
}

let likesCars = confirm('Тебе нравятся кошки?');
if (likesCars) {
  alert('Ты тоже нравишься кошкам! 😻 ' + 'идём дальше..🙂');
} else {
  alert('Что ж, не проблема, ты все равно молодец 😉');
}



let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "лев",
  "фламинго",
  "белый медведь",
  "удав",
  "муха",
  "выдра",
  "дубина",
  "мартышка",
  "рука",
  "страна",
  "глаз",
  "ребенок",
  "дом",
  "число",
  "жена",
  "условие",
  "мама",
  "улица",
  "состояние",
  "глава",
  "движение",
  "рубль",
  "наука",
  "край",
  "класс",
  "факт",
  "название",
  "солдат",
  "миллион",
  "продукция",
  "сумма",
  "фонд",
  "огонь",
  "волос",
  "офицер",
  "никита",
  "артём",
  "максим",
  "женя",
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;
let attempts = 10;

alert('У тебя есть ' + attempts + ' попыток на одно загаданное слово');

while (remainingLetters > 0 && attempts > 0) {

  alert(answerArray.join(' ') + ' ' + ' нажми "ОК"');

  let guess = prompt('Угадайте букву или нажмите "отмена" что бы выйти из игры и посмотреть ответ!');

  if (guess === null) {
    alert('Вы вышли из игры 😉');
    break;
  } else if (guess.length == '0') {
    alert('Не осталвяйте поле пустым.');


  } else if (guess.length !== 1) {
    alert('Введите, только одну букву.');

  } else {
    for (j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }

    attempts--;
    alert('Осталось попыток: ' + attempts);

    if (attempts === 10) {
      alert('Ты проиграл 😥');
    }
  }
}

if (remainingLetters == 0) {
  alert(answerArray.join(''));
  alert('Отлично! Вы одгадали слово - ' + word);
}