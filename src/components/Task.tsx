import { useContext } from 'react';
import { TodoContext, UseTodosContextType } from '../context/todoContext';
import { ItemTodoType } from '../types/types';
import { useDraggable } from '@dnd-kit/core';

type TaskPropsType = {
  task: ItemTodoType;
  children: string;
};

function Task({ task, children }: TaskPropsType) {
  const { dispatch, REDUCER_ACTIONS } =
    useContext<UseTodosContextType>(TodoContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      className="mb-3 w-full rounded-sm bg-slate-800 px-4 py-2"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      onClick={() =>
        dispatch({
          type: REDUCER_ACTIONS.OPEN_TASK_DETAILS_CART,
          payload: task,
        })
      }
    >
      <div>
        <p className="mb-2 text-slate-200">{children}</p>
        <p className="text-xs text-slate-500">
          {task.subtasks.reduce((acc, cur) => acc + (cur.status ? 1 : 0), 0)}/{' '}
          {task.subtasks.length} subtasks
        </p>
      </div>
    </div>
  );
}

export default Task;
