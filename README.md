# dry-forloop #
A drier version of Javascript's existing forLoop. Like forEach, but with parameters for start, operator, length, and iterator! 


# Syntax #
arr.forDry(function callback(currentValue [, index [, array]]) {
    //your iterator
}[, thisArg]);

# Parameters #
1. __callback__  
Function to execute on each element, taking two arguments:  
    index  
        The index of the current element being processed in the array.  
    element  
        The element at the given index in the array.  

2. __start__  
Variable representing the starting index of the iteration.  

    Defaults to 0.  

3. __operator__  
Variable representing the operator involved in the current index position comparison with length. Must be entered as a string.  

    Options:  
    '<'  
    '>'  
    '<='  
    '>='  
    '==='  
    '!=='  
    -Defaults to '<='  

4. __length__  
Variable representing the length involved in the current index position comparison with length. Must be entered as a string.  

    Options:  
    'length - 1'  
    'length'  
    Defaults to 'length - 1'  

5. __iterator__  
Variable representing the stepwise postive/negative direction of the iteration. Must be entered as a string.  

    Options:  
    '++'  
    '--'  
    Defaults to '++'  

# Return value #  
Defined by user's code in the callback and subsequent return.  

# Description #  
forDry() calls a provided callback function once for each element in an array.  

callback is invoked with two arguments:  

the index of the element  
the element of the array  

forDry() executes the callback function once for each array element. The typical use case is manipulation of an iterable.  

forDry() may or may not mutate the array on which it is called depending on use of the callback.  