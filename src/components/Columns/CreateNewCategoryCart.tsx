import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import { CategoryStateType, HandleCartPropsType } from '../../types/types';
import InputForm from '../ui/InputForm';
import SelectForm from '../ui/SelectForm';
import Button from '../ui/Button';
import { useContext, useState } from 'react';
import {
  CategoryContext,
  UseCategoryContextType,
} from '../../context/categoryContext';

function CreateNewCategoryCart({ onHandleModalCart }: HandleCartPropsType) {
  const { dispatch, REDUCER_ACTIONS } = useContext(
    CategoryContext,
  ) as UseCategoryContextType;
  const [category, setCategory] = useState<string>('');
  const [color, setColor] = useState<string>('green');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newCategory: CategoryStateType = {
      categoryId: Date.now(),
      category,
      color,
      tasksNumber: 0,
    };

    dispatch({ type: REDUCER_ACTIONS.ADD_CATEGORY, payload: newCategory });
  }

  return (
    <CartModal onCloseModalCart={onHandleModalCart}>
      <form className="text-sm" onSubmit={handleSubmit}>
        <CartModalHeader
          onHandleModalCart={onHandleModalCart}
          title="Create New Column"
        />
        <InputForm
          value={category}
          onChange={setCategory}
          title="Column name"
          eg={'SUGGESTION'.toUpperCase()}
        />
        <SelectForm name="Color" value={color} onChange={setColor}>
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
