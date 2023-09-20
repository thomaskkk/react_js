import './Form.css'
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <TextField
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    onChange={value => setCargo(value)}
                />
                <TextField
                    required={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    onChange={value => setImagem(value)}
                /> 
                <Dropdown
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={time}
                    onChange={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>

    )
}

export default Form