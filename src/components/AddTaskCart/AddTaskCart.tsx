import Button from '../ui/Button';
import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import AddTaskDescription from './AddTaskDescription';
import AddTaskSelectStatus from './AddTaskSelectStatus';
import AddTaskSubtasks from './AddTaskSubtasks';
import AddTaskTitle from './AddTaskTitle';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTaskCart({ onCloseModalCart }: AddTaskCartPropsType) {
  return (
    <CartModal>
      <form className="text-sm">
        <CartModalHeader
          onCloseModalCart={onCloseModalCart}
          title="Add New Task"
        />
        <AddTaskTitle />
        <AddTaskDescription />
        <AddTaskSubtasks />
        <AddTaskSelectStatus />
        <Button type="primary">Create Task</Button>
      </form>
    </CartModal>
  );
}

export default AddTaskCart;
