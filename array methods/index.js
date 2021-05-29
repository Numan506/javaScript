

let number = [11,201,30,40,50];


const firstEvenNumber = (number)=>{

    if (number%2===0){
        return number;
        
    }
}


console.log(number.find(firstEvenNumber))
console.log(number.findIndex(firstEvenNumber))


//.................object.................

const Student = [
    {
        Name: "Numan",
        Id : "506",
        gpa : 3.12
    },
    {
        Name: "Rakib",
        Id : "546",
        gpa : 2.96
    },
    {
        Name: "Khalek",
        Id : "586",
        gpa : 3.06
    },
    {
        Name: "Neha",
        Id : "587",
        gpa : 2.86
    },

]

console.log(Student.find(x=> x.gpa>3))