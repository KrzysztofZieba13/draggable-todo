type SelectStatusPropsType = {
  task: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function SelectStatus({ task, onChange }: SelectStatusPropsType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Status</label>
      <select
        className="rounded-sm border-2 border-slate-500 py-1"
        onChange={(e) => onChange(e.target.value)}
        value={task.toUpperCase()}
      >
        <option className="bg-slate-800" value="" disabled>
          ----
        </option>
        <option className="bg-slate-800" value="TODO">
          Todo
        </option>
        <option className="bg-slate-800" value="DOING">
          Doing
        </option>
        <option className="bg-slate-800" value="DONE">
          Done
        </option>
      </select>
    </div>
  );
}

export default SelectStatus;
