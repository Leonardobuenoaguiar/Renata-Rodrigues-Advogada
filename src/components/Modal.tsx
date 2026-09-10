import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  className?: string;
  children: ReactNode;
};

export default function Modal({
  open,
  onClose,
  labelledBy,
  className = "",
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartedOutside = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    // Native dialogs isolate focus and make the background inert.
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [open]);

  const outsideDialog = (x: number, y: number) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    return Boolean(
      rect && (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom),
    );
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby={labelledBy}
      className={`app-dialog ${className}`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        if (!dialogRef.current?.open) onClose();
      }}
      onPointerDown={(event) => {
        pointerStartedOutside.current = outsideDialog(event.clientX, event.clientY);
      }}
      onClick={(event) => {
        if (
          pointerStartedOutside.current &&
          event.target === event.currentTarget &&
          outsideDialog(event.clientX, event.clientY)
        ) {
          onClose();
        }
        pointerStartedOutside.current = false;
      }}
    >
      {children}
    </dialog>,
    document.body,
  );
}