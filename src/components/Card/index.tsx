import './Card.css'

interface CardProps {
    name: string
    image: string
    role: string
    bgColor: string
}

const Card = (props: CardProps) => {
    return (
        <div className='card'>
            <div className='header' style={{ backgroundColor: props.bgColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Card