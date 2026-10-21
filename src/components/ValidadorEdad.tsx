//ValidadorEdad.tsx
export const ValidadorEdad = () => {
    //TODO: Implementar esMayorDeEdad(edad): boolean
    //Retorna true si edad >= 18

    const esMayorDeEdad = (edad: number): boolean => edad >= 18;

    //TODO: implementar obtenerMensaje(edad): string
    //Si es mayor => "Puede votar"
    //Si es menor => `Le faltan ${18- edad} años`
    const obtenerMensaje = (edad: number): string => {
        if (esMayorDeEdad(edad)) {
            return "Puede Votar";
        }
        return `le faltan ${18 - edad} años`;
    }

    const edades = [15, 18, 25, 12];

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Validador de edad</h3>
            {edades.map((edad, posicion) => (
                <p key={posicion}>
                    Edad: {edad} - {obtenerMensaje(edad)}
                </p>
            ))}
        </div>
    );
};