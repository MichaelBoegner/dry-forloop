const forDry = require('./index').forDry

let array = [1,2,3,4,5]; 

console.log(array.forDry((i, e) => {console.log(i, e)}))