//Calculadora tsx
export const Calculadora = () => {
    //TODO: Implementar las 4 funciones

    //Sumar los valores
    const sumar = (a: number, b: number): number => a + b;
    //Restar los valores
    const restar = (a: number, b: number): number => a - b;
    //Multiplicar los valores
    const multlipicar = (a: number, b: number): number => a * b;
    //Dividir los valores
    const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b); // Si b === 0, retornar 0

    const a = 15;
    const b = 4;

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Calculadora</h3>
            <p>{a} + {b} = {/*TODO: llamar sumar*/sumar(a, b)}</p>
            <p>{a} - {b} = {/*TODO: llamar restar*/restar(a, b)}</p>
            <p>{a} * {b} = {/*TODO: llamar multiplicar*/multlipicar(a, b)}</p>
            <p>{a} / {b} = {/*TODO: llamar dividir con toFixed(2)*/dividir(a, b).toFixed(2)}</p>
        </div>
    );
};