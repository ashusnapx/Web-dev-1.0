// !EVERY METHOD IS A FUNCTION BUT EVERY FUNCTION IS NOT METHOD
const myMath = {
    PI = 3.149,
    square: function (num)
    {
        return num * num;
    },

    add: function (num1, num2)
    {
        return num1 + num2;
    },

    subtract: function (num1, num2)
    {
        return num1 - num2;
    },

    multiply: function (num1, num2)
    {
        return num1 * num2;
    },
    
    divide: function (num1, num2)
    {
        return num1 / num2;
    },

    cube: function (num)
    {
        return num ** 3;
    }
}

//! we can rewrite above object as 

const myMath = {
    sum(a, b)
    {
        return a + b;
    },
    square(num)
    {
        return n ** 2;
    },
    cube(num)
    {
        return n ** 3;
    }
}
