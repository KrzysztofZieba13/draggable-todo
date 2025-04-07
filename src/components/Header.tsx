import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
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
        <div className="cursor-pointer rounded-sm bg-emerald-500 px-2.5 py-0.5 text-lg duration-300 hover:bg-emerald-600">
          +
        </div>
      </div>

      <nav
        className={`trans absolute top-0 z-0 mt-16 ${isOpen ? 'translate-0' : '-translate-y-full'} shadow-black-900 w-full bg-slate-700 shadow-sm duration-300`}
      >
        <ul className="flex cursor-pointer flex-col text-slate-300">
          <li className="px-4 py-3 duration-300 hover:bg-slate-600">
            Tablica 1
          </li>
          <li className="px-4 py-3 duration-300 hover:bg-slate-600">
            Tablica 2
          </li>
          <li className="px-4 py-3 duration-300 hover:bg-slate-600">
            Tablica 3
          </li>
          <li className="px-4 py-3 duration-300 hover:bg-slate-600">
            Tablica 4
          </li>
          <li className="px-4 py-3 duration-300 hover:bg-slate-600">
            Tablica 5
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
