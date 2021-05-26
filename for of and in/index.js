// .................use of For of................ 

let Student = ["Numan","jakaria","Rakib","khalek"];

for(let x of Student){
    console.log(x);
}


// .................use of For in................ 

Student ={
    name:"Numan",
    age :24,
    cgpa : 3.20
}
for (let x in Student){
    console.log(`${x} : ${Student[x]}`);
}