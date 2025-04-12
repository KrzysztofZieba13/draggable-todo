type AddTaskDescriptionType = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function AddTaskDescription({ value, onChange }: AddTaskDescriptionType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        className="min-h-24 w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder="e.g Merge frontend branch and backend branch after achieve first milestone "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default AddTaskDescription;
