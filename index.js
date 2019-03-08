exports.forDry;

Array.prototype.forDry = function(cb, index=0, operator='<=', length='length - 1', iterator='++') {
    let solution = [];
        const operators = {
            '>': () => {
                    if(lengths[length] === undefined) {
                        return index > length;
                    } else {
                        return index > lengths[length](); 
                    }
                }, 
            '<': () => {
                    if(lengths[length] === undefined) {
                        return index < length;
                    } else {
                        return index < lengths[length](); 
                    }
                }, 
            '>=': () => {
                    if(lengths[length] === undefined) {
                        return index >= length;
                    } else {
                        return index >= lengths[length](); 
                    }
                }, 
            '<=': () => {
                    if(lengths[length] === undefined) {
                        return index <= length;
                    } else {
                        return index <= lengths[length](); 
                    }
                }, 
            '!==': () => {
                    if(lengths[length] === undefined) {
                        return index !== length;
                    } else {
                        return index !== lengths[length](); 
                    }
                }, 
            '===': () => {
                    if(lengths[length] === undefined) {
                        return index === length;
                    } else {
                        return index === lengths[length](); 
                    }
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
    
    for(index; operators[operator](); iterators[iterator]()) {
        solution = cb(this[index], index);
    }

    return solution;
}





