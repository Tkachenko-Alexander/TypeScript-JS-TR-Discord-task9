function logMethod(
    target: any, //  Прототип класса, к которому принадлежит метод.
    propertyName: string, //  Имя метода, который декорируется.
    descriptor: PropertyDescriptor //  Описание свойств метода (включает метод в value).
): void {
    // descriptor: Описание свойства метода. Это объект, который содержит метаданные о свойстве, включая сам метод в descriptor.value.
    const originalMethod = descriptor.value;

    descriptor.value = function (...arg: any[]) {
        console.log(
            `Method ${propertyName} was called with arguments: ${JSON.stringify(
                args
            )}`
        );
        return originalMethod.apply(this, args);
    };
}

class MyClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @logMethod
    sayHello(greeting: string) {
        console.log(`${greeting}, my name is ${this.name}`);
    }

    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

//  Пример использования
const obj = new MyClass("Example");
obj.sayHello("Hello");
console.log(obj.add(2,3));
