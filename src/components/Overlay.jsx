import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Overlay = ({ children, onClose, product }) => {
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const handleClickOutside = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleViewFullDetails() {
    navigate(`/viewProduct/${product.category}/${product.name}/${product.id}`);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-10 backdrop-blur-sm">
      <div
        ref={overlayRef}
        className="relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto bg-white p-5"
      >
        <div className="flex items-center justify-between">
          <div
            className="font-semibold uppercase tracking-tight underline underline-offset-2 hover:cursor-pointer"
            onClick={handleViewFullDetails}
          >
            view full details
          </div>
          <button onClick={onClose}>
            <IoMdClose className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
