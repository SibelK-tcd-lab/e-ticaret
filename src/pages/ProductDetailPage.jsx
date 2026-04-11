import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { allProducts } from '../data/productData.js';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return <div className="p-20 text-center font-bold">Product not found!</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FAFAFA] py-6 px-4 md:px-20 border-b">
        <div className="container mx-auto flex items-center gap-3 font-bold text-sm">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">{product.title}</span>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 md:px-20 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <img src={product.img} alt={product.title} className="w-full h-[600px] object-cover rounded-xl shadow-lg" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#252B42]">{product.title}</h2>
          <div className="flex text-yellow-400"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star/></div>
          <p className="text-3xl font-bold text-[#252B42]">{product.newPrice}</p>
          <p className="text-[#858585] leading-relaxed">{product.description}</p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#23A6F0] text-white px-10 py-3 rounded-md font-bold">Add to Cart</button>
            <div className="flex gap-3 text-[#252B42]"><Heart /><ShoppingCart /><Eye /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;