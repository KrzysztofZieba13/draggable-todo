import Button from './ui/Button';
import CartModal from './ui/CartModal';
import CartModalHeader from './ui/CartModalHeader';
import SelectStatus from './ui/SelectStatus';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function TaskDetailsCart({ onCloseModalCart }: AddTaskCartPropsType) {
  return (
    <CartModal onCloseModalCart={onCloseModalCart}>
      <CartModalHeader onHandleModalCart={onCloseModalCart} title={'title'} />
      <p className="text-sm/relaxed text-slate-400">{'DESC'}</p>
      <h3 className="mt-6 mb-2 text-sm">
        Subtasks ({0} of {1})
      </h3>
      <div className="text-sm">
        <div className="mb-1 flex items-center gap-2 rounded-sm bg-slate-800 px-4 py-2">
          <input
            className="h-4 w-4 accent-emerald-500 focus:ring-3 focus:ring-emerald-400 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            checked={false}
            id={`subtask-1`}
            // onChange={() => handleUpdateSubtask(todo.id)}
          />
          <label htmlFor={`subtask-1`}>Subtask1</label>
        </div>
      </div>
      <form>
        <div className="mt-6 text-sm">
          <SelectStatus />
        </div>
        <Button type="primary">Save</Button>
      </form>
    </CartModal>
  );
}

export default TaskDetailsCart;
