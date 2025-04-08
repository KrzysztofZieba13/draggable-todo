type AddTaskCartPropsType = {
  onCloseTaskFormCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTaskCartHeader({ onCloseTaskFormCart }: AddTaskCartPropsType) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-base">Add New Task</h2>
      <button
        onClick={() => onCloseTaskFormCart(false)}
        type="button"
        className="cursor-pointer text-sm text-slate-400 duration-300 hover:text-slate-500"
      >
        Close
      </button>
    </div>
  );
}

export default AddTaskCartHeader;
