type TaskPropsType = {
  subtasksCount: number;
  children: string;
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

function Task({ subtasksCount, onOpenTaskDetails, children }: TaskPropsType) {
  return (
    <div
      className="mb-3 w-full rounded-sm bg-slate-800 px-4 py-2"
      onClick={() => onOpenTaskDetails(true)}
    >
      <p className="mb-2 text-slate-200">{children}</p>
      <p className="text-xs text-slate-500">0 / {subtasksCount} subtasks</p>
    </div>
  );
}

export default Task;
