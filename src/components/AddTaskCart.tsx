import AddTaskCartHeader from './AddTaskCartHeader';
import AddTaskTitle from './AddTaskTitle';
import AddTaskDescription from './AddTaskDescription';
import AddTaskSubtasks from './AddTaskSubtasks';
import AddTaskSelectStatus from './AddTaskSelectStatus';

type AddTaskCartPropsType = {
  onCloseTaskFormCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTaskCart({ onCloseTaskFormCart }: AddTaskCartPropsType) {
  return (
    <div className="fixed inset-0 z-20 overflow-y-auto bg-slate-900/50 text-slate-50 backdrop-blur-xs">
      <div className="relative mx-auto mt-10 max-h-[90vh] w-10/12 overflow-auto rounded-md bg-slate-700">
        <form className="p-4 text-sm">
          <AddTaskCartHeader onCloseTaskFormCart={onCloseTaskFormCart} />
          <AddTaskTitle />
          <AddTaskDescription />
          <AddTaskSubtasks />
          <AddTaskSelectStatus />
          <button className="mt-2 w-full cursor-pointer rounded-sm bg-emerald-500 py-1.5 duration-300 hover:bg-emerald-600">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskCart;
