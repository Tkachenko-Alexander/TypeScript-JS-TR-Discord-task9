interface ITimestamp {
    readonly timestamp: number;
    updateTimestamp(): void;
}

function Timestamp<T extends { new (... args: any[]): {} }>(constructor: T) {




    return class extends constructor {
        private _timestamp: number = Date.now();

        get timestamp(): number {
            return this._timestamp;
        }

        updateTimestamp(): void {
            this._timestamp = Date.now();
        }
    };
}

@Timestamp
class MyClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Пример использования
const obj = new MyClass("Example") as MyClass & ITimestamp;
// as MyClass & ITimestamp  что бы ts знал о новых способностях и не ругался. Альтернатива - использовать // @ts-ignore

console.log(`Initial timestamp: ${obj.timestamp}`);
setTimeout(() => {
    obj.updateTimestamp();
    console.log(`Update timestamp; ${obj.timestamp}`);    
}, 2000);
