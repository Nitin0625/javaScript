const user = {
    username: "Nitin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "Nitin"
//     console.log(this.username);   
// }

// chai()

const chai = () => {
    let username = "Nitin"
    console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(5, 7));

// const myArray = [2,5,3,7,8]

// myArray.forEach()
