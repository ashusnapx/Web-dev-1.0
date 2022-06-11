// Callbacks & Array Methods
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const movies = [
  {
    title: "Mother India",
    score: 99,
  },
  {
    title: "Mr Hindustani",
    score: 100,
  },
  {
    title: "Indian Army",
    score: "Infinity",
  },
];

const titles = movies.map(function (movie) {
  return movie.title;
});
