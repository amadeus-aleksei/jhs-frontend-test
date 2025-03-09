import facebookIcon from '../assets/facebook-icon.svg'
import tiktokIcon from '../assets/tiktok-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'

const HeroSection = ({ title }) => {
    return (
        <section className='hero-section'>
            <h1 className="title">We <span className="text-highlight">SERVE</span> Chicagoland homeowners in need of solutions, <span className="text-highlight">REBUILD</span> neighborhood homes, and <span className="text-highlight">FULFILL</span> family dreams</h1>
            <div className="socials-container">
                <a href=''><img src={facebookIcon} className='socials-icon'/></a>
                <a href=''><img src={tiktokIcon} className='socials-icon'/></a>
                <a href=''><img src={instagramIcon} className='socials-icon'/></a>
                <a href=''><img src={linkedinIcon} className='socials-icon'/></a>
            </div>
        </section>
    )
}

export default HeroSection