marks = parseInt(prompt("please given the marks: "));

if (marks>100 || marks<0){
    console.log("invalid marks");
}

else if (marks>=80 && marks<=100){
    console.log("Result is: A+");
}

else if (marks>=70 && marks<=79){
    console.log("Result is: A");
}

else if (marks>=60 && marks<=69){
    console.log("Result is: A-");
}

else if (marks>=50 && marks<=59){
    console.log("Result is: B");
}

else if (marks>=40 && marks<=49){
    console.log("Result is: C");
}
else{
    console.log("fail");
}