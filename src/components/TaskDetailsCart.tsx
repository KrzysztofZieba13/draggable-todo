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
  const { currentTask, dispatch, REDUCER_ACTIONS } = useContext(
    TodoContext,
  ) as UseTodosContextType;
  const [todoStatus, setTodoStatus] = useState<string>('');

  useEffect(() => {
    if (currentTask) {
      setTodoStatus(currentTask.status.toUpperCase());
    }
  }, [currentTask]);

  if (!currentTask) return <div>Task not found!</div>;

  const doneSubtasks = currentTask.subtasks.filter((s) => s.status).length;

  function handleUpdateSubtask(todoId: number) {
    if (!currentTask) return;

    const updatedSubtasks: SubtaskType[] = currentTask.subtasks.map(
      (subtask) =>
        subtask.id === todoId
          ? { ...subtask, status: !subtask.status }
          : subtask,
    );

    dispatch({
      type: REDUCER_ACTIONS.UPDATE_TASK,
      payload: { ...currentTask, subtasks: updatedSubtasks },
    });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!currentTask) return;
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_TASK,
      payload: { ...currentTask, status: todoStatus },
    });
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
        Subtasks ({doneSubtasks} of {currentTask.subtasks.length})
      </h3>
      <div className="text-sm">
        {currentTask.subtasks.map((todo) => (
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
          <SelectStatus
            onChange={setTodoStatus}
            curState={currentTask.status}
          />
        </div>
        <Button type="primary">Save</Button>
      </form>
    </CartModal>
  );
}

export default TaskDetailsCart;
