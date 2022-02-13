import {Map} from 'immutable'


// ********************************* Normaly (Without immutable library) *********************************
// Declare Object
let book = {title: 'Life Story'}

function publish(book){
    // set new property or change existing ones....
    book.isPublish = 'true'
}
publish(book)

// Access the property
console.log(book) 
// ********************************* Normaly (Without immutable library) Ends *********************************

// ********************************* Immutable.js (With immutable library) *********************************
// Declare Object
let bookUsingImmutable = Map({title: 'Life Story'}) // convert to Immutable DataStructure

function publishImmutableBook(){
    // set new property or change existing ones....
    return bookUsingImmutable.set('isPublish', true)
    // Hey listen, the above code not gone change the original object to bookUsingImmutable
    // So we need to return the value from this function and re-assign to the bookUsingImmutable
    // to reflect the changes
}
bookUsingImmutable = publishImmutableBook()


// Access the Property
console.log(bookUsingImmutable.get('title'))
console.log(bookUsingImmutable.get('isPublish'))

// Access plane js object
console.log(bookUsingImmutable.toJS())
// ********************************* Immutable.js (With immutable library) Ends *********************************

