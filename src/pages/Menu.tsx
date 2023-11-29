import React from 'react';

// Define a type for individual menu items
type MenuItemProps = {
  name: string;
  description: string;
  price: number;
};

// Menu item component
const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="p-4 flex justify-between items-center border-b border-gray-200">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <span className="text-lg">{`$${price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

// Menu page component
const MenuPage: React.FC = () => {
  // Sample menu data
  const menuItems: MenuItemProps[] = [
    {
      name: 'Espresso',
      description: 'Rich and creamy espresso shot, made from freshly ground beans.',
      price: 2.5,
    },
    {
      name: 'Cappuccino',
      description: 'A classic combination of espresso, hot milk, and steamed milk foam.',
      price: 3.5,
    },
    {
      name: 'Latte',
      description: 'Smooth espresso mixed with creamy steamed milk.',
      price: 4.0,
    },
    {
    name: 'Americano',
    description: 'Espresso mixed with hot water.',
    price: 3.0,
   },
    {
      name: 'Macchiato',
      description: 'Espresso topped with foamed milk.',
      price: 3.5,
    },
    {
      name: 'Mocha',
      description: 'Espresso mixed with chocolate and milk.',
      price: 4.5,
    },
    {
      name: 'Flat White',
      description: 'Espresso mixed with steamed milk.',
      price: 4.0,
    },
    {
      name: 'Cortado',
      description: 'Espresso mixed with a small amount of steamed milk.',
      price: 3.5,
    },
    {
      name: 'Drip Coffee',
      description: 'Freshly brewed coffee.',
      price: 2.5,
    },
    {
      name: 'Cold Brew',
      description: 'Smooth, refreshing cold brew.',
      price: 3.0,
    },
    {
      name: 'Nitro Cold Brew',
      description: 'Cold brew infused with nitrogen for a creamy texture.',
      price: 4.0,
    },
    {
      name: 'Chai Latte',
      description: 'Spiced black tea mixed with steamed milk.',
      price: 4.0,
    },
    {
      name: 'Matcha Latte',
      description: 'Finely ground green tea leaves mixed with steamed milk.',
      price: 4.0,
    },
    {
      name: 'Hot Chocolate',
      description: 'Rich chocolate mixed with steamed milk.',
      price: 4.0,
    },
    {
      name: 'Tea',
      description: 'Your choice of tea.',
      price: 2.0,
    },
    {
      name: 'Bagel',
      description: 'Your choice of bagel.',
      price: 2.0,
    },
    {
      name: 'Croissant',
      description: 'Your choice of croissant.',
      price: 2.0,
    },
    {
      name: 'Muffin',
      description: 'Your choice of muffin.',
      price: 2.0,
    },
    {
      name: 'Scone',
      description: 'Your choice of scone.',
      price: 2.0,
    },
    {
      name: 'Cookie',
      description: 'Your choice of cookie.',
      price: 2.0,
    },
    
  ];

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div>
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
