const forDry = require('./index');

let array = [1, 2, 3, 4, 5], solution = [];

    array.forDry((e) => {
        array.forDry((f) => {
            solution.push(e + f)
        }, 1)
    });
    
console.log(solution);

