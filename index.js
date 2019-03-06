exports.forDry = function(array, cb, operator=null, start=null, length=null, iterator=null) {
        let index;
             
        if(start === null) {
            start = 0; 
        }

        if(length === null) {
            length = array.length - 1; 
        }

        if(iterator === null) {
            iterator = index = index + 1;
        }

        let solution,
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
            }; 

        if(operator === null) {
            operator = '<';
        }

        for(index = start; operators[operator](); index++) {

            solution = cb(index, array[index]);
        }
        
        return solution;
    }





