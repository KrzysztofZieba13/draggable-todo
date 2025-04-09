import React from 'react';

type CartModalPropsType = {
  children: React.ReactNode;
};

function CartModal({ children }: CartModalPropsType) {
  return (
    <div className="fixed inset-0 z-20 overflow-y-auto bg-slate-900/50 text-slate-50 backdrop-blur-xs">
      <div className="relative top-1/2 mx-auto max-h-[90vh] w-10/12 -translate-y-1/2 overflow-auto rounded-md bg-slate-700 p-4">
        {children}
      </div>
    </div>
  );
}

export default CartModal;
