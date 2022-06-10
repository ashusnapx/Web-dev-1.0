// EXAMPLE - 1
function makeMysteryFunc() {
    const rand = Math.random();

    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS I'M A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS");
        };
    } else {
        return function () {
            alert("YOU'VE INFECTED BY A COMPUTER VIRUS");
            alert("STOP TRYING CLOSING THIS WINDOW");
        };
    }
}

// EXAMPLE - 2
function makeBetweenFunc(min,max)
{
    return function (num)
    {
        return num >= min && num <= max;
    }
}
// function isBetween(num)
// {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num)
// {
//     return num >= 1 && num <= 10;
// }
