import {compose, pipe} from 'lodash/fp';

const input = '    Nitesh Shetye     ';
const trimText = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>` // Curring insted of wrap(type, str) we have done wrap(type)(str)
const lowerCase = str => str.toLowerCase();
// ***************************** using Normal method *****************************
const result = wrap('div')(lowerCase(trimText(input))) 
console.log(result)
// At the end we mess up with bunch of prenthesis for solve this problem we use lodash library.
// ***************************** using Normal method End *****************************

// ***************************** using compose *****************************
const transformUsingCompose = compose(wrap('div'), lowerCase, trimText) // read right to left 
transformUsingCompose(input)
// ***************************** using compose End *****************************

// ***************************** using pipe *****************************
const transformUsingPipe = pipe(trimText, lowerCase, wrap('div')) // read left to right
transformUsingPipe(input)
// ***************************** using pipe End *****************************