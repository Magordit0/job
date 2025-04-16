export interface Usuario {
  email: string;
  password: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export interface Anuncio {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
}

export interface CarritoItem {
  producto: Producto;
  cantidad: number;
}