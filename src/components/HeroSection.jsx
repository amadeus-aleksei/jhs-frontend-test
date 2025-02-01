import FacebookIcon from "./icons/FacebookIcon.jsx"
import InstagramIcon from './icons/InstagramIcon.jsx'
import LinkedInIcon from './icons/LinkedInIcon.jsx'
import TikTokIcon from './icons/TikTokIcon.jsx'

const HeroSection = ({ title }) => {
    return (
        <section className='hero-section'>
            <h1 className="title">We <span className="text-highlight">SERVE</span> Chicagoland homeowners in need of solutions, <span className="text-highlight">REBUILD</span> neighborhood homes, and <span className="text-highlight">FULFILL</span> family dreams</h1>
            <div className="socials-container">
                <a href='https://www.facebook.com/jadahomesolutions/'><FacebookIcon /></a>
                <a href='https://www.tiktok.com/@jadahomesolutions'><TikTokIcon /></a>
                <a href='https://www.instagram.com/jadahomesolutions?igsh=MWRkamdwODNkejhtcw=='><InstagramIcon /></a>
                <a href='https://www.linkedin.com/company/jada-home-solutions'><LinkedInIcon /></a>
            </div>
        </section>
    )
}

export default HeroSection