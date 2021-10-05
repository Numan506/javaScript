
const numan = async(url,config)=>{
   const res =  await fetch(url,config)
   if(!res.ok){
       const msg = `Error: ${res.status}`
       throw new Error(msg)
   }
   const data = await res.json();
   return data
}

// create a Delete method
const deleteData =()=>{
    numan("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'DELETE',
    
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
}

deleteData();

// create a patch method

// const patchData =()=>{
//     numan("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
      
//         title: 'Abu Jakaria Md Numan',
       
//       }),
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// }

// patchData();

// create a put method

// const putData =()=>{
//     numan("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//         id:1,
//         title: 'Jakaria',
//         body: 'bar',
//         userId: 1,
//       }),
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// }

// putData();


//  create a post data

// const postData =()=>{
//         numan("https://jsonplaceholder.typicode.com/posts",{
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body: JSON.stringify({
//             title: 'Numan',
//             body: 'bar',
//             userId: 1,
//           }),
//     })
//    .then((res)=>console.log(res))
//    .catch((err)=>console.log(err))
// }

// postData();



//  create a Get Data

// const getData =()=>{
//       numan("https://jsonplaceholder.typicode.com/posts")
//      .then((res)=>console.log(res))
//      .catch((err)=>console.log(err))
// }

// getData();