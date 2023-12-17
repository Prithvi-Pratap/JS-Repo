/*const myPromise= new Promise((resolve,reject)=>{
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
    // console.log(user)
})

//promise: handle the rejection;

const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve(
                {username:"Prithvi-Pratap",email:"pratapprithvi768@gmail.com",phoneNo:7667025535}
                )
            }
            else{
                reject('ERROR:Something went wrong!');
            }
        },1000)
    })
    
    myPromise2.then((user)=>{
        console.log(user)
    }).catch((error)=>{
        console.log(error);
    })
    
    
    //chaining in the promises:
    
    const myPromise3 = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve(
            {
                username: "chai aur  code",
                email: "chai@chaiaurcode.com",
                password: '123@chai'
            }
            )
    }
    else {
        reject('ERROR:Something went wrong!');
    }
})

//chaining starts here

myPromise3
.then((user) => {
    //this return statement returns a object containing the following properties
        return ({username:user.username, password:user.password})
    })
    //return value of above then() goes as the argument of the below function
    .then((userData) => {
        console.log(`Username: ${userData.username}\nPassword: ${userData.password}`)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The Promise is either Resolved or Rejected!");
    })
    
    */

    //promise: using async await (async await can't directly handle the error)

    const myPromise4=new Promise((resolve,reject)=>{
        let error=false;
        if(!error){
            resolve({
                username:"coffe-code",email:"coffee@code.com",password:"coffee@123"
            })
        } else{
            reject('ERROR:something went wrong!')
        }
    })

 async function consumePromise(){
    //its is important to wrap response in a trycatch
    try {
        const response=await myPromise4;
        console.log(`Username: ${response.username}\nPassword: ${response.password}`)
    } catch (error) {
        console.error(error);
    }
 }

 consumePromise();




