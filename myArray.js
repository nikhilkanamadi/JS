class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop(){
        const element = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
     }

}

const array =  new myArray();
console.log(array);
console.log(array.length);
array.push(1);
console.log(array);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
console.log(array);
console.log(array.pop());