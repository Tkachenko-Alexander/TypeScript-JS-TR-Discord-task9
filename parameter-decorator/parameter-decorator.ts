function logParameter(
    target: any,
    propertyName: string,
    parameterIndex: number
) {
    console.log(
        `Parameter in method ${propertyName} at index ${parameterIndex} is being decorated`
    );    
}

class MyClass {
    greet(@logParameter message: string) {
        console.log(message);        
    }
}

// Пример использования
const obj = new MyClass();
obj.greet("Hello, world!");
