"use strict";
var _decorate = (this && this._decorate) || function (_decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorates.length - 1; i >= 0; i--) if ( d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Timestamp(constructor) {




    return class extends constructor {
        constructor(){
            super(...arguments);
            this._timestamp = Date.now();
        }
        get timestamp() {
            return this._timestamp;
        }
        updateTimestamp() {
            this._timestamp = Date.now();
        }
    };
}
let MyClass = class MyClass {
    constructor(name) {
        this.name = name;
    }
};
MyClass = __decorate([
    Timestamp,
    __metadata("design:paramtypes", [String])
], MyClass);
// Пример использования
const obj = new MyClass("Example");
// as MyClass & ITimestamp чтобы ts  знал о новых способностях и не ругался. Альтернатива - использовать  // @ts-ignore
console.log(`Initial timestamp: ${obj.timestamp}`);
setTimeout(() => {
    obj.updateTimestamp();
    console.log(`Updated timestamp: ${obj.timestamp}`);
}, 2000);