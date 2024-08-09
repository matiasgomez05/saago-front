export default function ProductosId({
    params,
}: {
    params: {
        productoId: string;
    };
}) {
    return <h1>Producto N°{ params.productoId }</h1> 
}