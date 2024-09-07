import React from 'react';

const MenuItem = ({ name, price }) => {
  const defaultImage = 'https://via.placeholder.com/150'; // Placeholder image
  return (
    <div className="bg-black p-4 text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white">
      <img 
        src={defaultImage} 
        alt={name} 
        className="w-full h-auto rounded-md mb-2"
      />
      <h3 className="text-xl font-bold text-red-500 mb-1">{name}</h3>
      <p className="text-gray-300">${price}</p>
    </div>
  );
};

export default MenuItem;
