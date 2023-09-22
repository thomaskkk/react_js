import './TextField.css'
import React from 'react'

interface TextFieldProps {
    onChange: (valor: string) => void
    label: string
    value: string
    placeholder: string
    required?: boolean

} 

const TextField = ({ onChange, label, value, placeholder, required = false }: TextFieldProps) => {

    const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)

    }

    return (
        <div className='text-field'>
            <label>{label}</label>
            <input
                value={value}
                onChange={onType}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextField