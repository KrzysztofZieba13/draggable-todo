function AddTaskSelectStatus() {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Status</label>
      <select className="rounded-sm border-2 border-slate-500 py-1">
        <option className="bg-slate-800">Todo</option>
        <option className="bg-slate-800">Doing</option>
        <option className="bg-slate-800">Done</option>
      </select>
    </div>
  );
}

export default AddTaskSelectStatus;
