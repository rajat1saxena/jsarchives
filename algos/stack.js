/*eslint-env node*/
// Stacks implementation, based on JS arrays
let stack = (size) => {
    let top = -1;
    let arr = [];
    
    return () => ({
        push: (item) => {
            if (top === size - 1) {
                throw new Error('Stack overflow');
            }
            top += 1;
            arr[top] = item;
        },
        pop: () => {
            if (top === -1) {
                throw new Error('Stack underflow');
            }
            top = top - 1;
            return arr[top + 1];
        },
        isEmpty: () => top === -1
    });
};

exports.stack = stack;

//// Driver program
//let mystack = stack(3)();
//mystack.push('rajat');
//mystack.push('saxena');
//mystack.push('rashmi');
////mystack.push('ravi');
//console.log(mystack.pop());
//console.log(mystack.pop());
//console.log(mystack.pop());
////console.log(mystack.pop());