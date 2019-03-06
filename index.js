exports.forDry = function(array, letter=null, start=null, length=null, operator=null, iterator=null) {
        let i; 

        if(letter === null) {
            letter = i;
        }

        if(start === null) {
            start = 0; 
        }

        if(length === null) {
            length = array.length; 
        }

        if(operator === null) {
           operator = `${letter} < ${length}`; 
        }

        if(iterator === null) {
            iterator = letter++;
        }

        let solution = [];
        
        for(letter = start; letter < length; letter++) {
           solution.push(array[letter]);
        }
        
        return solution;
    }





