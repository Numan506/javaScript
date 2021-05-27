

// .........how to work map function.........

var number = [2,3,4,5];
var squareNumber = number.map(function(x){
    return x*x;
})
console.log(squareNumber);

// .........how to work filter function.........

var number = [5,10,15,20,25,30,35];
var newNumber = number.filter(function(x){
    return x>10;
})

console.log(newNumber);