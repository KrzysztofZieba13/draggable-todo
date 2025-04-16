export type CartModalHeaderPropsType = {
  title: string;
  onHandleModalCart: () => void;
};

export type HandleCartPropsType = {
  onHandleModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SubtaskType = {
  id: string;
  task: string;
  status: boolean;
};

export interface ItemTodoType {
  id: string;
  title: string;
  description: string;
  subtasks: SubtaskType[];
  status: string;
}

export type TodoStateType = {
  todos: ItemTodoType[];
  isVisibleAddTaskCart: boolean;
  isVisibleTaskDetailsCart: boolean;
  selectedTask: ItemTodoType;
};

export type CategoryStateType = {
  categoryId: number;
  category: string;
  color: string;
  tasksNumber: number;
};

export type TodoContextType = {
  todos: ItemTodoType[];
  currentTodo: ItemTodoType | null;
  saveTodo: (todo: ItemTodoType) => void;
  updateTodo: (id: number, newStatus: string, subtasks: SubtaskType[]) => void;
  getTodo: (id: number) => void;
};

export type UpdateTaskDataType = { id: string; changes: Partial<ItemTodoType> };

export type TodoReducerActionType =
  | { type: 'ADD_TASK'; payload: ItemTodoType }
  | { type: 'CLOSE_ADD_TASK_CART' }
  | { type: 'OPEN_ADD_TASK_CART' }
  | { type: 'OPEN_TASK_DETAILS_CART'; payload: ItemTodoType }
  | { type: 'CLOSE_TASK_DETAILS_CART' }
  | {
      type: 'UPDATE_TASK';
      payload: UpdateTaskDataType;
    }
  | { type: 'DELETE_TASK'; payload: { id: number } };

export type CategoryReducerActionType =
  | {
      type: 'ADD_CATEGORY';
      payload: CategoryStateType;
    }
  | { type: 'REMOVE_CATEGORY'; payload: { category: string } }
  | {
      type: 'UPDATE_CATEGORY';
      payload: Partial<CategoryStateType> & { category: string };
    };

export type ProviderTypes = {
  children: React.ReactNode;
};
