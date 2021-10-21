import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function MobileNavigation(props) {


    return (
        (
            <div className={`navigation__mobile navigation__mobile-${props.mobileNavOpen ? "null" : "hidden"}`}>
                <div className='navigation__mobile-container'>
                    <div className='navigation__mobile-header'>
                        <Link className={`header__logo header__logo_${props.savedNewsLocation ? 'black' : 'null'}`} to='/' >NewsExplorer</Link>
                        <button className="navigation__close-btn" onClick={props.onClose}></button>
                    </div>
                    <Navigation
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                        Loggedin={props.Loggedin}
                        onSignOut={props.onSignOut}
                    />

                </div>
            </div>
        )
    )
}

export default MobileNavigation;