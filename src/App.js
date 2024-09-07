import React from 'react';
import Menu from './Menu';

function App() {
  return (
    <div className="bg-red-700 min-h-screen text-gray-200">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center py-4 sm:py-6 md:py-8 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white shadow-lg font-dancing bg-opacity-90">
        Keren's Restaurant Menu
      </h1>
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="w-1/2 sm:w-1/4 h-1 bg-black rounded"></div>
      </div>
      <Menu />
    </div>
  );
}

export default App;
