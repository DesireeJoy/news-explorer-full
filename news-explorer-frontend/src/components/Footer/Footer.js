import facebookLogo from '../../images/facebook.svg';
import githubLogo from '../../images/github.svg';
function Footer(){
    return(
        (
            <footer className='footer'>
                <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
                <nav className='footer__link'>
                    <ul className='footer__list'>
                        <li><a className='footer__link' href= '/' target='_self' rel='noreferrer'>Home</a></li>
                        <li className='footer__list-item'><a className='footer__link' href= 'https://practicum.yandex.com/' target='_blank' rel='noreferrer'>Practicum by Yandex</a></li>
                        <li><a className='footer__link'href='https://github.com/lmontem/news-explorer-frontend' target='_blank' rel='noreferrer'><img src={githubLogo} alt='github logo' /></a></li>
                        <li><a className='footer__link'href='https://www.facebook.com/YPracticum' target='_blank' rel='noreferrer'><img src={facebookLogo} alt='facebook logo' /></a></li>
                        
                    </ul>
                </nav>
            </footer>
        )
    )
}
export default Footer;