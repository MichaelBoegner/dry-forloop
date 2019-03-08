# dry-forloop #
A drier version of JavaScript's existing forLoop. Like forEach, but with parameters for start, operator, length, and iterator! 

This is an open-source project. We are accepting PRs.

# Syntax #
```javascript
arr.forDry(function callback(currentValue [, index [, array]]){
        //your iterator
}[, start [, operator [, length [, iterator]]]]);
```

# Parameters #
1. __callback__  
Function to execute on each element, taking two arguments:  
    
    currentValue 
        The current element being processed in the array.

    index (Optional)
        The index of the current element being processed in the array.

    array (Optional)
        The array forDry() was called upon.

2. __start__  (Optional)
> Defaults to 0

Variable representing the starting index of the iteration.  Must be a number greater then 0.


3. __operator__  (Optional)
> Defaults to '<='  

Variable representing the operator involved in the current index position comparison with length. Must be entered as a string.  

    Options:  
    '<'  
    '>'  
    '<='  
    '>='  
    '==='  
    '!=='  

4. __length__  (Optional)
> Defaults to 'length - 1'  

Variable representing the length involved in the current index position comparison with length. May be a string or number.  

    Options:  
    'length - 1'  
    'length'  
    Any number  

5. __iterator__  (Optional)
> Defaults to '++'  

Variable representing the stepwise postive/negative direction of the iteration. Must be entered as a string.  

    Options:  
    '++'  
    '--'  

# Return value #  
Defined by user's code in the callback and subsequent return.  

# Description #  
.forDry() calls a provided callback function once for each element in an array.  

The callback is invoked with three arguments:  

the element of the array  
the index of the element  
the array itself

forDry() may or may not mutate the array on which it is called depending on use of the callback.  

# Example Code #
    const forDry = require('dry-forloop'); 
    
    let array = [1, 2, 3, 4, 5], solution = [];  

__Basic forLoop__  
    
    array.forDry((element, index) => {console.log(element, index)});  
    
    Expected return:   
    0 1  
    1 2  
    2 3  
    3 4  
    4 5  


__Start__  
    
    array.forDry((element, index) => {console.log(element, index)}, 1);
    
    Expected return:   
    1 2
    2 3
    3 4
    4 5

__Operator__  
    
    array.forDry((element, index) => {console.log(element, index)}, null, '!==');
    
    Expected return:   
    0 1
    1 2
    2 3
    3 4

__Length__  
    
    array.forDry((element, index) => {console.log(element, index)}, null, null, 'length');
    
    Expected return:   
    0 1
    1 2
    2 3
    3 4
    4 5
    5 undefined

__Iterator__  
    
    array.forDry((element, index) => {console.log(element, index)}, 5, '>', 0, '--');
    
    Expected return:   
    5 undefined
    4 5
    3 4
    2 3
    1 2 

__Nested__

    array.forDry((e) => {
        array.forDry((f) => {
            solution.push(e + f)
        }, 1)
    });
    
    console.log(solution);

    Expected return: 
    [ 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10 ]
