import { createContext, useMemo, useReducer } from 'react';
import {
  CategoryReducerActionType,
  CategoryStateType,
  ProviderTypes,
} from '../types/types';

const REDUCER_ACTION_TYPE = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
} as const;

function columnReducer(
  state: CategoryStateType[],
  action: CategoryReducerActionType,
) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CATEGORY: {
      const { category, color, tasksNumber } = action.payload;

      if (!category || !color || tasksNumber === undefined)
        throw new Error('action.payload is missing in ADD_CATEGORY action');

      return [...state, { category, color, tasksNumber }];
    }

    case REDUCER_ACTION_TYPE.UPDATE_CATEGORY: {
      const { category } = action.payload;

      if (!category)
        throw new Error('action.payload is missing in UPDATE_CATEGORY action');

      const requestedCategory: CategoryStateType | undefined = state.find(
        (cat) => cat.category === category.toUpperCase(),
      );
      if (!requestedCategory)
        throw new Error('Requested category to update not found');

      const updatedCategory: CategoryStateType = {
        ...requestedCategory,
        tasksNumber: requestedCategory.tasksNumber + 1,
      };

      const filteredCategories: CategoryStateType[] = state.filter(
        (cat) => cat.category !== category.toUpperCase(),
      );

      filteredCategories.unshift(updatedCategory);
      return [...filteredCategories];
    }

    default:
      return state;
  }
}

function useCategoryContext() {
  const [categories, dispatch] = useReducer(columnReducer, [
    { category: 'TODO', color: 'green', tasksNumber: 0 },
    { category: 'DOING', color: 'red', tasksNumber: 0 },
    { category: 'DONE', color: 'blue', tasksNumber: 0 },
  ]);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  return { categories, REDUCER_ACTIONS, dispatch };
}

export type UseCategoryContextType = ReturnType<typeof useCategoryContext>;

const initCategoryContextState: UseCategoryContextType = {
  categories: [],
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const CategoryContext = createContext<UseCategoryContextType>(
  initCategoryContextState,
);

function CategoryProvider({ children }: ProviderTypes) {
  return (
    <CategoryContext.Provider value={useCategoryContext()}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
