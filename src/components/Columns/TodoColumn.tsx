import { useContext } from 'react';
import Task from '../Task';
import { TodoContext, UseTodosContextType } from '../../context/todoContext';
import { ItemTodoType } from '../../types/types';
import { useDroppable } from '@dnd-kit/core';

type TodoColumnPropsType = {
  circleColor: string;
  category: 'TODO' | 'DOING' | 'DONE' | string;
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

type CircleStyleColorType = {
  [key: string]: string;
};

function TodoColumn({
  circleColor,
  onOpenTaskDetails,
  category,
}: TodoColumnPropsType) {
  const { setNodeRef } = useDroppable({ id: category });
  const { todos } = useContext(TodoContext) as UseTodosContextType;

  const circleStyleColor: CircleStyleColorType = {
    green: 'bg-emerald-300',
    yellow: 'bg-amber-300',
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    orange: 'bg-orange-300',
    pink: 'bg-pink-300',
  };

  return (
    <div className="p-4 lg:px-0" ref={setNodeRef}>
      <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
        <div
          className={`h-3 w-3 rounded-full ${circleStyleColor[circleColor]}`}
        ></div>
        {category} ( 4 )
      </div>
      {todos.map((todo: ItemTodoType) => {
        if (todo.status !== category) return;
        return (
          <Task
            key={todo.id}
            subtasks={todo.subtasks}
            onOpenTaskDetails={onOpenTaskDetails}
            task={todo}
          >
            {todo.title}
          </Task>
        );
      })}
    </div>
  );
}

export default TodoColumn;
