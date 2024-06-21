"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function logMethod(target, //  Прототип класса, к которому принадлежит метод.
propertyName, //  Имя метода, который декорируется.
descriptor //  Описание свойств метода (включает метод в value).
) {
    // descriptor: Описание свойства метода. Это объект, который содержит метаданные о свойстве, включая сам метод в descriptor.value.
    const originalMethod = descriptor.value;
    descriptor.value = function (...arg) {
        console.log(`Method ${propertyName} was called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}
let MyClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _sayHello_decorators;
    let _add_decorators;
    return _a = class MyClass {
            constructor(name) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
            }
            sayHello(greeting) {
                console.log(`${greeting}, my name is ${this.name}`);
            }
            add(a, b) {
                return a + b;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sayHello_decorators = [logMethod];
            _add_decorators = [logMethod];
            __esDecorate(_a, null, _sayHello_decorators, { kind: "method", name: "sayHello", static: false, private: false, access: { has: obj => "sayHello" in obj, get: obj => obj.sayHello }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
//  Пример использования
const obj = new MyClass("Example");
obj.sayHello("Hello");
console.log(obj.add(2, 3));
