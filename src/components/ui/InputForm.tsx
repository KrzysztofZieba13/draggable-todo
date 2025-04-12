type InputFormPropsType = {
  title: string;
  eg: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function InputForm({ title, eg, value, onChange }: InputFormPropsType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor="title">{title}</label>
      <input
        id="title"
        type="text"
        className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder={`e.g ${eg}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputForm;
