//EstadisticasArreglo.tsx
export const EstadisticasArreglo = () => {
    //TODO: Implementar CalcularPromedio(nums): number
    //Pista:  usar reduce para sumar y dividir entre nums.length
    const calcularPromedio = (nums: number[]): number => {
        if (nums.length === 0) return 0;
        const suma = nums.reduce((acumulador, num) => acumulador + num, 0);
        return suma / nums.length;
    }

    //TODO: Implementar encontrarMaximo(nums): number
    //Pista: usar Math.max(...nums)
    const encontrarMaximo = (nums: number[]): number => {
        if (nums.length === 0) return 0;
        return Math.max(...nums);
    }

    //TODO: Implementar encontrarMinimo(nums): number
    //Pista: usar Math.min(...nums)
    const encontrarMinimo = (nums: number[]): number => {
        if (nums.length === 0) return 0;
        return Math.min(...nums);
    }

    const numeros = [8, 3, 15, 7, 22, 11, 4];

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Estadísticas</h3>
            <p>Números: [{numeros.join(', ')}]</p>
            <p>Promedio: {/*TODO con toFixed(2) */calcularPromedio(numeros).toFixed(2)}</p>
            <p>Máximo: {/*TODO */encontrarMaximo(numeros)}</p>
            <p>Mínimo: {/*TODO */encontrarMinimo(numeros)}</p>
        </div>
    )
};