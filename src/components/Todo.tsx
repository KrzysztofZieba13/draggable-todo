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
import { useContext } from 'react';
import { TodoContext, UseTodosContextType } from '../context/todoContext';
import {
  CategoryContext,
  UseCategoryContextType,
} from '../context/categoryContext';

type TodoPropsType = {
  onOpenTaskDetails: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenCreateColumn: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ onOpenTaskDetails, onOpenCreateColumn }: TodoPropsType) {
  const { dispatch, REDUCER_ACTIONS } = useContext(
    TodoContext,
  ) as UseTodosContextType;
  const {
    categories,
    dispatch: dispatchCategory,
    REDUCER_ACTIONS: REDUCER_CATEGORY_ACTIONS,
  } = useContext(CategoryContext) as UseCategoryContextType;
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

    dispatch({ type: REDUCER_ACTIONS.GET_TASK, payload: { id: taskId } });
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_TASK,
      payload: {
        id: taskId,
        changes: { status: newStatus },
      },
    });
    dispatchCategory({
      type: REDUCER_CATEGORY_ACTIONS.UPDATE_CATEGORY,
      payload: { category: newStatus },
    });
  }

  return (
    <div className="mt-16 min-h-[90dvh] bg-slate-900 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:px-4">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <TodoColumn
          category="TODO"
          circleColor="green"
          tasksCount={categories[0].tasksNumber}
          onOpenTaskDetails={onOpenTaskDetails}
        />
        <TodoColumn
          category="DOING"
          circleColor="yellow"
          tasksCount={categories[1].tasksNumber}
          onOpenTaskDetails={onOpenTaskDetails}
        />
        <TodoColumn
          category="DONE"
          circleColor="blue"
          tasksCount={categories[2].tasksNumber}
          onOpenTaskDetails={onOpenTaskDetails}
        />
        {/* {categories.map((category) => (
          <TodoColumn
            key={category.category}
            category={category.category.toUpperCase()}
            circleColor={category.color.toLowerCase()}
            tasksCount={category.tasksNumber}
            onOpenTaskDetails={onOpenTaskDetails}
          />
        ))} */}
      </DndContext>
      <CreateNewCategory onHandleModalCart={onOpenCreateColumn} />
    </div>
  );
}

export default Todo;
