import { Producto, Anuncio } from './types';

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Proyector 4K Pro',
    descripcion: 'Proyector de alta definición con resolución 4K, 3500 lúmenes y conectividad HDMI.',
    precio: 799.99,
    imagen: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    nombre: 'Proyector Portátil Mini',
    descripcion: 'Proyector compacto ideal para presentaciones, 1080p con batería incorporada.',
    precio: 299.99,
    imagen: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    nombre: 'Proyector Cine en Casa',
    descripcion: 'Proyector de cine en casa con sonido envolvente y pantalla de hasta 300 pulgadas.',
    precio: 1299.99,
    imagen: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&q=80',
  },
];

export const anuncios: Anuncio[] = [
  {
    id: 1,
    titulo: '¡Oferta Especial!',
    contenido: 'Descuento del 20% en todos los proyectores este fin de semana.',
    fecha: '2024-03-15',
  },
  {
    id: 2,
    titulo: 'Nuevo Modelo Disponible',
    contenido: 'Llegó el nuevo proyector 4K Pro con tecnología láser.',
    fecha: '2024-03-14',
  },
];