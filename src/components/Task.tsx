type TaskPropsType = {
  subtasksCount: number;
  children: string;
};

function Task({ subtasksCount, children }: TaskPropsType) {
  return (
    <div className="mb-3 w-full rounded-sm bg-slate-800 px-4 py-2">
      <p className="mb-2 text-slate-200">{children}</p>
      <p className="text-xs text-slate-500">0 / {subtasksCount} subtasks</p>
    </div>
  );
}

export default Task;
