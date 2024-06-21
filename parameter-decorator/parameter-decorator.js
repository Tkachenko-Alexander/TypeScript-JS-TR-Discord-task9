"use strict";
function logParameter(target, propertyName, parameterIndex) {
    console.log(`Parameter in method ${propertyName} at index ${parameterIndex} is being decorated`);
}
class MyClass {
    greet(message) {
        console.log(message);
    }
}
// Пример использования
const obj = new MyClass();
obj.greet("Hello, world!");
