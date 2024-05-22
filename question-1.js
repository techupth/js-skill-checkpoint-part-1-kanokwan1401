// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ id: myTodo.length + 1, todo: "Walk the dog" });
// console.log(myTodo);

let newTodo = myTodo.map((todo) => {
  if (todo.id === 4) {
    return { id: 4, todo: "Go to the gym" };
  } else return todo;
});
newTodo.pop();

console.log(
  `To-do id: ${newTodo[newTodo.length - 1].id},  ${
    newTodo[newTodo.length - 1].todo
  }`
);
