import { CaretDown, ClipboardText } from '@phosphor-icons/react';
import { useState } from 'react';

type HeaderPropsType = {
  onOpenTaskFormCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ onOpenTaskFormCart }: HeaderPropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 w-full">
      <div className="relative z-10 flex w-full items-center justify-between bg-slate-800 p-4">
        <div className="flex items-center gap-2">
          <p>Tablica zadań</p>
          <button
            className="flex cursor-pointer items-center text-emerald-500"
            onClick={() => setIsOpen((is) => !is)}
          >
            <CaretDown
              className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-300`}
            />
          </button>
        </div>
        <div
          onClick={() => onOpenTaskFormCart(true)}
          className="cursor-pointer rounded-sm bg-emerald-500 px-2.5 py-0.5 text-lg duration-300 hover:bg-emerald-600"
        >
          +
        </div>
      </div>

      <nav
        className={`trans absolute top-0 z-0 mt-16 ${isOpen ? 'translate-0' : '-translate-y-full'} shadow-black-900 w-full bg-slate-700 shadow-sm duration-300`}
      >
        <ul className="flex cursor-pointer flex-col text-slate-300">
          <li className="flex items-center gap-1 px-4 py-3 duration-300 hover:bg-slate-600">
            <ClipboardText /> Tablica 1
          </li>
          <li className="flex items-center gap-1 px-4 py-3 duration-300 hover:bg-slate-600">
            <ClipboardText /> Tablica 2
          </li>
          <li className="flex items-center gap-1 px-4 py-3 duration-300 hover:bg-slate-600">
            <ClipboardText /> Tablica 3
          </li>
          <li className="flex items-center gap-1 px-4 py-3 duration-300 hover:bg-slate-600">
            <ClipboardText /> Tablica 4
          </li>
          <li className="flex items-center gap-1 px-4 py-3 duration-300 hover:bg-slate-600">
            <ClipboardText /> Tablica 5
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
