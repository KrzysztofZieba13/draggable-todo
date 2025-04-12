type SelectFormPropsType = {
  name: string;
  value: string;
  onChange: (newStatus: string) => void;
  children: React.ReactNode;
};

function SelectForm({ name, value, onChange, children }: SelectFormPropsType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>{name}</label>
      <select
        className="rounded-sm border-2 border-slate-500 py-1"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {children}
      </select>
    </div>
  );
}

export default SelectForm;
