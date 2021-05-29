
//.......... array destructure..........


var number = [5,10,15,22,45,55];

var[num1,num2,num3,...num4] = number;
console.log(num1);
console.log(num2);
console.log(num4);


// ............Swap Variable...........

let a = 5, b = 10;

[a,b] = [b,a];
console.log(a);
console.log(b);


// ............Obj Destructure...........

const Name = {
    name : "Numan",
    age : 24,
    dept : "CSE"
}

const{name,age,dept} = Name;
console.log("Name is: "+name);
console.log("Age is: "+age);


// ............Nested Obj Destructure...........



const Name = {
    name : "Numan",
    age : 24,
    dept : "CSE",
    language :{
        native : "bangla",
        beginner : "English"
    }
}

const {dept,language} = Name;
console.log(language.beginner);

// ............Destructing function perameter...........

const studentInfo = ({name,age,dept})=>{
            
    console.log(`${age}`)
}

const Student ={
    name : "Numan",
    age : 24,
    dept : "CSE",
}

studentInfo(Student)