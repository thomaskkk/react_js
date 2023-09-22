import './Banner.css'

interface BannerProps {
    imgAddress: string
    altText?: string
}

const Banner = ({ imgAddress, altText } :BannerProps) => {
    return (
        <header className='banner'>
            <img src={imgAddress} alt={altText} />
        </header>
    )
}

export default Banner