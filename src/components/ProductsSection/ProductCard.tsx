import React from "react";

// Define the types for the product props
type ProductProps = {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
  };
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`https://via.placeholder.com/150`}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
