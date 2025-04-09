function AddTaskTitle() {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder="e.g Merge branches"
      />
    </div>
  );
}

export default AddTaskTitle;
