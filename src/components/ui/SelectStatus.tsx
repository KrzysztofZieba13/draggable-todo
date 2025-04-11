type SelectStatusPropsType = {
  curState: string;
  onChange: (newStatus: string) => void;
};

function SelectStatus({ curState, onChange }: SelectStatusPropsType) {
  curState = curState.toUpperCase();
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>Status</label>
      <select
        className="rounded-sm border-2 border-slate-500 py-1"
        onChange={(e) => onChange(e.target.value)}
        value={curState}
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
