import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  open,
  onClose,
  children,
  mobileMode = "sheet", // "sheet" | "center"
  className = "",
  overlayClassName = "",
  labelledBy,
}) => {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div
      className={`fixed inset-0 z-[60] flex ${
        mobileMode === "sheet" ? "items-end sm:items-center" : "items-center"
      } justify-center`}
      aria-modal="true"
      role="dialog"
      aria-labelledby={labelledBy}
    >
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 ${overlayClassName}`}
        onClick={onClose}
      />
      {/* panel */}
      <div
        className={`relative bg-white w-full ${
          mobileMode === "sheet"
            ? "rounded-t-2xl sm:rounded-2xl"
            : "rounded-2xl"
        } shadow-xl
        ${mobileMode === "sheet" ? "max-h-[90vh]" : "max-h-[92vh]"}
        overflow-auto
        ${mobileMode === "sheet" ? "sm:max-w-lg" : "sm:max-w-xl"}
        ${mobileMode === "sheet" ? "" : "mx-4 sm:mx-0"}
        ${mobileMode === "sheet" ? "" : "p-0"}
        ${mobileMode === "sheet" ? "" : ""}
        ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
