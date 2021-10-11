console.clear()


const makeRequest= async(config)=>{
    return await axios(config)
}



const patchData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"patch",
        body:JSON.stringify({
            header:"I am a Bangladeshi"
        })
    })
    .then((res)=>{
        const body=res.config.body
        document.querySelector("#pera").innerHTML=`<div>
        <p>${body}</p>
        </div>`
    })
    .catch((err)=>console.log(err))
}
patchData();

const updateData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"put",
        body:({
            id: 1,
            title: 'foo',
            body: 'Abu Jakaria md Numan',
            userId: 1,
        })
    })
    .then((res)=>{
        console.log(res.config.body)
    })
    .catch((err)=>console.log(err))
}
//  updateData();
const postData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:'post',
        body:JSON.stringify({
            title:"hello i am bangladeshi",
            body:"Abu jakaria Md Numan",
            userId:2
        })
    })
    .then((res)=>console.log(res.config.body))
    .catch((err)=>console.log(err))
}
// postData()
const getData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
}   

// getData();