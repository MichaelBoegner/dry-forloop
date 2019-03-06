const forDry = require("./index") 


let array = [1,2,3,4,5], solution = []; 

console.log(forDry.forDry(array, (param, param2) => {
   solution.push(param + 1);
   return solution;

}));
