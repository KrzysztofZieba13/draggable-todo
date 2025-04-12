import { FormEvent, useContext, useState } from 'react';
import Button from '../ui/Button';
import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import InputForm from '../ui/InputForm';
import SelectForm from '../ui/SelectForm';
import AddTaskDescription from './AddTaskDescription';
import AddTaskSubtasks from './AddTaskSubtasks';
import { ItemTodoType, SubtaskType } from '../../types/types';
import { TodoContext, UseTodosContextType } from '../../context/todoContext';

type AddTaskCartPropsType = {
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTaskCart({ onCloseModalCart }: AddTaskCartPropsType) {
  const { dispatch, REDUCER_ACTIONS } = useContext(
    TodoContext,
  ) as UseTodosContextType;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [subtasksItem, setSubtasksItem] = useState<SubtaskType[]>([]);
  const [status, setStatus] = useState<string>('TODO');

  function handleSubtask(item: SubtaskType) {
    const subtaskExist = subtasksItem.find(
      (subtaskItem) => subtaskItem.id === item.id,
    );

    if (subtaskExist) {
      setSubtasksItem((prevItems) =>
        prevItems.map((subtask) =>
          subtask.id === item.id ? { ...subtask, ...item } : subtask,
        ),
      );
    } else {
      setSubtasksItem((prevItems) => [...prevItems, item]);
    }
  }

  function handleAddSubtask() {
    const initSubtask: SubtaskType = {
      id: subtasksItem.length,
      task: '',
      status: false,
    };

    setSubtasksItem((prevItems) => [...prevItems, initSubtask]);
  }

  function handleDeleteSubtask(item: SubtaskType) {
    const filteredSubtasks = subtasksItem.filter(
      (subtaks) => subtaks.id !== item.id,
    );

    setSubtasksItem(filteredSubtasks);
  }

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
    const task: ItemTodoType = {
      id: Number(
        Math.floor(Math.random() * 1000)
          .toString()
          .slice(0, 3),
      ),
      title,
      description,
      subtasks: subtasksItem,
      status: status.toUpperCase(),
    };

    console.log(task);

    dispatch({ type: REDUCER_ACTIONS.ADD_TASK, payload: task });
    onCloseModalCart(false);
  }

  return (
    <CartModal onCloseModalCart={onCloseModalCart}>
      <form className="text-sm" onSubmit={handleCreateTask}>
        <CartModalHeader
          onHandleModalCart={onCloseModalCart}
          title="Add New Task"
        />
        <InputForm
          title="Title"
          eg="Merge branches"
          onChange={setTitle}
          value={title}
        />
        <AddTaskDescription value={description} onChange={setDescription} />
        <AddTaskSubtasks
          handleSubtask={(item) => handleSubtask(item)}
          subtasks={subtasksItem}
          handleAddSubtask={handleAddSubtask}
          handleDeleteSubtask={handleDeleteSubtask}
        />
        <SelectForm name="Status" onChange={setStatus} value={status}>
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
