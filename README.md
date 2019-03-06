# dry-forloop
A drier version of Javascript's existing forLoop. Like forEach, but with parameters for start, operator, length, and iterator! 


#SyntaxSection
arr.forDry(function callback(currentValue [, index [, array]]) {
    //your iterator
}[, thisArg]);

#ParametersSection
__callback__
Function to execute on each element, taking two arguments:
    index
        The index of the current element being processed in the array.
    element
        The element at the given index in the array.

#Return value
Defined by user's code in the callback and subsequent return. 


DescriptionSection
forDry() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

callback is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed
If a thisArg parameter is provided to forDry(), it will be used as callback's this value.  Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

The range of elements processed by forDry() is set before the first invocation of callback. Elements which are appended to the array after the call to forDry() begins will not be visited by callback. If existing elements of the array are changed, or deleted, their value as passed to callback will be the value at the time forDry() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped - see example below.

forDry() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

forDry() does not mutate the array on which it is called (although callback, if invoked, may do so).