const myPromise= new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Inside the promise")
        resolve({
            username:"prithvi pratap",
            email:"pratapprithvi768@gmail.com",
            phoneNo:7667025535
        });
    },1000)
})

myPromise.then((user)=>{
    console.log(user.email)
    console.log(user.username)
    console.log(user)
})