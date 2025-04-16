import { FormEvent, useContext, useState } from 'react';
import Button from './ui/Button';
import CartModal from './ui/CartModal';
import CartModalHeader from './ui/CartModalHeader';
import SelectStatus from './ui/SelectStatus';
import { TodoContext, UseTodosContextType } from '../context/todoContext';
import { UpdateTaskDataType } from '../types/types';

function TaskDetailsCart() {
  const { dispatch, REDUCER_ACTIONS, selectedTask, closeTaskDetailsCart } =
    useContext<UseTodosContextType>(TodoContext);

  const [newStatus, setNewStatus] = useState<string>(selectedTask.status || '');

  function handleUpdateTask(e: FormEvent) {
    e.preventDefault();

    const update: UpdateTaskDataType = {
      id: selectedTask.id,
      changes: { status: newStatus },
    };

    closeTaskDetailsCart(update);
  }

  function handleCloseModalCart() {
    dispatch({ type: REDUCER_ACTIONS.CLOSE_TASK_DETAILS_CART });
  }

  return (
    <CartModal onCloseModalCart={handleCloseModalCart}>
      <CartModalHeader
        onHandleModalCart={handleCloseModalCart}
        title={selectedTask.title}
      />
      <p className="text-sm/relaxed text-slate-400">{'DESC'}</p>
      <h3 className="mt-6 mb-2 text-sm">
        Subtasks ({0} of {1})
      </h3>
      <div className="text-sm">
        <div className="mb-1 flex items-center gap-2 rounded-sm bg-slate-800 px-4 py-2">
          <input
            className="h-4 w-4 accent-emerald-500 focus:ring-3 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            checked={false}
            id={`subtask-1`}
            // onChange={() => handleUpdateSubtask(todo.id)}
          />
          <label htmlFor={`subtask-1`}>Subtask1</label>
        </div>
      </div>
      <form onSubmit={handleUpdateTask}>
        <div className="mt-6 text-sm">
          <SelectStatus task={newStatus} onChange={setNewStatus} />
        </div>
        <Button type="primary">Save</Button>
      </form>
    </CartModal>
  );
}

export default TaskDetailsCart;
