import React, { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { Productos } from './components/Productos';
import { Anuncios } from './components/Anuncios';
import { Carrito } from './components/Carrito';
import { Usuario, Producto, CarritoItem } from './types';
import { productos, anuncios } from './data';
import { LogOut, ShoppingCart } from 'lucide-react';

function App() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carritoItems, setCarritoItems] = useState<CarritoItem[]>([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }

    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarritoItems(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carritoItems));
  }, [carritoItems]);

  const handleLogin = (usuario: Usuario) => {
    setUsuario(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
    setCarritoItems([]);
    localStorage.removeItem('carrito');
  };

  const handleAgregarAlCarrito = (producto: Producto) => {
    setCarritoItems((items) => {
      const itemExistente = items.find((item) => item.producto.id === producto.id);
      if (itemExistente) {
        return items.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...items, { producto, cantidad: 1 }];
    });
    setCarritoAbierto(true);
  };

  const handleUpdateCantidad = (productoId: number, cantidad: number) => {
    setCarritoItems((items) =>
      items
        .map((item) =>
          item.producto.id === productoId ? { ...item, cantidad } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const handleRemoveItem = (productoId: number) => {
    setCarritoItems((items) =>
      items.filter((item) => item.producto.id !== productoId)
    );
  };

  const handlePagar = () => {
    alert('¡Gracias por tu compra! En breve procesaremos tu pedido.');
    setCarritoItems([]);
    setCarritoAbierto(false);
  };

  if (!usuario) {
    return <Login onLogin={handleLogin} />;
  }

  const totalItems = carritoItems.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-1 py-3 flex justify-between items-center">
          <img className="w-20 flex rounded-lg" src="/img/logo.jpg" alt="Logo" />
          <h1 className="text-3xl font-bold text-gray-900">POCKETBEAM</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{usuario.email}</span>
            <button
              onClick={() => setCarritoAbierto(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut size={20} />
              Salir
            </button>
          </div>
        </div>
      </header>

      <main>
        <Productos productos={productos} onAgregarAlCarrito={handleAgregarAlCarrito} />
        <Anuncios anuncios={anuncios} />
      </main>

      <Carrito
        items={carritoItems}
        onUpdateCantidad={handleUpdateCantidad}
        onRemoveItem={handleRemoveItem}
        onPagar={handlePagar}
        isOpen={carritoAbierto}
        onClose={() => setCarritoAbierto(false)}
      />

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 ProyectoresPlus. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;