import './TextField.css'
import React from 'react'

interface TextFieldProps {
    onChange: (valor: string) => void
    label: string
    value: string
    required: boolean
    placeholder: string

} 

const TextField = (props: TextFieldProps) => {

    const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)

    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onType}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField