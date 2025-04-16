import React from 'react';
import { CarritoItem } from '../types';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

interface CarritoProps {
  items: CarritoItem[];
  onUpdateCantidad: (productoId: number, cantidad: number) => void;
  onRemoveItem: (productoId: number) => void;
  onPagar: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Carrito({ items, onUpdateCantidad, onRemoveItem, onPagar, isOpen, onClose }: CarritoProps) {
  const total = items.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart size={24} />
            Carrito de Compras
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">El carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.producto.id}
                  className="bg-white border rounded-lg p-4 flex items-center gap-4"
                >
                  <img
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.producto.nombre}</h3>
                    <p className="text-blue-600 font-bold">
                      ${item.producto.precio.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateCantidad(item.producto.id, Math.max(0, item.cantidad - 1))}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.cantidad}</span>
                      <button
                        onClick={() => onUpdateCantidad(item.producto.id, item.cantidad + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.producto.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-100 mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={onPagar}
            disabled={items.length === 0}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
}