exports.forDry = function(array, cb, start=0, length=(array.length-1), operator='<', iterator='++') {
            
        let solution,
            index = start,
            operators = {
                '>': () => {
                        return index > length; 
                    }, 
                '<': () => {
                        return index < length; 
                    }, 
                '>=': () => {
                        return index >= length; 
                    }, 
                '<=': () => {
                        return index <= length; 
                    }, 
                '!==': () => {
                        return index !== length; 
                    }, 
            },
            iterators = {
                '++': () => {
                        return index++; 
                    },
                '--': () => {
                        return index--; 
                    },  
            }; 

        for(index = start; operators[operator](); iterators[iterator]()) {
            solution = cb(index, array[index]);
        }
        
        return solution;
    }





