
import creator from '../../images/Desi.png';

function About(props) {
    return (
        (
            <section className='about'>
                <img className='about__image' src={creator} alt='the author' />
                <div className='about__container'>
                    <h2 className='about__heading'>Desiree Joy</h2>
                    <p className='about__description'>is a 2021 full stack bootcamp graduate of Practicum by Yandex. 
                    <br /> She is proficient in the MERN stack and is eager to focus on accesibility on the web.</p>
                </div>
            </section>
        )
    )
}

export default About;