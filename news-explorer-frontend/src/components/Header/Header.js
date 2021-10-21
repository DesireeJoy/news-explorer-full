import { Link } from 'react-router-dom';
 import Navigation from '../Navigation/Navigation';
  import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Header(props) {
     
    return (
        (
            <header className='header'>
                <Link className={`header__logo header__logo_${props.savedNewsLocation ? 'black' : 'null'}`} to='/' >NewsExplorer</Link>
                {props.mobile ? (
                    <MobileNavigation
                        mobileNavOpen={props.mobileNavOpen}
                        onSigninClick={props.onSigninClick}
                        onClose={props.onClose}
                        mobile={props.mobile}
                        Loggedin={props.Loggedin}
                        onSignOut={props.onSignOut}
                        savedNewsLocation={props.savedNewsLocation}
                        values={props.values}
                    />
                ) : (
                    <Navigation
                        savedNewsLocation={props.savedNewsLocation}
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                        mobileMenuOpen={props.mobileMenuOpen}
                        Loggedin={props.Loggedin}
                        onSignOut={props.onSignOut}
                        values={props.values}
                    />
                )}
                {props.mobile && (
                    <button
                        className={`header__hamburger header__hamburger_${props.savedNewsLocation ? 'black' : 'null'} header__hamburger_${props.mobileNavOpen ? 'hidden' : 'null'}`}
                        onClick={props.onHamburgerClick}
                    ></button>
                        )}
            </header>
        )
    )
}

export default Header;