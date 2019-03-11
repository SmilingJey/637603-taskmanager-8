import {randomInteger, randomBoolean, randomArrayFromArray, randomArrayItem} from './utils.js';

const TITLES = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const TAGS = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const COLORS = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

const DAYS = [
  `mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`
];

let taskCount = 0;

/**
 * Функция возвращает случайно сгенерированную задачу
 * @return {Object} - задача
 */
function createMockTask() {
  const repeatingDays = {};
  DAYS.map((item) => (repeatingDays[item] = randomBoolean()));

  return {
    number: taskCount++,
    title: randomArrayItem(TITLES),
    hasDeadline: randomBoolean(),
    dueDate: Date.now() + 1 + randomInteger(7 * 24 * 3600 * 1000),
    tags: new Set(randomArrayFromArray(TAGS).slice(0, 3)),
    picture: randomBoolean() ? `//picsum.photos/100/100?r=${Math.random()}` : ``,
    color: randomArrayItem(COLORS),
    isRepeating: randomBoolean(),
    repeatingDays,
    isFavorite: randomBoolean(),
    isDone: randomBoolean()
  };
}

export default createMockTask;