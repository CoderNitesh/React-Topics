// Take a function as perameter
function sayHello(){
    return 'Hello Nitesh.'
}
function greet(fnMessage){
    console.log(fnMessage())
}
greet(sayHello)        

// Return the function
function confidential(){
    return function(){
        console.log('this msg is confidential')  // Return From Other Function
    }
}
const message = confidential()
message()