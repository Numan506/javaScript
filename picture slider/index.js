var image = ["pictures/1.jpg", "pictures/2.jpg","pictures/3.jpg"];

var myVar =  document.querySelector("img");

var count = 0;



function Next(){
          count ++;
        
        if (count >= image.length ){
            count = 0;
            myVar.src = image[count];
        } 
        
     else{
         myVar.src = image[count];
     }
    }


function prev(){
    count -- ;
  if (count < 0 ){
      count = image.length-1;
      myVar.src = image[count];;
  } 
  
else{
   myVar.src = image[count];
}

}