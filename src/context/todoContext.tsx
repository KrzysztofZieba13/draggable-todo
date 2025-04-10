import { createContext, useState } from 'react';
import { ItemTodoType, TodoContextType } from '../types/types';

export const TodoContext = createContext<TodoContextType | null>(null);

type ProviderTypes = {
  children: React.ReactNode;
};

function TodoProvider({ children }: ProviderTypes) {
  const [todos, setTodos] = useState<ItemTodoType[]>([
    {
      id: 1,
      title: 'Task to do 1',
      description:
        'Merge frontend branch and backend branch after achieve first milestone',
      subtasks: [
        { task: 'Subtask 1', status: false },
        { task: 'Subtask 2', status: true },
        { task: 'Subtask 3', status: false },
      ],
      status: 'TODO',
    },
    {
      id: 2,
      title: 'Task to do 2',
      description:
        'Merge frontend branch and backend branch after achieve first milestone',
      subtasks: [
        { task: 'Subtask 1', status: false },
        { task: 'Subtask 2', status: true },
        { task: 'Subtask 3', status: false },
      ],
      status: 'DOING',
    },
    {
      id: 3,
      title: 'Task to do 3',
      description:
        'Merge frontend branch and backend branch after achieve first milestone',
      subtasks: [
        { task: 'Subtask 1', status: false },
        { task: 'Subtask 2', status: true },
        { task: 'Subtask 3', status: false },
      ],
      status: 'DONE',
    },
  ]);

  function saveTodo(todo: ItemTodoType) {
    const newTodo: ItemTodoType = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      subtasks: todo.subtasks,
      status: todo.status,
    };

    setTodos([...todos, newTodo]);
  }

  function updateTodo(id: number) {
    todos.filter((todo: ItemTodoType) => {
      if (todo.id === id) {
        todo.status = 'DONE';
        setTodos([...todos]);
      }
    });
  }

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
