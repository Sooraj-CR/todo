const Todo = ({ numbers, toggleTodo }) => {
  function handletodoClick() {
    toggleTodo(numbers.id);
  }
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handletodoClick}></input>
        {numbers.name}
      </label>
    </div>
  );
};

export default Todo;
