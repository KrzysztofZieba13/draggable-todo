import { X } from '@phosphor-icons/react';
import { SubtaskType } from '../../types/types';

type AddTaskSubtaskType = {
  subtask: SubtaskType;
  onAction: (
    actionType: 'ADD' | 'DELETE' | 'CHANGE',
    subtask?: SubtaskType,
  ) => void;
};

function AddTaskSubtask({ subtask, onAction }: AddTaskSubtaskType) {
  return (
    <div className="mb-1 flex gap-2">
      <input
        type="text"
        className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder="e.g Merge branches"
        value={subtask.task}
        onChange={(e) =>
          onAction('CHANGE', {
            id: subtask.id,
            task: e.target.value,
            status: false,
          })
        }
      />
      <button
        type="button"
        className="cursor-pointer duration-300 hover:text-slate-400"
        onClick={() => onAction('DELETE', subtask)}
      >
        <X className="text-lg" />
      </button>
    </div>
  );
}

export default AddTaskSubtask;
