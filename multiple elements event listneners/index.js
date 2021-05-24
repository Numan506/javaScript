var len = document.querySelectorAll(".myButton").length;
for (var i = 0; i < len;i++) {
    var myVar = document.querySelectorAll(".myButton")[i];
    myVar.addEventListener("click",function(){
       
       var text = this.innerHTML;
      var myVar1 =  document.querySelector(".add");
        myVar1.innerHTML = text + " is Cliked"
    }); 
    
}


