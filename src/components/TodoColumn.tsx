import Task from './Task';

type TodoColumnPropsType = {
  circleColor: string;
  category: 'TODO' | 'DOING' | 'DONE' | string;
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

type CircleStyleColorType = {
  [key: string]: string;
};

function TodoColumn({
  circleColor,
  onOpenTaskDetails,
  category,
}: TodoColumnPropsType) {
  const circleStyleColor: CircleStyleColorType = {
    green: 'bg-emerald-300',
    yellow: 'bg-amber-300',
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    orange: 'bg-orange-300',
    pink: 'bg-pink-300',
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2 text-slate-400">
        <div
          className={`h-4 w-4 rounded-full ${circleStyleColor[circleColor]}`}
        ></div>
        {category} ( 4 )
      </div>
      <Task subtasksCount={2} onOpenTaskDetails={onOpenTaskDetails}>
        Zadanie 1
      </Task>
      <Task subtasksCount={3} onOpenTaskDetails={onOpenTaskDetails}>
        Zadanie 2
      </Task>
      <Task subtasksCount={1} onOpenTaskDetails={onOpenTaskDetails}>
        Zadanie 3
      </Task>
    </div>
  );
}

export default TodoColumn;
