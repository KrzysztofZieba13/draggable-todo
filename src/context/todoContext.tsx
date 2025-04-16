import { createContext, useMemo, useReducer } from 'react';
import {
  ItemTodoType,
  ProviderTypes,
  TodoReducerActionType,
  TodoStateType,
  UpdateTaskDataType,
} from '../types/types';

const REDUCER_ACTION_TYPE = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  GET_TASK: 'GET_TASK',
  OPEN_ADD_TASK_CART: 'OPEN_ADD_TASK_CART',
  CLOSE_ADD_TASK_CART: 'CLOSE_ADD_TASK_CART',
  OPEN_TASK_DETAILS_CART: 'OPEN_TASK_DETAILS_CART',
  CLOSE_TASK_DETAILS_CART: 'CLOSE_TASK_DETAILS_CART',
} as const;

function todoReducer(
  state: TodoStateType,
  action: TodoReducerActionType,
): TodoStateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_TASK: {
      const newTask = action.payload;

      if (!newTask)
        throw new Error('action.payload missing in ADD_TASK action');

      return { ...state, todos: [...state.todos, newTask] };
    }

    case REDUCER_ACTION_TYPE.UPDATE_TASK: {
      const updatedTask = action.payload;

      if (!updatedTask)
        throw new Error('action.payload missing in UPDATE_TASK action');

      const itemExist = state.todos.find((todo) => todo.id === updatedTask.id);

      if (!itemExist) throw new Error("Requested item doesn't exist in todos");

      const updatedTodos = state.todos.map((todo) =>
        todo.id === updatedTask.id ? { ...todo, ...updatedTask.changes } : todo,
      );

      return { ...state, todos: updatedTodos };
    }

    case REDUCER_ACTION_TYPE.OPEN_ADD_TASK_CART: {
      return { ...state, isVisibleAddTaskCart: true };
    }

    case REDUCER_ACTION_TYPE.CLOSE_ADD_TASK_CART: {
      return { ...state, isVisibleAddTaskCart: false };
    }

    case REDUCER_ACTION_TYPE.OPEN_TASK_DETAILS_CART: {
      return {
        ...state,
        isVisibleTaskDetailsCart: true,
        selectedTask: action.payload,
      };
    }

    case REDUCER_ACTION_TYPE.CLOSE_TASK_DETAILS_CART: {
      return {
        ...state,
        isVisibleTaskDetailsCart: false,
      };
    }

    default:
      return state;
  }
}

const initReducerState: TodoStateType = {
  todos: [],
  isVisibleAddTaskCart: false,
  isVisibleTaskDetailsCart: false,
  selectedTask: {
    id: '',
    title: '',
    description: '',
    subtasks: [],
    status: '',
  },
};

function useTodoContext() {
  const [
    { todos, isVisibleAddTaskCart, isVisibleTaskDetailsCart, selectedTask },
    dispatch,
  ] = useReducer(todoReducer, initReducerState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  function addTask(newTask: ItemTodoType) {
    dispatch({ type: REDUCER_ACTIONS.ADD_TASK, payload: newTask });
    dispatch({ type: REDUCER_ACTIONS.CLOSE_ADD_TASK_CART });
  }

  function closeTaskDetailsCart(update: UpdateTaskDataType) {
    dispatch({ type: REDUCER_ACTIONS.UPDATE_TASK, payload: update });
    dispatch({ type: REDUCER_ACTIONS.CLOSE_TASK_DETAILS_CART });
  }

  return {
    todos,
    isVisibleAddTaskCart,
    isVisibleTaskDetailsCart,
    addTask,
    closeTaskDetailsCart,
    selectedTask,
    dispatch,
    REDUCER_ACTIONS,
  };
}

export type UseTodosContextType = ReturnType<typeof useTodoContext>;

const initTodoContextState: UseTodosContextType = {
  ...initReducerState,
  addTask: () => {},
  closeTaskDetailsCart: () => {},
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const TodoContext =
  createContext<UseTodosContextType>(initTodoContextState);

function TodoProvider({ children }: ProviderTypes) {
  return (
    <TodoContext.Provider value={useTodoContext()}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
