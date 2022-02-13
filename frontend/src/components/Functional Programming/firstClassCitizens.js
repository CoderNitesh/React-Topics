
// -> Function as First Class Citizens *****************************
function sayHello() {
    return 'Hello Nitesh'
}
let fn = sayHello;                               // Assign to Varaible 
fn();
// ***************************************************************************************
function greet(fnMessage){
    console.log(fnMessage())
}
greet(sayHello)                                  // Pass as an argument 
// ***************************************************************************************
function confidential(){
    return function(){
        console.log('this msg is confidential')  // Return From Other Function
    }
}
let auth = confidential();
auth();
// ***************************************************************************************

// -> Function as First Class Citizens End *****************************
