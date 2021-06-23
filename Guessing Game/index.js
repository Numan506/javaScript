for(var i = 0;i<=5;i++){
    var guessNumber = parseInt(prompt("please enter the number: "));
    var randomNumber = Math.floor(Math.random()*5)+1;
    
    if (guessNumber==randomNumber){
       console.log("You have win ");
    }else{
        console.log("You have loss. Random number was " +randomNumber);
    }

}
