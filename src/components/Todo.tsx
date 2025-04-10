import CreateNewCategory from './Columns/CreateNewCategory';
import TodoColumn from './Columns/TodoColumn';

type TodoPropsType = {
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenCreateColumn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ onOpenTaskDetails, onOpenCreateColumn }: TodoPropsType) {
  return (
    <div className="mt-16 min-h-[90dvh] bg-slate-900 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:px-4">
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
      <CreateNewCategory onHandleModalCart={onOpenCreateColumn} />
      {/* <TodoColumn
        category="SUGGESTED"
        circleColor="yellow"
        onOpenTaskDetails={onOpenTaskDetails}
      /> */}
    </div>
  );
}

export default Todo;
