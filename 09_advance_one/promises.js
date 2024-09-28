const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
        
    }, 1000);
})

promiseOne.then(function name() {
    console.log("Promise consumed");  
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
   
    
}).then(() => {
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "chai",
            email: "chai@emaple.com"
        })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
    
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({
                username: "Nitin",
                password: "123"
            })
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
    
})
console.log(username);
