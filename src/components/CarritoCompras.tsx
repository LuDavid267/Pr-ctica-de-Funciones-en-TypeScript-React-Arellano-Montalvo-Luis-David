//CarritoCompras.tsx
export const CarritoCompras = () => {
    // TODO: Implementar calcularSubtotal(precio, cantidad): number
    // Retorna: precio * cantidad
    const calcularSubtotal = (precio: number, cantidad: number): number => {
        const subtotal = precio * cantidad;
        return subtotal;
    }

    // TODO: Implementar calcularIVA(subtotal): number
    // Retorna: subtotal * 0.16
    const calcularIVA = (subtotal: number): number => {
        const iva = subtotal * 0.16;
        return iva;
    }

    // TODO: Implementar calcularTotal(subtotal): number
    // Retorna: subtotal + calcularIVA(subtotal)
    const calcularTotal = (subtotal: number): number => {
        const total = subtotal + calcularIVA(subtotal);
        return total;
    }

    // TODO: Implementar formatearPrecio(precio): string
    // Retorna: `$${precio.toFixed(2)}`
    const formatearPrecio = (precio: number): string => {
        return `$${precio.toFixed(2)}`;
    }

    const carrito = [
        { producto: "Laptop", precio: 15000, cantidad: 1 },
        { producto: "Mouse", precio: 350, cantidad: 2 },
        { producto: "Teclado", precio: 800, cantidad: 1 }
    ];

    // TODO: Calcular el subtotal general usando .reduce()
    // const subtotal = carrito.reduce(
    // (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0
    // );
    const subtotal = carrito.reduce((acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0);

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Carrito de Compras</h3>
            {/* TODO: recorrer carrito con .map() y mostrar cada producto con su subtotal */
                carrito.map((item, posicion) => (
                    <p key={posicion}>{item.producto} x {item.cantidad} - {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}</p>
                ))}
            <hr />
            <p>Subtotal: {/*TODO: formatearPrecio(subtotal) */ formatearPrecio(subtotal)}</p>
            <p>IVA (16%): {/*TODO: formatearPrecio(calcularIVA(subtotal)) */ formatearPrecio(calcularIVA(subtotal))}</p>
            <p><strong>Total: {/*TODO: formatearPrecio(calcularTotal(subtotal)) */formatearPrecio(calcularTotal(subtotal))}</strong></p>
        </div>
    );
};