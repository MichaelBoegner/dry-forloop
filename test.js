const forDry = require('./index');

let array = [1,2,3,4,5]; 

array.forDry((e) => {
    console.log(e);
}, 5, '>=', 0, '--')