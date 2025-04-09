import { useState } from 'react';
import Header from './components/Header';
// import NavBoard from './components/NavBoard';
import Todo from './components/Todo';
import AddTaskCart from './components/AddTaskCart/AddTaskCart';
import TaskDetailsCart from './components/TaskDetailsCart';

function App() {
  const [isVisibleCreateTaskForm, setIsVisibleCreateTaskForm] =
    useState<boolean>(false);
  const [isVisibleTaskDetails, setIsVisibleTaskDetails] =
    useState<boolean>(true);

  return (
    <div className="relative">
      {/* <NavBoard /> */}
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
