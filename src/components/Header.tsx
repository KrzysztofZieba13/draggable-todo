import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';
import BoardNaviagtionList from './Navigation/BoardNaviagtionList';

type HeaderPropsType = {
  onOpenTaskFormCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ onOpenTaskFormCart }: HeaderPropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="shadow-black-900 fixed top-0 min-h-[10dvh] w-full shadow-sm lg:static lg:border-b-2 lg:border-slate-700 lg:shadow-none">
      <div className="relative z-10 flex w-full items-center justify-between bg-slate-800 p-4">
        <div className="flex items-center gap-2">
          <p>Tablica zadań</p>
          <button
            className="flex cursor-pointer items-center text-emerald-500"
            onClick={() => setIsOpen((is) => !is)}
          >
            <CaretDown
              className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-300 lg:hidden`}
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

      <BoardNaviagtionList isOpen={isOpen} />
    </div>
  );
}

export default Header;
