const tinderUser = new Object()


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    emai: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nitin",
            lastname: "Mishra"
        }
        
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a",  2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Nitin"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Nitin",
//     "coursename": "JS in Hindi",
//     "price": "free"
    
// }


