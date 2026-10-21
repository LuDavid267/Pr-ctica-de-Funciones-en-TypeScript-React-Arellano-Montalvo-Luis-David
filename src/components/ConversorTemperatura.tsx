//ConversorTemperatura.tsx

export const ConversorTemperatura = () => {
    //TODO: Implementar las 2 funciones de conversión
    //const celciusFahrenheit = (c: number): number => {...};
    //const fahrenheitCelsius = (f: number): number => {...};

    //Celsius a Fahrenheit
    const celciusFahrenheit = (c: number): number => ((c * (9 / 5)) + 32);
    //Fahrenheit a Celsius
    const fahrenheitCelsius = (f: number): number => ((f - 32) * (5 / 9));

    const temperatura = 25;

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Conversor de Temperatura</h3>
            <p>{temperatura}°C = {/*TODO: Convertir a Fahrenheit*/celciusFahrenheit(temperatura)}°F</p>
            <p>100°F = {/*TODO: Convertir a Celsius con toFixed(2)*/fahrenheitCelsius(temperatura).toFixed(2)}°C</p>
        </div>
    );
};