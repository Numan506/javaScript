
var myVar = document.querySelector("#add");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("new-Style");
});


myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("new-Style");
})