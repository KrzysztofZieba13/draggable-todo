export type CartModalHeaderPropsType = {
  title: string;
  onHandleModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HandleCartPropsType = {
  onHandleModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SubtaskType = {
  id: number;
  task: string;
  status: boolean;
};

export interface ItemTodoType {
  id: number;
  title: string;
  description: string;
  subtasks: SubtaskType[];
  status: string;
}

export type TodoStateType = {
  todos: ItemTodoType[];
  currentTask?: ItemTodoType;
};

export type CategoryStateType = {
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

export type TodoReducerActionType =
  | { type: string; payload: ItemTodoType }
  | {
      type: string;
      payload: { id: number; changes: Partial<ItemTodoType> };
    }
  | { type: string; payload: { id: number } };

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
