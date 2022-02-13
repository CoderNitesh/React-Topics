import { produce } from 'immer'

// ********************************* Normaly (Without immer library) *********************************
// Declare Object
let book = {title: 'Life Story'}

function publish(book){
    // set new property or change existing ones....
    book.isPublish = 'true'
}
publish(book)

// Access the property
console.log(book) 
// ********************************* Normaly (Without immer library) Ends *********************************

// ********************************* Immer.js (immer library) *********************************
// Declare Object
let bookWithImmer = {title: 'Life Story'}

function publishWithImmer(book){
    // set new property or change existing ones....
    return produce(book, draftBook => {
        draftBook.isPublish = true;
    });
    // Hey Listen again, We not update our original bookWithImmer object
    // we copy this and perform the several task on that new Object 
    // In our case that was updatedBook Object
}
const updatedBook = publishWithImmer(bookWithImmer)

// Access the property
console.log(updatedBook) 
console.log(bookWithImmer)
// ********************************* Immer.js (immer library) Ends *********************************
