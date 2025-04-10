import { createContext, useMemo, useReducer } from 'react';
import {
  ItemTodoType,
  TodoReducerActionType,
  TodoStateType,
} from '../types/types';

const REDUCER_ACTION_TYPE = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE',
  GET_TASK: 'GET_TASK',
};

function todoReducer(
  state: TodoStateType,
  action: TodoReducerActionType,
): TodoStateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TASK: {
      if (!action.payload)
        throw new Error('action.payload missing in ADD_TASK action');
      return { ...state, todos: [...state.todos, action.payload] };
    }

    case REDUCER_ACTION_TYPE.UPDATE_TASK: {
      if (!action.payload)
        throw new Error('action.payload missing in UPDATE_TASK action');

      const { id, status, subtasks } = action.payload;

      if (!id) throw new Error('id missing in UPDATE_TASK action.payload');

      const updatedTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, status, subtasks } : todo,
      );

      return { ...state, todos: [...updatedTodo] };
    }

    case REDUCER_ACTION_TYPE.GET_TASK: {
      if (!action.payload)
        throw new Error('action payload missing in GET_TASK action');

      const { id: taskId } = action.payload;

      const requestedTask: ItemTodoType | undefined = state.todos.find(
        (todo: ItemTodoType) => todo.id === taskId,
      );

      if (!requestedTask) throw new Error('Task not found');
      return { ...state, currentTask: requestedTask };
    }

    default:
      return state;
  }
}

// const initTodoState: TodoStateType = { todos: [] };

function useTodoContext() {
  const [{ todos, currentTask }, dispatch] = useReducer(todoReducer, {
    todos: [
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
    ],
  });

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  return { todos, currentTask, dispatch, REDUCER_ACTIONS };
}

export type UseTodosContextType = ReturnType<typeof useTodoContext>;

const initTodoContextState: UseTodosContextType = {
  todos: [],
  currentTask: undefined,
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const TodoContext =
  createContext<UseTodosContextType>(initTodoContextState);

type ProviderTypes = {
  children: React.ReactNode;
};

function TodoProvider({ children }: ProviderTypes) {
  // const [currentTodo, setCurrentTodo] = useState<ItemTodoType | null>(null);

  // function saveTodo(todo: ItemTodoType) {
  //   const newTodo: ItemTodoType = {
  //     id: Math.random(),
  //     title: todo.title,
  //     description: todo.description,
  //     subtasks: todo.subtasks,
  //     status: todo.status,
  //   };

  //   setTodos([...todos, newTodo]);
  // }

  // function updateTodo(id: number, newStatus: string, subtasks: SubtaskType[]) {
  //   todos.filter((todo: ItemTodoType) => {
  //     if (todo.id === id) {
  //       todo.subtasks = subtasks;
  //       todo.status = newStatus;
  //       setTodos([...todos]);
  //     }
  //   });
  // }

  return (
    <TodoContext.Provider value={useTodoContext()}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
