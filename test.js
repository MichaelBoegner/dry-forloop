const forDry = require("./index").forDry 


let array = [1,2,3,4,5];

console.log(forDry(array, (index, element) => {
    console.log(index, element);
    return index;
}));
