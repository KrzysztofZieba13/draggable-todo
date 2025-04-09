type ButtonTypeProps = {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
};

function Button({ type, children }: ButtonTypeProps) {
  if (type === 'secondary')
    return (
      <button
        type="button"
        className="mt-2 cursor-pointer rounded-sm bg-slate-100 py-1.5 text-slate-800 duration-300 hover:bg-slate-300"
      >
        + Add New Subtask
      </button>
    );

  if (type === 'primary')
    return (
      <button className="mt-2 w-full cursor-pointer rounded-sm bg-emerald-500 py-1.5 duration-300 hover:bg-emerald-600">
        {children}
      </button>
    );
}

export default Button;
