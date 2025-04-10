import Button from '../ui/Button';
import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import InputForm from '../ui/InputForm';
import SelectForm from '../ui/SelectForm';
import AddTaskDescription from './AddTaskDescription';
import AddTaskSubtasks from './AddTaskSubtasks';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTaskCart({ onCloseModalCart }: AddTaskCartPropsType) {
  return (
    <CartModal>
      <form className="text-sm">
        <CartModalHeader
          onHandleModalCart={onCloseModalCart}
          title="Add New Task"
        />
        <InputForm title="Title" eg="Merge branches" />
        <AddTaskDescription />
        <AddTaskSubtasks />
        <SelectForm name="Status">
          <option className="bg-slate-800">Todo</option>
          <option className="bg-slate-800">Doing</option>
          <option className="bg-slate-800">Done</option>
        </SelectForm>
        <Button type="primary">Create Task</Button>
      </form>
    </CartModal>
  );
}

export default AddTaskCart;
