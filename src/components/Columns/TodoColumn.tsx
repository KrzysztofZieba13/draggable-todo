import { useContext } from 'react';
import Task from '../Task';
import { useDroppable } from '@dnd-kit/core';
import { TodoContext, UseTodosContextType } from '../../context/todoContext';
import NoTask from '../NoTask';

type TodoColumnPropsType = {
  circleColor: string;
  category: 'TODO' | 'DOING' | 'DONE' | string;
};

type CircleStyleColorType = {
  [key: string]: string;
};

function TodoColumn({ circleColor, category }: TodoColumnPropsType) {
  const { todos } = useContext<UseTodosContextType>(TodoContext);
  const { setNodeRef } = useDroppable({ id: category });

  const circleStyleColor: CircleStyleColorType = {
    green: 'bg-emerald-300',
    yellow: 'bg-amber-300',
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    orange: 'bg-orange-300',
    pink: 'bg-pink-300',
  };

  const selectedTodos = todos.filter((todo) => todo.status === category);
  const noTodos = selectedTodos.length === 0;

  return (
    <div className="p-4 lg:px-0" ref={setNodeRef}>
      <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
        <div
          className={`h-3 w-3 rounded-full ${circleStyleColor[circleColor]}`}
        ></div>
        {category} ({selectedTodos.length})
      </div>
      {noTodos ? (
        <NoTask />
      ) : (
        selectedTodos.map((task) => (
          <Task task={task} key={task.id}>
            {task.title}
          </Task>
        ))
      )}
    </div>
  );
}

export default TodoColumn;
