let name = prompt('Как вас зовут?');
alert('Привет, ' + name);

let likesCars = confirm('Тебе нравятся кошки?');
if (confirm) {
  alert('Ты классная кошка! ' + 'идём дальше..🙂');
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
  "мартышка"
 ];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (i = 0; i < words.length; i++) {
  answerArray[i] = '_';
}
let remainingLetters = word.length;

while (remainingLetters > 0) {

  alert(answerArray.join(' '));

let guess = prompt('Угадайте букву или нажмите "отмена" что бы выйти из игры и посмотреть ответ!');
if (guess === null) {
  alert('Вы вышли из игры 😉');
  break;
} else if (guess.length !== 1) {
  alert('Введите, только одну букву.');

} else {
  for (j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }

}
}

alert(answerArray.join(''));
alert('Отлично! Вы одгадали слово - ' + word);

/*
// Создаем массив со словами
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
  "мартышка"
];

// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;

// Игровой цикл
while (remainingLetters > 0) {
 
  // Показываем состояние игры
  alert(answerArray.join(" "));
 
  // Запрашиваем вариант ответа
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {

    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {

    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  // Конец игрового цикла
}

// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
*/