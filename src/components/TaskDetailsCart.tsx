import { useContext, useEffect, useState } from 'react';
import Button from './ui/Button';
import CartModal from './ui/CartModal';
import CartModalHeader from './ui/CartModalHeader';
import SelectStatus from './ui/SelectStatus';
import { TodoContext, UseTodosContextType } from '../context/todoContext';
import { SubtaskType } from '../types/types';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function TaskDetailsCart({ onCloseModalCart }: AddTaskCartPropsType) {
  const { currentTask } = useContext(TodoContext) as UseTodosContextType;
  const [todoStatus, setTodoStatus] = useState<string>('');
  const [subtasks, setSubtasks] = useState<SubtaskType[]>([]);

  useEffect(() => {
    if (currentTask) {
      setTodoStatus(currentTask.status.toUpperCase());
      setSubtasks(currentTask.subtasks);
    }
  }, [currentTask]);

  if (!currentTask) return <div>Task not found!</div>;

  const doneSubtasks = subtasks.filter((s) => s.status).length;

  function handleUpdateSubtask(todoId: number) {
    const updatedSubtasks: SubtaskType[] = subtasks.map((subtask) =>
      subtask.id === todoId ? { ...subtask, status: !subtask.status } : subtask,
    );
    setSubtasks(updatedSubtasks);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    console.log(todoStatus);
    if (!currentTask) return;
    // updateTodo(currentTask.id, todoStatus.toUpperCase(), subtasks);
    onCloseModalCart(false);
  }

  return (
    <CartModal onCloseModalCart={onCloseModalCart}>
      <CartModalHeader
        onHandleModalCart={onCloseModalCart}
        title={currentTask.title}
      />
      <p className="text-sm/relaxed text-slate-400">
        {currentTask.description}
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
              onChange={() => handleUpdateSubtask(todo.id)}
            />
            <label htmlFor={`subtask-${todo.id}`}>{todo.task}</label>
          </div>
        ))}
      </div>
      <form onSubmit={handleSave}>
        <div className="mt-6 text-sm">
          <SelectStatus onChange={setTodoStatus} curState={todoStatus} />
        </div>
        <Button type="primary">Save</Button>
      </form>
    </CartModal>
  );
}

export default TaskDetailsCart;
