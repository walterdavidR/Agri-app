import React from "react";


const Input = ({ label, name, type = "text", value, onChange, placeholder }) => {
return (
<div className="mb-4">
<label htmlFor={name} className="block text-sm font-medium text-gray-700">
{label}
</label>
<input
id={name}
name={name}
type={type}
value={value}
onChange={onChange}
placeholder={placeholder}
className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
/>
</div>
);
};


export default Input;