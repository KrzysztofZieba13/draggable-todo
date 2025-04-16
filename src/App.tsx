import { useContext, useState } from 'react';
import Header from './components/Header';
import NavBoard from './components/Navigation/NavBoard';
import Todo from './components/Todo';
import AddTaskCart from './components/AddTaskCart/AddTaskCart';
import TaskDetailsCart from './components/TaskDetailsCart';
import CreateNewCategoryCart from './components/Columns/CreateNewCategoryCart';
import { TodoContext, UseTodosContextType } from './context/todoContext';

function App() {
  const { isVisibleAddTaskCart } = useContext<UseTodosContextType>(TodoContext);

  const [isVisibleTaskDetails, setIsVisibleTaskDetails] =
    useState<boolean>(false);
  const [isVisibleCreateColumn, setIsVisibleCreateColumn] =
    useState<boolean>(false);

  console.log(isVisibleAddTaskCart);

  return (
    <div className="relative lg:grid lg:grid-cols-[2fr_6fr]">
      <NavBoard />
      <Header />
      <Todo
        onOpenTaskDetails={setIsVisibleTaskDetails}
        onOpenCreateColumn={setIsVisibleCreateColumn}
      />
      {isVisibleAddTaskCart && <AddTaskCart />}
      {isVisibleTaskDetails && (
        <TaskDetailsCart onCloseModalCart={setIsVisibleTaskDetails} />
      )}
      {isVisibleCreateColumn && (
        <CreateNewCategoryCart onHandleModalCart={setIsVisibleCreateColumn} />
      )}
    </div>
  );
}

export default App;
