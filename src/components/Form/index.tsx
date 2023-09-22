import './Form.css'
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';
import { ICoworker } from '../../shared/interfaces/ICoworker';

interface FormProps {
    recordCoworker: (coworker: ICoworker) => void
    teams: string[]
}

const Form = (props: FormProps) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.recordCoworker({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextField
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    onChange={value => setRole(value)}
                />
                <TextField
                    required={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}
                /> 
                <Dropdown
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>

    )
}

export default Form