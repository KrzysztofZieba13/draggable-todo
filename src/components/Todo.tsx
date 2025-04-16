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
  onOpenCreateColumn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ onOpenCreateColumn }: TodoPropsType) {
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
        <TodoColumn category="TODO" circleColor="green" />
        <TodoColumn category="DOING" circleColor="yellow" />
        <TodoColumn category="DONE" circleColor="blue" />
      </DndContext>
      <CreateNewCategory onHandleModalCart={onOpenCreateColumn} />
    </div>
  );
}

export default Todo;
