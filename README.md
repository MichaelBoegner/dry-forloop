# dry-forloop #
A drier version of JavaScript's existing forLoop. Like forEach, but with parameters for start, operator, length, and iterator! 

This is an open-source project. We are accepting PRs.

# Syntax #
```javascript
arr.forDry([ start [, operator [, length [, iterator]]]], 
    function callback(element [, index [, array]]){
        //your iterator
    }
);
```

# Parameters #

  * __start__  (Optional)
> Defaults to 0

Variable representing the starting index of the iteration.  Must be a number greater then 0.


  * __operator__  (Optional)
> Defaults to '<='  

Variable representing the operator involved in the current index position comparison with length. Must be entered as a string.  

    Options:  
    '<'  
    '>'  
    '<='  
    '>='  
    '==='  
    '!=='  

  * __length__  (Optional)
> Defaults to 'length - 1'  

Variable representing the length involved in the current index position comparison with length. May be a string or number.  

    Options:  
    'length - 1'  
    'length'  
    Any number  

  * __iterator__  (Optional)
> Defaults to '++'  

Variable representing the stepwise postive/negative direction of the iteration. Must be entered as a string.  

    Options:  
    '++'  
    '--'  

  * __callback__  
Function to execute on each element, taking three arguments:  
    
    element  
        The current element being processed in the array.

    index (Optional)  
        The index of the current element being processed in the array.

    array (Optional)  
        The array forDry() was called upon.

# Return value #  
Defined by user's code in the callback and subsequent return.  

# Description #  
.forDry() calls a provided callback function once for each element in an array.  

The callback is invoked with three arguments:  

the element of the array  
the index of the element  
the array itself

forDry() may or may not mutate the array on which it is called depending on use of the callback. It should be noted that the code does not mutate the Array.prototype itself. Rather, it simply utilizes the given parameters to mutate a standard forLoop and applies these changes to the array variable.  

# Example Code #
    const forDry = require('dry-forloop'); 
    
    let array = [1, 2, 3, 4, 5], solution = [];  

__Basic forLoop__  
    
    array.forDry((e, i) => {
        console.log(e, i);
        }
    );  
    
    Expected return:   
    0 1  
    1 2  
    2 3  
    3 4  
    4 5  


__Start__  
    
    array.forDry(1, null, null, null, (e, i) => {
        console.log(e, i);
        }
    );
    
    Expected return:   
    1 2
    2 3
    3 4
    4 5

__Operator__  
    
    array.forDry(null, '!==', null, null, (e, i) => {
        console.log(e, i);
        }
    );
    
    Expected return:   
    0 1
    1 2
    2 3
    3 4

__Length__  
    
    array.forDry(null, null, 'length', null, (e, i) => {
        console.log(e, i);
        }
    );
    
    Expected return:   
    0 1
    1 2
    2 3
    3 4
    4 5
    5 undefined

__Iterator__  
    
    array.forDry(5, '>', 0, '--', (e, i) => {
        console.log(e, i);
        }
    );
    
    Expected return:   
    5 undefined
    4 5
    3 4
    2 3
    1 2 

__Nested__

    array.forDry((e) => {
        array.forDry(1, (f) => {
            solution.push(e + f);
        })
    });
    
    console.log(solution);

    Expected return: 
    [ 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10 ]
