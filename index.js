exports.forDry = function(array, cb, start=0, operator='<', length='length - 1', iterator='++') {
        let solution,
            index = start,
            operators = {
                '>': () => {
                        return index > lengths[length](); 
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
                        return array.length - 1; 
                    },
                'length': () => {
                        return array.length; 
                    },  
            }; 

        for(index = start; operators[operator](); iterators[iterator]()) {
            solution = cb(index, array[index]);
        }

        return solution;
    }





