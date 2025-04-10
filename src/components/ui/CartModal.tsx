import React, { useRef } from 'react';
import { useCloseModal } from '../../hooks/useCloseModal';

type CartModalPropsType = {
  children: React.ReactNode;
  onCloseModalCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartModal({ children, onCloseModalCart }: CartModalPropsType) {
  const ref = useRef<HTMLDivElement | null>(null);
  useCloseModal(ref, () => onCloseModalCart(false));

  return (
    <div className="fixed inset-0 z-20 overflow-y-auto bg-slate-900/50 text-slate-50 backdrop-blur-xs">
      <div
        ref={ref}
        className="relative top-1/2 mx-auto max-h-[90vh] w-10/12 -translate-y-1/2 overflow-auto rounded-md bg-slate-700 p-4 sm:w-[34rem]"
      >
        {children}
      </div>
    </div>
  );
}

export default CartModal;
