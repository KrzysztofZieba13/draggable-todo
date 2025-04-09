import { X } from '@phosphor-icons/react';
import Button from '../ui/Button';

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
      <Button type="secondary">+ Add New Subtask</Button>
    </div>
  );
}

export default AddTaskSubtasks;
