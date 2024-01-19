# BIG O NOTATION  
  
Big O notation is used to analyze time and space complexity of an algorithm as the input increases.  
    > f(n) could be linear if f(n) = n  
    > f(n) could be quadratic if f(n) = n^2  
    > f(n) could be constant if f(n) = 1  
  
## TIME COMPLEXITY  
  
### Varying time complexity  
  
When we have a complicated O exp, we can simplify it to just n.  
So we say, O here has 5n + 2 operations, but we can say it has n operations.  
Constants don't matter here. So 13n^2 would still be n^2.  
  
```javascript  

function addUpTo(n) {  
    let total = 0;  
    for (let i = 0; i <= n; i++) {  
        total += i;  
    }  
    return total;  
}  

```  
  
### Constant time complexity  
  
When we have a constant O exp, we can simplify it to just 1.  
So we say, O here has 3 operations, but we can say it has 1 operation.  
  
```javascript  

const addUpToNum = n => n * (n + 1) / 2;  

```  
  
When we have a polynomium, we keep n and raise it to its highest degree.  
So, O(n^2 + 8n - 4) can be said as O(n^2).  
  
### Big O shorthands:  
  
Arithmetic operations are constant.  
Var assignment is constant.  
Accessing indexes or keys is constant.  
The complexity of a loop is the length of the loop times whatever happens inside the loop.  
  
## SPACE COMPLEXITY  
  
Space complexity is the amount of memory used by the alg as n increases.  
Primitives are constant except for str. Str require O(n) space where n = str.length.  
Reference types are generally O(n), where n is the num of indexes or keys.  
  
```javascript  

function sumOfArray(arr) {  
    let total = 0;  
    for (let i = 0; i < arr.length; i++) {  
        total += arr[i];  
    }  
    return total;  
}  

```  
  
The space this fn takes can be calculated as such:   
    total: number   
    i: number  
So we have two vars, constant space  
  
```javascript  

function doubleElsOfArr(arr) {  
    let newArr = [];  
    for (let i = 0; i < arr.length; i++) {  
        newArr.push(arr[i] * 2);  
    }  
    return newArr;  
}  

```  
  
Here, the space complexity is: newArr: number[], i: number. However, each el of newArr is defined  
by the arg. This means that this fn has O(n) Sc  
  
Logarithms: log base (value) = exponent --> base^exponent = value.  
log2 8 = 3 because 2^3 = 8.  
log10 1000 = 3 because 10^3.  
The ln (natural log) is the same as loge  
  
### Apply Big O to:  
  
#### Objects  
  
Insertion: O(1)  
Removal: O(1)  
Access: O(1)  
Searching: O(n)  
  
#### Arrays  
  
Insertion: (.push)? O(1) : (.unshift)? O(n)   
Removal: (.pop)? O(1) : (.shift)? O(n)   
Access: O(1)  
Searching: O(n)

# RECURSION  
  
Recursion is when a function calls itself when declared. We use it as an alternative to long loops.  
A basic recursive function is consisted of the following:  
    > A starting variable  
    > A conditional statement for the base case  
    > Excecution commands, or standard code  
    > A return value  
    > Calling itself with a different input  

### Helper method recursion

Helper method recursion is when a recursive function, called the helper, is contained  
within another function, called the outer, which calls the helper method.  
A basic function with helper method recursion consists of the following:  

```javascript

function outer(input) {
    let outerVar;

    function helper(helperInput) {
        // Code to modify outerVar
		helper(helperInput--)
    }

	helper(input);
	return outerVar;
}

```  
