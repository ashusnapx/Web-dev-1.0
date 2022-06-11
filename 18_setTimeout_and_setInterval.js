// Callbacks & Array Methods
setTimeout(() => {
    console.log(`Hello !`);
}, 3000);

setInterval(() => {
  console.log(Math.random());
}, 2000);


// how to stop --> solution is using clear interval
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);
