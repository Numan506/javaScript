
// .......For Eah function.......

 let number =[5,10,15,20,25];

number.forEach(function(x){
    console.log(x);
})


// ...............Square of array............


 var number1 =[2,3,4,5,6,7,8];
var number2 =[];


number1.forEach(function(x){
    number2.push (x*x ) ;
});
console.log(number2);


// ............... array............

var number1 =[2,3,4,5,6,7,8];

number1.forEach(function(x,index,arr){
    arr[index]= x+10;
    
});
console.log(number1);