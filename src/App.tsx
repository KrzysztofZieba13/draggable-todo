import { useState } from 'react';
import AddTaskCart from './components/AddTaskCart';
import Header from './components/Header';
// import NavBoard from './components/NavBoard';
import Todo from './components/Todo';

function App() {
  const [isVisibleCreateTaskForm, setIsVisibleCreateTaskForm] =
    useState<boolean>(false);

  return (
    <div className="relative">
      {/* <NavBoard /> */}
      <Header onOpenTaskFormCart={setIsVisibleCreateTaskForm} />
      <Todo />
      {isVisibleCreateTaskForm && (
        <AddTaskCart onCloseTaskFormCart={setIsVisibleCreateTaskForm} />
      )}
    </div>
  );
}

export default App;
