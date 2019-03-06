exports.forDry;

Array.prototype.forDry = function(cb, start=null, operator=null, length=null, iterator=null) {
    
    if(start === null) {
        start = 0;
    }
    
    let solution,
        index = start,
        operators = {
            '>': () => {
                    if(lengths[length] === undefined) {
                        return index > length;
                    } else {
                        return index > lengths[length](); 
                    }
                }, 
            '<': () => {
                    return index < lengths[length](); 
                }, 
            '>=': () => {
                    return index >= lengths[length](); 
                }, 
            '<=': () => {
                    return index <= lengths[length](); 
                }, 
            '!==': () => {
                    return index !== lengths[length](); 
                }, 
            '===': () => {
                    return index === lengths[length](); 
                },    
        },
        iterators = {
            '++': () => {
                    return index++; 
                },
            '--': () => {
                    return index--; 
                },  
        },
        lengths = {
            'length - 1': () => {
                    return this.length - 1; 
                },
            'length': () => {
                    return this.length; 
                },  
        }; 


    if(operator === null) {
        operator = '<=';
    }
    
    if(length === null) {
        length = 'length - 1';
    }

    if(iterator === null) {
        iterator = '++'; 
    }
    
    for(index = start; operators[operator](); iterators[iterator]()) {
        solution = cb(index, this[index]);
    }

    return solution;
}





