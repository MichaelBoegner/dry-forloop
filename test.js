const forDry = require('./index');


//Basic For Loop
let array = [1, 2, 3, 4, 5], solution = [];
array.forDry((element, index) => {solution.push([element,index])});  
console.log(`Basic For Loop Test: ${solution = [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ] ? "Passed":"Failed"}`);

//Start at 1
array = [1, 2, 3, 4, 5], solution = [];
array.forDry((element, index) => {solution.push([element,index])}, 1);
console.log(`Start at 1 Test: ${solution = [ [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ] ? "Passed":"Failed"}`);

//Operator 
array = [1, 2, 3, 4, 5], solution = [];
array.forDry((element, index) => {solution.push([element,index])}, null, '!==');
console.log(`Operator Test: ${solution = [ [ 2, 1 ], [ 3, 2 ], [ 4, 3 ]] ? "Passed":"Failed"}`);

//Length
array = [1, 2, 3, 4, 5], solution = [];
array.forDry((element, index) => {solution.push([element,index])}, null, null, 'length');
console.log(`Length Test: ${solution = [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ],[undefined,5]] ? "Passed":"Failed"}`);

//Iterator
array = [1, 2, 3, 4, 5], solution = [];
array.forDry((element, index) => {solution.push(element, index)}, 5, '>', 0, '--');
console.log(`Iterator Test: ${solution = [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ],[undefined,5]].reverse() ? "Passed":"Failed"}`);


//Nested 
array = [1, 2, 3, 4, 5], solution = [];
array.forDry((e) => {
    array.forDry((f) => {
        solution.push(e + f)
    }, 1)
});
    
console.log(`Nested Test: ${solution = [ 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10 ] ? "Passed":"Failed"}`); //should return [ 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10 ]



