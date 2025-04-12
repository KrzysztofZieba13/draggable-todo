import Button from '../ui/Button';
import AddTaskSubtask from './AddTaskSubtask';
import { SubtaskType } from '../../types/types';

type AddTaskSubtaskType = {
  subtasks: SubtaskType[];
  handleSubtask: (item: SubtaskType) => void;
  handleAddSubtask: () => void;
  handleDeleteSubtask: (item: SubtaskType) => void;
};

function AddTaskSubtasks({
  subtasks,
  handleAddSubtask,
  handleSubtask,
  handleDeleteSubtask,
}: AddTaskSubtaskType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Subtasks</label>
      {Array.from({ length: subtasks.length }).map((_, index) => (
        <AddTaskSubtask
          key={index}
          index={index}
          onDelete={handleDeleteSubtask}
          value={subtasks[index]}
          onChange={handleSubtask}
        />
      ))}

      <Button type="secondary" onClick={handleAddSubtask}>
        + Add New Subtask
      </Button>
    </div>
  );
}

export default AddTaskSubtasks;
