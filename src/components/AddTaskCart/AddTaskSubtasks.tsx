import Button from '../ui/Button';
import AddTaskSubtask from './AddTaskSubtask';
import { SubtaskType } from '../../types/types';

type AddTaskSubtaskType = {
  subtasks: SubtaskType[];
  handleSubtasks: (
    actionType: 'ADD' | 'DELETE' | 'CHANGE',
    subtask?: SubtaskType,
  ) => void;
};

function AddTaskSubtasks({ subtasks, handleSubtasks }: AddTaskSubtaskType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Subtasks</label>
      {subtasks.map((subtask) => (
        <AddTaskSubtask
          key={subtask.id}
          subtask={subtask}
          onAction={handleSubtasks}
        />
      ))}

      <Button type="secondary" onClick={() => handleSubtasks('ADD')}>
        + Add New Subtask
      </Button>
    </div>
  );
}

export default AddTaskSubtasks;
