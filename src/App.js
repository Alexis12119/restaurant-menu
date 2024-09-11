import React from "react";

const MenuItem = ({ name, price, sizes }) => {
  const defaultImage = "https://via.placeholder.com/150"; // Placeholder image

  return (
    <div className="bg-black p-4 text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white border border-red-500">
      <img
        src={defaultImage}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-500"
      />
      <h3 className="text-xl font-bold text-red-400 mb-1">{name}</h3>
      {price && <p className="text-gray-200 mb-2">₱ {price}</p>}
      {sizes && (
        <ul className="text-gray-200 text-sm mt-2">
          {sizes.map((size, index) => (
            <li
              key={index}
              className="flex justify-between border-t border-gray-700 py-1"
            >
              <span>{size.label}</span>
              <span>₱ {size.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MenuSection = ({ title, items }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-8 p-4 rounded-full border-4 border-red-500 bg-black mx-auto inline-block">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-screen-lg">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          price={item.price}
          sizes={item.sizes}
        />
      ))}
    </div>
  </div>
);
const App = () => {
  const menu = [
    {
      title: "Appetizer",
      items: [
        { name: "Fries (1-2 pax)", price: 85 },
        { name: "Fries w/cheese (1-2 pax)", price: 95 },
      ],
    },
    {
      title: "Pasta (Solo Order)",
      items: [
        { name: "Pasta Carbonara", price: 110 },
        { name: "Chicken Pesto Pasta", price: 110 },
        { name: "Meaty Spaghetti", price: 110 },
        { name: "Pesto Pasta", price: 100 },
        { name: "Ariabiata", price: 100 },
      ],
    },
    {
      title: "Dessert",
      items: [
        { name: "Manggo Graham", price: 50 },
        { name: "Matang", price: 40 },
        { name: "Ice Cream", price: 50 },
      ],
    },
    {
      title: "Sandwiches Served w/ Potato Wedges",
      items: [
        { name: "Clubhouse", price: 150 },
        { name: "Chicken Sandwich", price: 130 },
        { name: "Tuna Sandwich", price: 130 },
        { name: "Cheese and Ham Sandwich", price: 120 },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "Bottle Water", price: 15 },
        { name: "Ice Tea", price: 25 },
        { name: "Orange Juice", price: 25 },
      ],
    },
    {
      title: "SoftDrinks",
      items: [
        { name: "Coke", price: 20 },
        { name: "Mountain Dew", price: 20 },
        { name: "Sprite", price: 20 },
        { name: "Royal", price: 20 },
      ],
    },
    {
      title: "Silog Meal Solo Order",
      items: [
        { name: "LiempoSilog", price: 95 },
        { name: "BagnetSilog", price: 95 },
        { name: "ChickSilog", price: 95 },
        { name: "SisigSilog", price: 95 },
        { name: "TociLog", price: 95 },
        { name: "TapSilog", price: 95 },
        { name: "LongSilog", price: 95 },
        { name: "HotSilog", price: 95 },
        { name: "HamSilog", price: 95 },
        { name: "ShanghaiSilog", price: 95 },
      ],
    },
    {
      title: "Sizzling Unli Rice (Dine-in Only)",
      items: [
        { name: "Pork Sisig", price: 140 },
        { name: "Tapa", price: 122 },
        { name: "Liempo", price: 129 },
        { name: "Porkchop", price: 129 },
      ],
    },
    {
      title: "Chicken (Original or Flavored Parmesan/Honey/Buffalo/Oyster)",
      items: [
        {
          name: "Chicken",
          sizes: [
            { label: "10pcs", price: 250 },
            { label: "20pcs", price: 490 },
            { label: "30pcs", price: 730 },
            { label: "40pcs", price: 970 },
            { label: "50pcs", price: 1270 },
            { label: "100pcs", price: 2300 },
          ],
        },
      ],
    },
    {
      title: "Ulam Party",
      items: [
        { name: "Shanghai 100pcs (20-30 pax)", price: 1300 },
        { name: "Sisig (20-25 pax)", price: 1700 },
        { name: "Crispy Kare-kare (20-25 pax)", price: 1800 },
        { name: "Chopsuey (20-25 pax)", price: 1900 },
        { name: "Menudo (20-25 pax)", price: 1900 },
        { name: "Caldereta (20-25 pax)", price: 1900 },
        { name: "Cordon Blue (20-25 pax)", price: 1900 },
        { name: "Sweet and Sour Pork (20-25 pax)", price: 1900 },
      ],
    },
    {
      title: "Party Bilao",
      items: [
        {
          name: "Spaghetti",
          sizes: [
            { label: "Medium", price: 950 },
            { label: "Large", price: 1100 },
          ],
        },
        {
          name: "Carbonara",
          sizes: [
            { label: "Medium", price: 1350 },
            { label: "Large", price: 1600 },
          ],
        },
        {
          name: "Chicken Pesto Pasta",
          sizes: [
            { label: "Medium", price: 1400 },
            { label: "Large", price: 1650 },
          ],
        },
        {
          name: "Sea Food Palabok",
          sizes: [
            { label: "Medium", price: 950 },
            { label: "Large", price: 1250 },
          ],
        },
        {
          name: "Japchae",
          sizes: [
            { label: "Medium", price: 1350 },
            { label: "Large", price: 1600 },
          ],
        },
        { name: "Bake Mac (Foil tray)", price: 1100 },
      ],
    },
    {
      title: "Combo Platter",
      items: [
        { name: "Combo for 3 choices", price: 1600 },
        { name: "Sisig pork or chicken (Good for 2-4 pax)", price: 170 },
        { name: "Mekus Platter (Good for 5-6 pax)", price: 850 },
        { name: "Crispy pata (Good for 5-6 pax)", price: null },
      ],
    },
    {
      title: "Pancit Bagnet",
      items: [
        {
          name: "Bihon",
          sizes: [
            { label: "Small (7-8 pax)", price: 470 },
            { label: "Medium (12-15 pax)", price: 910 },
            { label: "Large (20-25 pax)", price: 1250 },
          ],
        },
        {
          name: "Canton Bihon",
          sizes: [
            { label: "Small (7-8 pax)", price: 510 },
            { label: "Medium (12-15 pax)", price: 1020 },
            { label: "Large (20-25 pax)", price: 1370 },
          ],
        },
        {
          name: "Canton",
          sizes: [
            { label: "Small (7-8 pax)", price: 520 },
            { label: "Medium (12-15 pax)", price: 1020 },
            { label: "Large (20-25 pax)", price: 1420 },
          ],
        },
        {
          name: "Canton Sotanghon",
          sizes: [
            { label: "Small (7-8 pax)", price: 530 },
            { label: "Medium (12-15 pax)", price: 1030 },
            { label: "Large (20-25 pax)", price: 1420 },
          ],
        },
        {
          name: "Miki Bihon",
          sizes: [
            { label: "Small (7-8 pax)", price: 490 },
            { label: "Medium (12-15 pax)", price: 950 },
            { label: "Large (20-25 pax)", price: 1310 },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-400 mb-16 text-center leading-tight relative rounded-full border-4 border-red-500 py-2 px-6 bg-black shadow-lg shadow-red-500">
        RKM Kitchenette
      </h1>
      <div className="w-full max-w-5xl">
        {menu.map((section, index) => (
          <MenuSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
