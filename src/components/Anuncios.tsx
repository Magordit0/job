import React from 'react';
import { Anuncio } from '../types';

interface AnunciosProps {
  anuncios: Anuncio[];
}

export function Anuncios({ anuncios }: AnunciosProps) {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Anuncios y Ofertas</h2>
        <div className="grid gap-6">
          {anuncios.map((anuncio) => (
            <div key={anuncio.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{anuncio.titulo}</h3>
              <p className="text-gray-600 mb-2">{anuncio.contenido}</p>
              <p className="text-sm text-gray-500">
                Publicado: {new Date(anuncio.fecha).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}