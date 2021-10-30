
import creator from '../../images/Desi.png';

function About(props) {
    return (
        (
            <section className='about'>
                <img className='about__image' src={creator} alt='the author' />
                <div className='about__container'>
                    <h2 className='about__heading'>Desiree Joy</h2>
                    <p className='about__description'>Welcome to the final project of Desiree´Joy Bradish, Software Developer. This was created for the Practicum by Yandex Full Stack bootcamp. 
                    This project has a custom built API and REACT based front that are hosted on an AWS EC2 instance. A reverse proxy setup is managed by Nginx and secured with Certbot controls the traffic allowing the front and back ends to communicate. 
                    This project also utilizes a news API service that users can query and then save those articles to their own account.</p>
                </div>
            </section>
        )
    )
}

export default About;