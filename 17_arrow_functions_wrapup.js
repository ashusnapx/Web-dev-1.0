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

const newMovies = movies.map(function (movie)
{
    return `${movie.title} - ${movie.score/10}`;
})

// using arrow function
const newMovies = movies.map((movie) => {
  return `${movie.title} - ${movie.score / 10}`;
});

// or in a more clean way
const newMovies = movies.map((movie => 
  `${movie.title} - ${movie.score / 10}`
));