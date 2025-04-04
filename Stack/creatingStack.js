class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear all elements from the stack
    clear() {
        this.items = [];
    }

    // Print the elements of the stack
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 10,20,30

console.log(stack.pop()); // 30
stack.print(); // 10,20

console.log(stack.peek()); // 20
console.log(stack.size()); // 2

stack.clear();
console.log(stack.isEmpty()); // true

















class stackOne{
    constructor(){
        this.items=[]
    }
      push(element){
        this.items.push(element);

      }

      pop(){
        if(this.isEmpty()){
            return "stack is empty";
        }
      }
      peek(){
        if(this.isEmpty()){
            return "stack is empty";

        }
        return this.items[items.length-1];
      }
      isempty(){
        if(this.length===0){
            return "Stack is Empty"
        }
      }
      size(){
        return this.items.length;
      }
      clear(){
        return this.items=[]
      }
      print(){
        console.log(this.items.toString());
      }
    
}
stackOne=new stackOne()
stackOne.push(1);
console.log(stackOne)