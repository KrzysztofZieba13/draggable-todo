import TodoColumn from './TodoColumn';

function Todo() {
  return (
    <div className="mt-16 min-h-dvh bg-slate-900">
      <TodoColumn category="TODO" circleColor="green" />
      <TodoColumn category="DOING" circleColor="red" />
      <TodoColumn category="DONE" circleColor="blue" />
      <TodoColumn category="SUGGESTED" circleColor="yellow" />
    </div>
  );
}

export default Todo;
