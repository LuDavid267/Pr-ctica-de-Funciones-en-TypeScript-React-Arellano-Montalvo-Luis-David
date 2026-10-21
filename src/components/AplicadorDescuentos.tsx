//AplicadorDescuentos.tsx
export const AplicadorDescuentos = () => {

    // TODO: Implementar aplicarDescuento(precio, calcularDescuento): number
    // Retorna: precio - calcularDescuento(precio)
    // IMPORTANTE: el segundo parámetro es una FUNCIÓN (callback)
    const aplicarDescuento = (precio: number, calcularDescuento: (precio: number) => number): number => {
        return precio - calcularDescuento(precio);
    }

    // TODO: Implementar las 3 funciones de descuento:
    // const descuento10 = (p: number): number => p * 0.10;
    const descuento10 = (p: number): number => p * 0.10;

    // const descuento25 = (p: number): number => p * 0.25;
    const descuento25 = (p: number): number => p * 0.25;

    // const descuentoEstudiante = (p: number): number => p * 0.15;
    const descuentoEstudiante = (p: number): number => p * 0.15;

    const precio = 1000;

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Aplicador de Descuentos</h3>
            <p>Precio Original: ${precio}</p>
            <p>Con 10% Off: ${/*TODO: aplicarDescuento(precio, descuento10) */aplicarDescuento(precio, descuento10)}</p>
            <p>Con 25% Off: ${/*TODO: aplicarDescuento(precio, descuento25) */aplicarDescuento(precio, descuento25)}</p>
            <p>Descuento de estudiante: ${/*TODO: aplicarDescuento(precio, descuentoEstudiante) */
                aplicarDescuento(precio, descuentoEstudiante)}</p>
        </div>
    );
};