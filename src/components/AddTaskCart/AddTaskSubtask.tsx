import { X } from '@phosphor-icons/react';
import { SubtaskType } from '../../types/types';

type AddTaskSubtaskType = {
  value: SubtaskType;
  index: number;
  onChange: (item: SubtaskType) => void;
  onDelete: (item: SubtaskType) => void;
};

function AddTaskSubtask({
  onDelete,
  index,
  value,
  onChange,
}: AddTaskSubtaskType) {
  return (
    <div className="mb-1 flex gap-2">
      <input
        id="title"
        type="text"
        className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder="e.g Merge branches"
        value={value.task}
        onChange={(e) =>
          onChange({ id: index, task: e.target.value, status: false })
        }
      />
      <button
        type="button"
        className="cursor-pointer duration-300 hover:text-slate-400"
        onClick={() => onDelete(value)}
      >
        <X className="text-lg" />
      </button>
    </div>
  );
}

export default AddTaskSubtask;
