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

export type TodoContextType = {
  todos: ItemTodoType[];
  currentTodo: ItemTodoType | null;
  saveTodo: (todo: ItemTodoType) => void;
  updateTodo: (id: number, newStatus: string) => void;
  getTodo: (id: number) => void;
};
