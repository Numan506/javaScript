var heading1 = document.createElement("h1");
var text = document.createTextNode("This is heading 1");
heading1.appendChild(text);

var myDiv = document.querySelector(".my-div");
myDiv.appendChild(heading1);



var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0 ");
heading0.appendChild(text0);
var heading2 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading2);