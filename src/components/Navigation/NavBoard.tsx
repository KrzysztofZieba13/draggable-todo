import { Butterfly, ClipboardText, Heart } from '@phosphor-icons/react';

function NavBoard() {
  return (
    <div className="hidden border-slate-700 lg:relative lg:row-span-2 lg:block lg:min-w-4/12 lg:border-r-2">
      <div>
        <a
          href="#"
          className="flex items-center gap-1 p-4 text-2xl tracking-wide text-emerald-500"
        >
          <Butterfly />
          <p className="text-slate-200">
            Tasker<span className="text-emerald-500">Fly</span>
          </p>
        </a>
      </div>
      <p className="mt-4 px-4 text-xs tracking-wider text-slate-400 uppercase">
        All Boards (4)
      </p>

      <nav className="mt-4 text-base text-slate-400">
        <ul className="flex cursor-pointer flex-col gap-1">
          <li
            className={`${true ? 'bg-emerald-600 text-slate-200' : ''} mr-2 flex items-center gap-2 rounded-r-2xl px-4 py-2.5 duration-300 hover:bg-slate-600`}
          >
            <ClipboardText /> Board 1
          </li>
          <li className="mr-2 flex items-center gap-2 rounded-r-xl px-4 py-2.5 duration-300 hover:bg-slate-600">
            <ClipboardText /> Board 2
          </li>
          <li className="mr-2 flex items-center gap-2 rounded-r-xl px-4 py-2.5 duration-300 hover:bg-slate-600">
            <ClipboardText /> Board 3
          </li>
          <li className="mr-2 flex items-center gap-2 rounded-r-xl px-4 py-2.5 duration-300 hover:bg-slate-600">
            <ClipboardText /> Board 4
          </li>
          <li className="mr-2 flex items-center gap-2 rounded-r-xl px-4 py-2.5 text-emerald-500 duration-300 hover:text-emerald-600">
            <ClipboardText /> + Create New Board
          </li>
        </ul>
      </nav>

      <div>
        <p className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 bg-slate-800 text-xs text-nowrap text-slate-300">
          Made with <Heart className="text-emerald-700" /> by Krzysztof Zięba
        </p>
      </div>
    </div>
  );
}

export default NavBoard;
