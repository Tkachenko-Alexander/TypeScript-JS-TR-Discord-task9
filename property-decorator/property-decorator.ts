function logParameter(
    target: any,
    propertyName: string
) {
    let value: any;

    const getter = () => value;
    const setter = (newValue: any) => {
        console.log(`Setting value of ${propertyName} to: ${newValue}`);
        value = newValue;        
    };
    
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });    
}

class MyClass {
    @logProperty
    public name: string; 
    
    constructor(name: string) {
        this.name = name
    }
}

// Пример использования
const obj = new MyClass("Example");
obj.name = "New Example";
console.log(obj.name);
