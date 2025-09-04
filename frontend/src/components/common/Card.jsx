import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold text-blue-600 mt-1">{value}</p>
    </div>
  );
};

export default Card;
