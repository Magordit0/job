import React from 'react';
import { Producto } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductosProps {
  productos: Producto[];
  onAgregarAlCarrito: (producto: Producto) => void;
}

export function Productos({ productos, onAgregarAlCarrito }: ProductosProps) {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Proyectores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
              <p className="text-gray-600 mb-4">{producto.descripcion}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ${producto.precio.toFixed(2)}
                </span>
                <button
                  onClick={() => onAgregarAlCarrito(producto)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}