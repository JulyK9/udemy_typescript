"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
//# sourceMappingURL=app.js.map