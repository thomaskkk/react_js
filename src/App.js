import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

    const teams = [
        {
            name: 'Programação',
            secondaryColor: '#D9F7E9',
            primaryColor: '#57C278'
        },
        {
            name: 'Front-End',
            secondaryColor: '#E8F8FF',
            primaryColor: '#82CFFA'
        },
        {
            name: 'Data Science',
            secondaryColor: '#F0F8E2',
            primaryColor: '#A6D157'
        },
        {
            name: 'Devops',
            secondaryColor: '#FDE7E8',
            primaryColor: '#E06B69'
        },
        {
            name: 'UX e Design',
            secondaryColor: '#FAE9F5',
            primaryColor: '#DB6EBF'
        },
        {
            name: 'Mobile',
            secondaryColor: '#FFF5D9',
            primaryColor: '#FFBA05'
        },
        {
            name: 'Inovação e Gestão',
            secondaryColor: '#FFEEDF',
            primaryColor: '#FF8A29'
        }
    ]
    
    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
        console.log(colaboradores)
    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(team => team.name)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {teams.map(team => <Team key={team.name} name={team.name} secondaryColor={team.secondaryColor} primaryColor={team.primaryColor} />)}

        </div>
    );
}

export default App;
