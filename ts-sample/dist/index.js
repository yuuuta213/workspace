'use strict';

const exportedValue = 1;
const exportedFunction = (input) => {
    return input * 2;
};

console.log(exportedValue);
console.log(exportedFunction(128));
