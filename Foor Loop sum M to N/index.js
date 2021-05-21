

var m = parseInt(prompt("please given the starting number: "));
var n = parseInt(prompt("please given the starting number: "));

sum = 0;
for(var x = m; x<=n; x++){
    sum = sum+x;
}
document.write("The sum is: "+sum);