


function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("N");
}

// sayMyName()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumber(3, 4)

function addTwoNumber(number1 , number2){
    let result = number1 + number2
    return result
    
}
 const result = addTwoNumber(5, 6)

//  console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nitin"));
// console.log(loginUserMessage());
 


function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Nitin",
    price: 199
}
function handleIbject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleIbject(user)
handleIbject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 500, 100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

