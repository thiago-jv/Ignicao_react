import React, { useState, useEffect } from 'react'
import './TestComponent.css'

function TestComponent (props: {  name:string }) {

    const [age, setAge] = useState(21)
    
    useEffect(() => {
        console.log('Componente was created')

    }, [])

    useEffect(() => {
     console.log('Age has benn update to: ' + age)
    }, [age])
    
    return <div className="TesteComponent">
     Olá, { props.name}, {age}
     <button onClick={() => {
        setAge(age + 1)
        }}>
        +    
        </button>
    </div>
}  

export default TestComponent