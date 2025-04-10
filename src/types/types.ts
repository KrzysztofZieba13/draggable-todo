export type CartModalHeaderPropsType = {
  title: string;
  onHandleModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HandleCartPropsType = {
  onHandleModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

type SubtaskType = {
  task: string;
  status: boolean;
};

export interface ItemTodoType {
  id: number;
  title: string;
  description: string;
  subtasks: SubtaskType[];
  status: 'TODO' | 'DOING' | 'DONE' | string;
}

export type TodoContextType = {
  todos: ItemTodoType[];
  saveTodo: (todo: ItemTodoType) => void;
  updateTodo: (id: number) => void;
};
