const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
}

const CalcularTriple = (a: number): string => {

    return `${a * 3}`;

}

export const BasicFunctions = () => {

    return (
        <>
            <h3>Funciones Básicas</h3>
            <span>El resultado de sumar 2+15= {addTwoNumbers(2, 15)}</span>
            <span>El triple de 2 es: {CalcularTriple(2)}</span>
        </>
    );
};