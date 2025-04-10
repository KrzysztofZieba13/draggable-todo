import { CartModalHeaderPropsType } from '../../types/types';

function CartModalHeader({
  title,
  onHandleModalCart,
}: CartModalHeaderPropsType) {
  return (
    <div className="mb-2.5 flex items-center justify-between">
      <h2 className="text-base">{title}</h2>
      <button
        onClick={() => onHandleModalCart(false)}
        type="button"
        className="cursor-pointer text-sm text-slate-400 duration-300 hover:text-slate-500"
      >
        Close
      </button>
    </div>
  );
}

export default CartModalHeader;
