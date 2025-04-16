import { useContext, useState } from 'react';
import Header from './components/Header';
import NavBoard from './components/Navigation/NavBoard';
import Todo from './components/Todo';
import AddTaskCart from './components/AddTaskCart/AddTaskCart';
import TaskDetailsCart from './components/TaskDetailsCart';
import CreateNewCategoryCart from './components/Columns/CreateNewCategoryCart';
import { TodoContext, UseTodosContextType } from './context/todoContext';

function App() {
  const { isVisibleAddTaskCart, isVisibleTaskDetailsCart } =
    useContext<UseTodosContextType>(TodoContext);

  const [isVisibleCreateColumn, setIsVisibleCreateColumn] =
    useState<boolean>(false);

  return (
    <div className="relative lg:grid lg:grid-cols-[2fr_6fr]">
      <NavBoard />
      <Header />
      <Todo onOpenCreateColumn={setIsVisibleCreateColumn} />
      {isVisibleAddTaskCart && <AddTaskCart />}
      {isVisibleTaskDetailsCart && <TaskDetailsCart />}
      {isVisibleCreateColumn && (
        <CreateNewCategoryCart onHandleModalCart={setIsVisibleCreateColumn} />
      )}
    </div>
  );
}

export default App;
