/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo < 0 || indexOfTodo >= this.todos.length) return this.todos;
    this.todos.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    if(index < 0 || index >= this.todos.length) return this.todos;
    this.todos[index] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexOfTodo < 0 || indexOfTodo >= this.todos.length) return null;
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = [];
  }
}
let newTodo = new Todo();
// newTodo.add("Learn JavaScript");
// newTodo.add("Practice Coding");
// console.log(newTodo.getAll()); // ["Learn JavaScript", "Practice Coding"]
// newTodo.update(1, "Practice JavaScript");
// console.log(newTodo.get(1)); // "Practice JavaScript"
// console.log(newTodo.getAll()); // ["Learn JavaScript", "Practice JavaScript"]
// newTodo.add("Build Projects");
// console.log(newTodo.getAll());
// newTodo.remove(1);
// console.log(newTodo.getAll());
// newTodo.update(-1, "******");
// console.log(newTodo.getAll());
// newTodo.clear();
// console.log(newTodo.getAll()); // []

module.exports = Todo;
 