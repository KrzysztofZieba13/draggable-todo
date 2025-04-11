import { useContext } from 'react';
import { TodoContext, UseTodosContextType } from '../context/todoContext';
import { ItemTodoType, SubtaskType } from '../types/types';

type TaskPropsType = {
  subtasks: SubtaskType[];
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
  task: ItemTodoType;
  children: string;
};

function Task({ subtasks, onOpenTaskDetails, task, children }: TaskPropsType) {
  const { dispatch, REDUCER_ACTIONS } = useContext(
    TodoContext,
  ) as UseTodosContextType;

  function handleClick() {
    onOpenTaskDetails(true);
    dispatch({ type: REDUCER_ACTIONS.GET_TASK, payload: task });
  }

  const doneSubtasks = subtasks.reduce((acc, cur) => {
    return cur.status ? acc + 1 : acc;
  }, 0);

  return (
    <div
      className="mb-3 w-full rounded-sm bg-slate-800 px-4 py-2"
      onClick={handleClick}
    >
      <p className="mb-2 text-slate-200">{children}</p>
      <p className="text-xs text-slate-500">
        {doneSubtasks} / {subtasks.length} subtasks
      </p>
    </div>
  );
}

export default Task;
