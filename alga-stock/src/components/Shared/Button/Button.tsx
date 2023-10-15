import React from 'react'
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    children: string
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className='AppButton' 
        onClick={props.onClick}>

        { props.children || 'Botão sem nome' }
    
    </button>
}


export default Button