// var c = 300
let a = 400

if(true){
    let a = 20
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Nitin"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()
}

one()


// ++++++++++++++++ Intresting +++++++++++++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(5)); 
// addtwo(5)
const addtwo = function(num){
    return num +2
}

