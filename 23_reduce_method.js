const prices = [9.99, 1.50, 76.9, 90.4];

let total = 0;

for (let price of prices)
{
    total += price;
}

console.log(total);

// writing above code using reduce
prices.reduce((total, current) => {
  return total + price;
});

prices.reduce((total, current) => total + price);

// FIND MINIMUM IN THE PRICES ARRAY
const minPrice = price.reduce((smallest, current) => 
{
    if (current < smallest)
    {
        return current;
    }
    return smallest;
}
)

// FIND MAXIMUM IN THE PRICES ARRAY
const maxPrice = price.reduce((largest, current) => 
{
    if (current > largest)
    {
        return current;
    }
    return largest;
}
)

const evens = [2, 4, 6, 8]
evens.reduce((sum, curr) => sum + curr);