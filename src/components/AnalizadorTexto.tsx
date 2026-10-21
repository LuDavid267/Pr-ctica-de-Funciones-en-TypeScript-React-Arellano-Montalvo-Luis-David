//AnalizadorTexto.tsx
export const AnalizadorTexto = () => {

    //TODO: Implementar cortarPalabras(texto): number
    //Pista: usar texto.trim().split(/\s+/)
    const cortarPalabras = (texto: string): number => {
        const text = texto.trim();
        return text === '' ? 0 : text.split(/\s+/).length;
    }

    //TODO: Implementar contarVocales(texto): number
    //Pista: usar texto.match(/[aeiouáéíóú]/gi)
    const contarVocales = (texto: string): number => {
        const vocales = texto.match(/[aeiouáéíóú]/gi);
        return vocales ? vocales.length : 0;
    }

    //TODO: Implementar invertirTexto(texto): string
    //Pista: usar split('').reverse().join('')
    const invertirTexto = (texto: string): string => {
        return texto.split('').reverse().join('');
    }

    const texto = "Hola mundo desde Typescript";

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Analizador de Texto</h3>
            <p>Texto: "{texto}"</p>
            <p>Palabras: {/*TODO */cortarPalabras(texto)}</p>
            <p>Vocales: {/*TODO */contarVocales(texto)}</p>
            <p>Invertido: {/*TODO */invertirTexto(texto)}</p>
        </div>
    );
};