import { useState, useEffect } from 'react'

function App() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [diff, setDiff] = useState(0);
    const [diffUseEffect, setDiffUseEffect] = useState(0);

    const calculateDifference = (a, b) => a - b;

    const handleChange = (event, setter) => {
        const value = parseFloat(event.target.value) || 0;
        setter(value);
        setDiff(calculateDifference(num1, num2));
    };

    useEffect(() => {
        setDiffUseEffect(calculateDifference(num1,num2));
    }, [num1, num2])


    return (
        <>
            <div>
                <h1>useState é Assíncrono</h1>
                <input type="number" value={num1} onChange={(e) => handleChange(e, setNum1)} placeholder="Número 1"/>
                <input type="number" value={num2} onChange={(e) => handleChange(e, setNum2)} placeholder="Número 2"/>
                <p>Diferença: {diff}</p>
            </div>
            <div>
                <h1>Cálculo Direto</h1>
                <p>Diferença: {calculateDifference(num1, num2)}</p>
            </div>
            <div>
                <h1>Cálculo via useEffect</h1>
                <p>Diferença: {diffUseEffect}</p>
            </div>
        </>
    )
}

export default App