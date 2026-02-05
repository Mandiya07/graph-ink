
import React from 'react';
import { ShoppingBag, ArrowUpRight, Download } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Digital<br />Assets</h1>
            <p className="text-xl text-gray-400 font-medium">
              Elevate your own 3D projects with our curated collection of professional assets, shader packs, and in-depth tutorials.
            </p>
          </div>
          <div className="bg-amber-500 p-6 rounded-2xl flex items-center space-x-6">
             <ShoppingBag size={40} className="text-black" />
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/60">Store Status</p>
                <p className="text-xl font-black text-black">Live & Active</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all flex flex-col">
               <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={product.title} 
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-amber-500 font-black tracking-tight">{product.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                     <button className="bg-white text-black px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center space-x-2">
                        <Download size={14} />
                        <span>Instant Access</span>
                     </button>
                  </div>
               </div>
               <div className="p-8 flex-1 flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{product.category}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{product.title}</h3>
                  <p className="text-gray-400 text-sm mb-8 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-between group/btn text-sm font-black uppercase tracking-widest border-t border-white/5 pt-6 hover:text-amber-500 transition-colors">
                      <span>Add to Cart</span>
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
