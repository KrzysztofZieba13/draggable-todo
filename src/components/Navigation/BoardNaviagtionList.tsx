import { ClipboardText } from '@phosphor-icons/react';

type BoardNavigationListPropsType = {
  isOpen?: boolean;
};

function BoardNaviagtionList({ isOpen }: BoardNavigationListPropsType) {
  return (
    <nav
      className={`absolute top-0 z-0 mt-16 ${isOpen ? 'translate-0' : '-translate-y-full'} w-full bg-slate-700 duration-300 lg:hidden`}
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
  );
}

export default BoardNaviagtionList;
