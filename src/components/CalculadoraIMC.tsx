//CalculadoraIMC.tsx

export const CalculadoraIMC = () => {
    //TODO: Implementar calcularIMC(peso, altura): number
    //Fórmula: peso/(altura*altura)
    const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

    //TODO: Implementar clasificarIMC(imc): string
    //<18.5 => "Bajo peso"
    //<25 => "Normal"
    //<30 => "Sobre peso"
    //>= 30 => "Obesidad"
    const clasificarIMC = (imc: number): string => {
        if (imc < 18.5) return "Bajo Peso";
        if (imc < 25) return "Normal";
        if (imc < 30) return "SobrePeso";
        return "Obesidad";
    }

    const peso = 70;
    const altura = 1.75;

    //TODO: Calcular el IMC usando la función
    //const imc = calcularIMC(peso, altura);
    const imc = calcularIMC(peso, altura);

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Calculadora de IMC</h3>
            <p>Peso: {peso} kg | Altura: {altura} m</p>
            <p>IMC: {imc.toFixed(2)}</p>
            <p>Clasificación: <strong>{/*TODO: llamar clasificarIMC*/clasificarIMC(imc)}</strong></p>
        </div>
    );
};