function Student (name,age,cgpa,dept){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.dept = dept;

    this.display = function(){

        console.log("name is: "+this.name);
        console.log("Age is: "+this.age);
        console.log("Cgpa is: "+this.cgpa);
        console.log("dept is: "+this.dept);
    }
     console.log( "\n" )
    }

var student1 = new Student("Numan",23,"3.10","CSE");
student1.display();


var student2 = new Student("Rakib",24,"3.0","CSE");
student2.display();
