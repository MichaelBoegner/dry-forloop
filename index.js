exports.forDry;

Array.prototype.forDry = function(cb, start=0, operator='<=', length='length - 1', iterator='++') {
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
    
    for(index = start; operators[operator](); iterators[iterator]()) {
        solution = cb(index, this[index]);
    }

    return solution;
}





