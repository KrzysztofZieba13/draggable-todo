import { createContext, useMemo, useReducer } from 'react';
import {
  ItemTodoType,
  ProviderTypes,
  TodoReducerActionType,
  TodoStateType,
} from '../types/types';

const REDUCER_ACTION_TYPE = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  GET_TASK: 'GET_TASK',
  CLOSE_ADD_TASK_CART: 'CLOSE_ADD_TASK_CART',
  OPEN_ADD_TASK_CART: 'OPEN_ADD_TASK_CART',
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

    case REDUCER_ACTION_TYPE.CLOSE_ADD_TASK_CART: {
      return { ...state, isVisibleAddTaskCart: false };
    }

    case REDUCER_ACTION_TYPE.OPEN_ADD_TASK_CART: {
      return { ...state, isVisibleAddTaskCart: true };
    }

    default:
      return state;
  }
}

const initReducerState: TodoStateType = {
  todos: [],
  isVisibleAddTaskCart: false,
};

function useTodoContext() {
  const [{ todos, isVisibleAddTaskCart }, dispatch] = useReducer(
    todoReducer,
    initReducerState,
  );

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  function addTask(newTask: ItemTodoType) {
    dispatch({ type: REDUCER_ACTIONS.ADD_TASK, payload: newTask });
    dispatch({ type: REDUCER_ACTIONS.CLOSE_ADD_TASK_CART });
  }

  return { todos, isVisibleAddTaskCart, addTask, dispatch, REDUCER_ACTIONS };
}

export type UseTodosContextType = ReturnType<typeof useTodoContext>;

const initTodoContextState: UseTodosContextType = {
  todos: [],
  isVisibleAddTaskCart: false,
  addTask: () => {},
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
