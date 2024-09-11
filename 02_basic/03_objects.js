// singlton ==> lteral se singleton nahi banta hai contructor se banta hai

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nitin",
    "full Name": "Nitin Mishra",
    [mySym]: "myKey1",
    age: 21,
    location: "Varanasi",
    email: "nitin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "nitinmishra@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
