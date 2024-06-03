import Todo from "./Todo";

const Todolist = ({ numbers, toggleTodo }) => {
  return numbers.map((number) => {
    return <Todo key={number.id} numbers={number} toggleTodo={toggleTodo} />;
  });
};

export default Todolist;
