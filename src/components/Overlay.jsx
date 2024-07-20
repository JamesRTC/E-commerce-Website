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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div ref={overlayRef} className="relative bg-white pb-5">
        <div className="flex items-center justify-between p-5">
          <div
            className="font-semibold uppercase tracking-tight underline-offset-2 hover:cursor-pointer hover:underline"
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
