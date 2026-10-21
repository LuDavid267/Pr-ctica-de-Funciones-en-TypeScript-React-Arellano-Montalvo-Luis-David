//SistemaCalificaciones.tsx
export const SistemaCalificaciones = () => {
    // TODO: Implementar calcularPromedio(calificaciones: number[]): number
    // Pista: usar reduce y dividir entre la longitud
    const calcularPromedio = (calificaciones: number[]): number => {
        if (calificaciones.length === 0) return 0;
        const suma = calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / calificaciones.length;
    }

    // TODO: Implementar obtenerLetra(promedio: number): string
    // >= 90 → "A" | >= 80 → "B" | >= 70 → "C" | >= 60 → "D" | >= 60 → "F"
    const obtenerLetra = (promedio: number): string => {
        if (promedio >= 90) return "A";
        if (promedio >= 80) return "B";
        if (promedio >= 70) return "C";
        if (promedio >= 60) return "D";
        return "F";
    }

    // TODO: Implementar estaAprobado(promedio: number): boolean
    // Retorna true si promedio => 70
    const estaAprobado = (promedio: number): boolean => {
        if (promedio >= 70) return true;
        return false;
    }

    const alumnos = [
        { nombre: "Ana", califs: [95, 88, 92] },
        { nombre: "Luis", califs: [70, 65, 72] },
        { nombre: "María", califs: [85, 90, 88] }
    ];

    return (
        <div className="p-4 m-2 bg-slate-800 text-white rounded-xl shadow-md border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Sistema de Calificaciones</h3>
            {/* TODO: recorrer alumnos con .map() y para cada uno: */}
            {/* 1. Calcular el promedio */}
            {/* 2. Obtener la letra */}
            {/* 3. Verificar si está aprobado */}
            {/* 4. Mostrar: nombre, promedio (1 decimal), letra y estado */}
            {alumnos.map((alumno, posicion) => {
                const promedio = calcularPromedio(alumno.califs);
                const letra = obtenerLetra(promedio);
                const estado = estaAprobado(promedio) ? "Aprobado" : "Reprobado";
                return (
                    <p key={posicion}>{alumno.nombre} - Promedio: {promedio.toFixed(1)} - Letra {letra} - {estado}</p>
                );
            })}
        </div>
    );
};