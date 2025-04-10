import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import { HandleCartPropsType } from '../../utils/types';
import InputForm from '../ui/InputForm';
import SelectForm from '../ui/SelectForm';
import Button from '../ui/Button';

function CreateNewCategoryCart({ onHandleModalCart }: HandleCartPropsType) {
  return (
    <CartModal>
      <form className="text-sm">
        <CartModalHeader
          onHandleModalCart={onHandleModalCart}
          title="Create New Column"
        />
        <InputForm title="Column name" eg={'SUGGESTION'.toUpperCase()} />
        <SelectForm name="Color">
          <option className="bg-slate-800">Green</option>
          <option className="bg-slate-800">Yellow</option>
          <option className="bg-slate-800">Red</option>
          <option className="bg-slate-800">Blue</option>
          <option className="bg-slate-800">Orange</option>
          <option className="bg-slate-800">Pink</option>
        </SelectForm>
        <Button type="primary">Create Task</Button>
      </form>
    </CartModal>
  );
}

export default CreateNewCategoryCart;
