import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/common/ProductCard.jsx";
import { allProducts } from '../data/productData.js'; 

const ShopPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-8">Shop All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="transition-all hover:scale-105 hover:shadow-xl rounded-lg">
            <ProductCard img={p.img} title={p.title} department={p.dept} oldPrice={p.oldPrice} newPrice={p.newPrice} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ShopPage;