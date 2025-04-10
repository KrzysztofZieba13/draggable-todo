type SelectFormPropsType = {
  name: string;
  children: React.ReactNode;
};

function SelectForm({ name, children }: SelectFormPropsType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label>{name}</label>
      <select className="rounded-sm border-2 border-slate-500 py-1">
        {children}
      </select>
    </div>
  );
}

export default SelectForm;
