import { useState } from "react"
export const Counter = () => {
    //Hook:
    // Los hooks en programación son un mecanismo potente y flexible 
    // que permite a los desarrolladores modificar el comportamiento 
    // de una aplicación sin alterar su estructura subyacente.

    const [count, setcount] = useState(10)

    const increaseBy = (value: number) => {
        //setcount(count + value)
        //setcount((current) => current + value)
        setcount(Math.max(count + value, 0))
    }
    return (
        <>
            <h3 className="text-2xl">Contador: <small className="font-bold">{count}</small></h3>
            <div>
                <button
                    onClick={() => increaseBy(+1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
                    +1
                </button>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
                    -1
                </button>
            </div>
        </>

    )
}
