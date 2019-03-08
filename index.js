exports.forDry;

Array.prototype.forDry = function(cb, index=0, operator, length, iterator) {


        //es6 default values only trigger on undefined and not null, this will trigger on anything false (including 0)
        operator = operator || '<=';
        length = length||'length - 1';
        iterator = iterator||'++';
        //special case since 0 is considered false for the above methods
        index == 'null'? index = 0 : "";

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
        cb(this[index], index, this);
    }

    return;
}





