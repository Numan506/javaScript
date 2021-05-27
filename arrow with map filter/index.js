var Student = [
      
    {
        Name: "Numan",
        id  : 506,
        Cgpa : 3.10,
        Dept: "CSE"
    },

    {
        Name : "Rakib",
        id   : 509,
        Cgpa : 2.96,
        Dept : "CSE",

    },

    {
        Name : "Khalek",
        id   : 586,
        Cgpa : 3.05,
        Dept : "CSE",
    }

]

// .........Traditional Function..........

function Student1(){
  return Student.filter(function(x){
       return x.Cgpa > 3;
   }).map(function(y){
       return y.Name;
   })
} 


//  .............Arrow Function.............

const Student2 =()=>{
   return Student.filter((x)=>x.Cgpa>3).map((y)=> "Name: "+y.Name+ " Id: "+y.id  );
   
    
}

console.log(Student1());
console.log(Student2());


