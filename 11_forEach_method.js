const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function print(element) {
  console.log(element);
}

numbers.forEach(print);

//!or

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.forEach(
    function (el)
    {
        if (el % 2 == 0)
        {
            console.log(el);
        }
        console.log(el);
    }
)

//!or

for (let el of numbers)
{
    console.log(el);
}


const movies = [
    {
        title: 'Mother India',
        score: 99,
    },
    {
        title: 'Mr Hindustani',
        score: 100,
    },
    {
        title: 'Indian Army',
        score: 'Infinity',
    }
]

movies.forEach(function (movie)
{
    console.log(`${movies.title} - ${movies.score}/100`)
})