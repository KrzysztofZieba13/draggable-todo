import { HandleCartPropsType } from '../../types/types';

function CreateNewCategory({ onHandleModalCart }: HandleCartPropsType) {
  return (
    <div
      onClick={() => onHandleModalCart(true)}
      className="mt-12 flex h-96 cursor-pointer flex-col items-center justify-center self-start rounded-sm bg-slate-300/20 text-slate-300 duration-300 hover:bg-slate-300/15"
    >
      + New Column
    </div>
  );
}

export default CreateNewCategory;
