class StringBuilder {
    #value
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue(str) {
        return this.#value;
    }
    padStart(str) {
       this.#value = `${str}${this.#value}` ;

    }
    padEnd(str) {
        this.#value = `${this.#value}${str}`;
    }
    padBoth(str) {
       this.#value = `${str}${this.#value}${str}`;
    }

}

const builder = new StringBuilder(".");
console.log('builder:', builder)
console.log(builder.getValue()); // "."
builder.padStart("^");

console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
