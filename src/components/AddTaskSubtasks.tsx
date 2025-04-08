import { X } from '@phosphor-icons/react';

function AddTaskSubtasks() {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Subtasks</label>
      <div className="mb-1 flex gap-2">
        <input
          id="title"
          type="text"
          className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
          placeholder="e.g Merge branches"
        />
        <button
          type="button"
          className="cursor-pointer duration-300 hover:text-slate-400"
        >
          <X className="text-lg" />
        </button>
      </div>
      <div className="flex gap-2">
        <input
          id="title"
          type="text"
          className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
          placeholder="e.g Merge branches"
        />
        <button
          type="button"
          className="cursor-pointer duration-300 hover:text-slate-400"
        >
          <X className="text-lg" />
        </button>
      </div>
      <button
        type="button"
        className="mt-2 cursor-pointer rounded-sm bg-slate-100 py-1.5 text-slate-800 duration-300 hover:bg-slate-300"
      >
        + Add New Subtask
      </button>
    </div>
  );
}

export default AddTaskSubtasks;
