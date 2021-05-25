
document.querySelector("#clickButton").addEventListener("click",function(){
    
    var num = document.querySelector("#Text").value;
    

    try{
        if(num<5){
            throw "Input is very low";
        }
        else if(num>50)
        {
            throw "Number is very high";
        }

        else{
            console.log("your input is: "+num);
        }


    }catch(err){
       console.log(err);
    }
})