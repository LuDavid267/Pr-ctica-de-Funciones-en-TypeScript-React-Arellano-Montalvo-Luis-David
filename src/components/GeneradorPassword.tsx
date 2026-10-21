//GeneradorPassword.tsx
export const GeneradorPassword = () => {

    //TODO: Implementar GenerarPassword(longitud, incluirNumeros, incluirSimbolos): string
    // 1. Definir strings base: letras, numeros, simbolos
    // 2. Concatenar según las banderas booleanas
    // 3. Usar un bucle for para construir la contraseña
    // 4. Usar Math.random() para elegir caracteres aleatorios
    const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
        const caracteres: string = letras + (incluirNumeros ? numeros : '') + (incluirSimbolos ? simbolos : '');
        return Array.from({ length: longitud }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('');
    }

    const letras = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Generador de Contraseñas</h3>
            <p>Básica (8): {/*TODO: generarPassword(8, false, true) */ generarPassword(8, false, true)}</p>
            <p>Media (12): {/*TODO: generarPassword(12, true, false) */ generarPassword(12, true, false)}</p>
            <p>Fuerte (16): {/*TODO: generarPassword(16, true, true) */ generarPassword(16, true, true)}</p>
        </div>
    );
};