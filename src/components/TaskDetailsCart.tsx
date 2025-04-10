import { useContext, useState } from 'react';
import Button from './ui/Button';
import CartModal from './ui/CartModal';
import CartModalHeader from './ui/CartModalHeader';
import SelectStatus from './ui/SelectStatus';
import { TodoContext } from '../context/todoContext';
import { TodoContextType } from '../types/types';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function TaskDetailsCart({ onCloseModalCart }: AddTaskCartPropsType) {
  const { currentTodo, updateTodo } = useContext(
    TodoContext,
  ) as TodoContextType;
  const [todoStatus, setTodoStatus] = useState<string>('DONE');

  if (!currentTodo) return <div>Task not found!</div>;

  const subtasks = currentTodo.subtasks;
  const doneSubtasks = subtasks.reduce((acc, cur) => {
    return cur.status ? acc + 1 : acc;
  }, 0);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    console.log(todoStatus);
    if (!currentTodo) return;
    updateTodo(currentTodo.id, todoStatus.toUpperCase());
    onCloseModalCart(false);
  }

  return (
    <CartModal onCloseModalCart={onCloseModalCart}>
      <CartModalHeader
        onHandleModalCart={onCloseModalCart}
        title={currentTodo.title}
      />
      <p className="text-sm/relaxed text-slate-400">
        {currentTodo.description}
      </p>
      <h3 className="mt-6 mb-2 text-sm">
        Subtasks ({doneSubtasks} of {subtasks.length})
      </h3>
      <div className="text-sm">
        {subtasks.map((todo) => (
          <div
            key={todo.id}
            className="mb-1 flex items-center gap-2 rounded-sm bg-slate-800 px-4 py-2"
          >
            <input
              className="h-4 w-4 accent-emerald-500 focus:ring-3 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
              type="checkbox"
              checked={todo.status}
              id={`subtask-${todo.id}`}
            />
            <label htmlFor={`subtask-${todo.id}`}>{todo.task}</label>
          </div>
        ))}
      </div>
      <form onSubmit={handleSave}>
        <div className="mt-6 text-sm">
          <SelectStatus onChange={setTodoStatus} />
        </div>
        <Button type="primary">Save</Button>
      </form>
    </CartModal>
  );
}

export default TaskDetailsCart;
