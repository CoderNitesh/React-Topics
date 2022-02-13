
// Without Currying
/*
function add(a,b){
    console.log(a+b)
}
const resultOfAddition = add(1,2)
console.log(resultOfAddition)
*/

// With Currying 
function add(a){
    return function(b){
        console.log(a+b)
    }
}
const resultOfAddition = add(1)(2)
console.log(resultOfAddition)



