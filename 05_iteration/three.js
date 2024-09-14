// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps

const newMap = new Map()
newMap.set('IN', "India")
newMap.set('USA', "United State of America")
newMap.set('Fr', "France")
newMap.set('In', "India")

// console.log(newMap);

for (const [key, value] of newMap) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);

}
