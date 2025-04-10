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
        { id: 1, task: 'Subtask 1', status: false },
        { id: 2, task: 'Subtask 2', status: true },
        { id: 3, task: 'Subtask 3', status: false },
      ],
      status: 'TODO',
    },
    {
      id: 2,
      title: 'Task to do 2',
      description:
        'Merge frontend branch and backend branch after achieve first milestone',
      subtasks: [
        { id: 1, task: 'Subtask 1', status: false },
        { id: 2, task: 'Subtask 2', status: true },
        { id: 3, task: 'Subtask 3', status: false },
      ],
      status: 'DOING',
    },
    {
      id: 3,
      title: 'Task to do 3',
      description:
        'Merge frontend branch and backend branch after achieve first milestone',
      subtasks: [
        { id: 1, task: 'Subtask 1', status: false },
        { id: 2, task: 'Subtask 2', status: true },
        { id: 3, task: 'Subtask 3', status: false },
      ],
      status: 'DONE',
    },
  ]);

  const [currentTodo, setCurrentTodo] = useState<ItemTodoType | null>(null);

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

  function updateTodo(id: number, newStatus: string) {
    todos.filter((todo: ItemTodoType) => {
      if (todo.id === id) {
        todo.status = newStatus;
        setTodos([...todos]);
      }
    });
  }

  function getTodo(id: number) {
    if (!todos) return;

    const todo: ItemTodoType | undefined = todos.find(
      (todo: ItemTodoType) => todo.id === id,
    );

    setCurrentTodo(todo || null);
  }

  return (
    <TodoContext.Provider
      value={{ todos, currentTodo, saveTodo, updateTodo, getTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
