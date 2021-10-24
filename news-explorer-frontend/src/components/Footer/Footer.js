import twitterLogo from '../../images/twitter.svg';
import linkedInLogo from '../../images/linkedIn.svg';
import githubLogo from '../../images/github.svg';
function Footer(){
    return(
        (
            <footer className='footer'>
                <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
                <nav className='footer__link'>
                    <ul className='footer__list'>
                        <li className='footer__list-item'><a className='footer__link' href= '/' target='_self' rel='noreferrer'>Home</a></li>
                        <li className='footer__icon'><a className='footer__link'href='https://github.com/DesireeJoy/' target='_blank' rel='noreferrer'><img src={githubLogo} className='footer__icon-image' alt='github logo' /></a>
                        <a className='footer__link'href='https://www.linkedin.com/in/desiree-bradish-a5728bb/' target='_blank' rel='noreferrer'><img src={linkedInLogo} className='footer__icon-image' alt='linkedIn logo' /></a>
                        <a className='footer__link'href='https://twitter.com/DesireeJoy' target='_blank' rel='noreferrer'><img src={twitterLogo} className='footer__icon-image' alt='twitter logo' /></a></li>
                        
                    </ul>
                </nav>
            </footer>
        )
    )
}
export default Footer;