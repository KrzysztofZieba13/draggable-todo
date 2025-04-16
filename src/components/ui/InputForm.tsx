type InputFormPropsType = {
  inputLabel: string;
  exampleValue: string;
  inputValue: string;
  onChangeInputValue: React.Dispatch<React.SetStateAction<string>>;
};

function InputForm({
  inputLabel,
  exampleValue,
  inputValue,
  onChangeInputValue,
}: InputFormPropsType) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor="title">{inputLabel}</label>
      <input
        id="title"
        type="text"
        className="w-full rounded-sm border-2 border-slate-500 px-1 py-1 placeholder-slate-500"
        placeholder={`e.g ${exampleValue}`}
        value={inputValue}
        onChange={(e) => onChangeInputValue(e.target.value)}
      />
    </div>
  );
}

export default InputForm;
