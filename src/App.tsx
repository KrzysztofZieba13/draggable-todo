import { useState } from 'react';
import Header from './components/Header';
import NavBoard from './components/Navigation/NavBoard';
import Todo from './components/Todo';
import AddTaskCart from './components/AddTaskCart/AddTaskCart';
import TaskDetailsCart from './components/TaskDetailsCart';

function App() {
  const [isVisibleCreateTaskForm, setIsVisibleCreateTaskForm] =
    useState<boolean>(false);
  const [isVisibleTaskDetails, setIsVisibleTaskDetails] =
    useState<boolean>(false);

  return (
    <div className="relative lg:grid lg:grid-cols-[2fr_6fr]">
      <NavBoard />
      <Header onOpenTaskFormCart={setIsVisibleCreateTaskForm} />
      <Todo onOpenTaskDetails={setIsVisibleTaskDetails} />
      {isVisibleCreateTaskForm && (
        <AddTaskCart onCloseModalCart={setIsVisibleCreateTaskForm} />
      )}
      {isVisibleTaskDetails && (
        <TaskDetailsCart onCloseModalCart={setIsVisibleTaskDetails} />
      )}
    </div>
  );
}

export default App;
