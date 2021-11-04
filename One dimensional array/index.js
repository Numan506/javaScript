console.clear();


function bigNumber(highest){
    var max = highest[0];
    for(var i =1;i<highest.length; i++){
          if(max<highest[i]){
              max=highest[i]
          }
    }
    return max
}

// var number = [1,21,22,70,32,10,503]
var number = new Array();
for(var i =0;i<5;i++){
    number[i] = parseInt(prompt("please enter the number: "))
}
var highestNumber = bigNumber(number)
console.log(highestNumber)