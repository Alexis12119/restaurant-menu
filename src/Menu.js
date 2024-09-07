import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuItems = [
    { name: 'Menu 1', price: 10 },
    { name: 'Menu 2', price: 15 },
    { name: 'Menu 3', price: 12 },
    { name: 'Menu 4', price: 14 },
    { name: 'Menu 5', price: 18 },
    { name: 'Menu 6', price: 20 },
    { name: 'Menu 7', price: 16 },
    { name: 'Menu 8', price: 17 },
    { name: 'Menu 9', price: 22 },
    { name: 'Menu 10', price: 25 },
    { name: 'Menu 11', price: 30 },
    { name: 'Menu 12', price: 28 },
    { name: 'Menu 13', price: 32 },
    { name: 'Menu 14', price: 35 },
    { name: 'Menu 15', price: 40 },
    { name: 'Menu 16', price: 45 },
    { name: 'Menu 17', price: 50 },
    { name: 'Menu 18', price: 55 },
    { name: 'Menu 19', price: 60 },
    { name: 'Menu 20', price: 65 },
    { name: 'Menu 21', price: 70 },
    { name: 'Menu 22', price: 75 },
    { name: 'Menu 23', price: 80 },
    { name: 'Menu 24', price: 85 },
    { name: 'Menu 25', price: 90 },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-10 py-6">
      {menuItems.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Menu;
