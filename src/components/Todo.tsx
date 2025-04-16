import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import CreateNewCategory from './Columns/CreateNewCategory';
import TodoColumn from './Columns/TodoColumn';
import { ItemTodoType } from '../types/types';

type TodoPropsType = {
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenCreateColumn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ onOpenTaskDetails, onOpenCreateColumn }: TodoPropsType) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0.1,
      },
    }),
  );

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over) return;
    const taskId = active.id as number;
    const newStatus = over.id as ItemTodoType['status'];
  }

  return (
    <div className="mt-16 min-h-[90dvh] bg-slate-900 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:px-4">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <TodoColumn
          category="TODO"
          circleColor="green"
          onOpenTaskDetails={onOpenTaskDetails}
        />
        <TodoColumn
          category="DOING"
          circleColor="yellow"
          tasksCount={1}
          onOpenTaskDetails={onOpenTaskDetails}
        />
        <TodoColumn
          category="DONE"
          circleColor="blue"
          tasksCount={1}
          onOpenTaskDetails={onOpenTaskDetails}
        />
      </DndContext>
      <CreateNewCategory onHandleModalCart={onOpenCreateColumn} />
    </div>
  );
}

export default Todo;
