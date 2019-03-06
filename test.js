const forDry = require('./index').forDry

let array = [1,2,3,4,5]; 


array.forDry((index, element) => {console.log(index, element)}, 5, '>', 0, '--');


