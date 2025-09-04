import React from "react";


const Select = ({ label, name, value, onChange, options }) => {
return (
<div className="mb-4">
<label htmlFor={name} className="block text-sm font-medium text-gray-700">
{label}
</label>
<select
id={name}
name={name}
value={value}
onChange={onChange}
className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
>
{options.map((option, index) => (
<option key={index} value={option.value}>
{option.label}
</option>
))}
</select>
</div>
);
};


export default Select;