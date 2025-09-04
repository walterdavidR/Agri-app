import React from "react";


const Modal = ({ isOpen, onClose, title, children }) => {
if (!isOpen) return null;


return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
<div className="bg-white rounded-lg p-6 w-1/2">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-semibold">{title}</h3>
<button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
</div>
{children}
</div>
</div>
);
};


export default Modal;