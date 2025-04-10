import { useEffect } from 'react';

export function useCloseModal(
  ref: React.RefObject<HTMLDivElement | null>,
  handler: () => void,
) {
  useEffect(
    function () {
      function callback(e: MouseEvent | TouchEvent) {
        if (!ref.current || ref.current.contains(e.target as Node)) return;
        handler();
      }
      document.addEventListener('mousedown', callback);
      document.addEventListener('touchstart', callback);

      return function () {
        document.removeEventListener('mousedown', callback);
        document.removeEventListener('touchend', callback);
      };
    },
    [ref, handler],
  );
}
