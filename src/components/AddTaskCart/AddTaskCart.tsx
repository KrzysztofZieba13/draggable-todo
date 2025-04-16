import { v4 as randomId } from 'uuid';
import { FormEvent, useContext, useState } from 'react';
import Button from '../ui/Button';
import CartModal from '../ui/CartModal';
import CartModalHeader from '../ui/CartModalHeader';
import InputForm from '../ui/InputForm';
import AddTaskDescription from './AddTaskDescription';
import AddTaskSubtasks from './AddTaskSubtasks';
import { ItemTodoType, SubtaskType } from '../../types/types';
import { TodoContext, UseTodosContextType } from '../../context/todoContext';

function AddTaskCart() {
  const { addTask, dispatch, REDUCER_ACTIONS } =
    useContext<UseTodosContextType>(TodoContext);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [subtasks, setSubtasks] = useState<SubtaskType[]>([]);

  function handleSubtasks(
    actionType: 'ADD' | 'DELETE' | 'CHANGE',
    subtask?: SubtaskType,
  ) {
    if (actionType === 'ADD') {
      const newSubtask: SubtaskType = {
        id: randomId(),
        task: '',
        status: false,
      };
      setSubtasks((state) => [...state, newSubtask]);
    }

    // Guard statement
    if (!subtask) return;

    if (actionType === 'CHANGE')
      setSubtasks((state) =>
        state.map((cur) =>
          cur.id === subtask.id ? { ...cur, task: subtask.task } : cur,
        ),
      );

    if (actionType === 'DELETE') {
      const filteredSubtasks = subtasks.filter(
        (currSubtask) => currSubtask.id !== subtask.id,
      );

      setSubtasks(filteredSubtasks);
    }
  }

  function handleAddSubtask(e: FormEvent) {
    e.preventDefault();

    const newTask: ItemTodoType = {
      id: randomId(),
      title,
      description,
      subtasks,
      status: 'TODO',
    };

    addTask(newTask);
  }

  return (
    <CartModal
      onCloseModalCart={() =>
        dispatch({ type: REDUCER_ACTIONS.CLOSE_ADD_TASK_CART })
      }
    >
      <form className="text-sm" onSubmit={handleAddSubtask}>
        <CartModalHeader
          onHandleModalCart={() =>
            dispatch({ type: REDUCER_ACTIONS.CLOSE_ADD_TASK_CART })
          }
          title="Add New Task"
        />
        <InputForm
          inputLabel="Task name"
          inputValue={title}
          exampleValue="Merge branches"
          onChangeInputValue={setTitle}
        />
        <AddTaskDescription
          descValue={description}
          onChangeDescValue={setDescription}
        />
        <AddTaskSubtasks handleSubtasks={handleSubtasks} subtasks={subtasks} />

        <Button type="primary">Create Task</Button>
      </form>
    </CartModal>
  );
}

export default AddTaskCart;
