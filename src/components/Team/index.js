import Card from '../Card'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.coworkers.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='coworkers'>
                {props.coworkers.map(coworker => <Card bgColor={props.primaryColor} key={coworker.name} name={coworker.name} role={coworker.role} image={coworker.image} />)}
            </div>
        </section>
        : ''
    )
}

export default Team