import React from "react";
import {  Flip, } from "react-awesome-reveal";
import { TbXboxXFilled } from "react-icons/tb";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
 
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md" onClick={onClose}></div>
      <Flip >
      {/* Modal content */}
      <div className="bg-[#051A16] p-6 rounded-lg shadow-lg w-96 z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 "
        >
          <TbXboxXFilled size={'24'} color="#F1875E" />
        </button>
        <div>{children}</div>
      </div>   </Flip>
    </div>
  );
};

export default Modal;
