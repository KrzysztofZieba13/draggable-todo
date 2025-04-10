import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, SubtaskType } from '../types/types';

type TaskPropsType = {
  subtasks: SubtaskType[];
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
  taskId: number;
  children: string;
};

function Task({
  subtasks,
  onOpenTaskDetails,
  taskId,
  children,
}: TaskPropsType) {
  const { getTodo } = useContext(TodoContext) as TodoContextType;

  function handleClick() {
    onOpenTaskDetails(true);
    getTodo(taskId);
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
