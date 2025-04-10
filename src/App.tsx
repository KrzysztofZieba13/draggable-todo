import { useState } from 'react';
import Header from './components/Header';
import NavBoard from './components/Navigation/NavBoard';
import Todo from './components/Todo';
import AddTaskCart from './components/AddTaskCart/AddTaskCart';
import TaskDetailsCart from './components/TaskDetailsCart';
import CreateNewCategoryCart from './components/Columns/CreateNewCategoryCart';
import TodoProvider from './context/todoContext';

function App() {
  const [isVisibleCreateTaskForm, setIsVisibleCreateTaskForm] =
    useState<boolean>(false);
  const [isVisibleTaskDetails, setIsVisibleTaskDetails] =
    useState<boolean>(false);
  const [isVisibleCreateColumn, setIsVisibleCreateColumn] =
    useState<boolean>(false);

  return (
    <TodoProvider>
      <div className="relative lg:grid lg:grid-cols-[2fr_6fr]">
        <NavBoard />
        <Header onOpenTaskFormCart={setIsVisibleCreateTaskForm} />
        <Todo
          onOpenTaskDetails={setIsVisibleTaskDetails}
          onOpenCreateColumn={setIsVisibleCreateColumn}
        />
        {isVisibleCreateTaskForm && (
          <AddTaskCart onCloseModalCart={setIsVisibleCreateTaskForm} />
        )}
        {isVisibleTaskDetails && (
          <TaskDetailsCart onCloseModalCart={setIsVisibleTaskDetails} />
        )}
        {isVisibleCreateColumn && (
          <CreateNewCategoryCart onHandleModalCart={setIsVisibleCreateColumn} />
        )}
      </div>
    </TodoProvider>
  );
}

export default App;
