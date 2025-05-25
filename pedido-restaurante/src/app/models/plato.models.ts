export interface Plato {
    id: number;
    nombre: string;
    tipo: 'Entrante' | 'Plato Principal' | 'Postre' | 'Bebida';
    descripcion: string;
    precio: number;
    imagenUrl?: string;
    categoria?: string;
    disponible: boolean;
}