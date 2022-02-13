const person = { name: 'Nitesh' }
// One way to copy
const updated = Object.assign({}, person) // One way to Copy 
console.log(updated)

// Another way to copy
const updated1 = {...person, name: 'bob', age:43}  // using spread operator
console.log(updated1)

// For nested object dont use this method refer the method below
const person1 = {
    name: 'bob',
    address: {
        country: 'INDIA', 
        city: 'Mumbai'
    }
}
/*
const updatePerson1 = {...person, name: 'chinku'}
console.log(updatePerson1)
// if we change the address property of updatePerson1 than it also change the address property of person1 
updatePerson1.address.city = 'Pune'
// now if we check the person1 city it will be the change to Pune 
console.log(person1)
// to avoid this we need to do something like this
*/

// For nested object this method use 
const updatePerson1 = {
    ...person,
    address: {
        ...person.address,
        city: 'Pune'
    },
    name: 'chinku'
}
console.log(updatePerson1)
console.log(person1) // this will not change to pune now 
