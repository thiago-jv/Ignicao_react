import React, { useState } from 'react'
import './TestComponent.css'

function TestComponent (props: {  name:string }) {

    const [age, setAge] = useState(21)
    
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