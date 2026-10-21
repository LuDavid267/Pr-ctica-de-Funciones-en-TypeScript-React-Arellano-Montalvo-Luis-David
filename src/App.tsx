import { Calculadora } from "./components/Calculadora"
import { ConversorTemperatura } from "./components/ConversorTemperatura"
import { CalculadoraIMC } from "./components/CalculadoraIMC"
import { ValidadorEdad } from "./components/ValidadorEdad"
import { AnalizadorTexto } from "./components/AnalizadorTexto"
import { EstadisticasArreglo } from "./components/EstadisticasArreglo"
import { GeneradorPassword } from "./components/GeneradorPassword"
import { AplicadorDescuentos } from "./components/AplicadorDescuentos"
import { SistemaCalificaciones } from "./components/SistemaCalificaciones"
import { CarritoCompras } from "./components/CarritoCompras"

function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-svh bg-sky-600">
      <header className="mb-8 text-center">
        <h1 className="text 3x1 font-bold underline">React + TS</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {<Calculadora />}
        {<ConversorTemperatura />}
        {<CalculadoraIMC />}
        {<ValidadorEdad />}
        {<AnalizadorTexto />}
        {<EstadisticasArreglo />}
        {<GeneradorPassword />}
        {<AplicadorDescuentos />}
        {<SistemaCalificaciones />}
        {<CarritoCompras />}
      </main>
    </div>
  )
}

export default App
