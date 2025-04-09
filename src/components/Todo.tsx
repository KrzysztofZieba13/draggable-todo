import TodoColumn from './TodoColumn';

type TodoPropsType = {
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ onOpenTaskDetails }: TodoPropsType) {
  return (
    <div className="mt-16 min-h-dvh bg-slate-900">
      <TodoColumn
        category="TODO"
        circleColor="green"
        onOpenTaskDetails={onOpenTaskDetails}
      />
      <TodoColumn
        category="DOING"
        circleColor="red"
        onOpenTaskDetails={onOpenTaskDetails}
      />
      <TodoColumn
        category="DONE"
        circleColor="blue"
        onOpenTaskDetails={onOpenTaskDetails}
      />
      <TodoColumn
        category="SUGGESTED"
        circleColor="yellow"
        onOpenTaskDetails={onOpenTaskDetails}
      />
    </div>
  );
}

export default Todo;
