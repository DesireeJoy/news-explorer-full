import { NavLink } from 'react-router-dom';
import signOut from '../../images/signout-black.svg';
import signOutWhite from '../../images/signout-white.svg';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Navigation(props) {
const currentUser = React.useContext(CurrentUserContext)
    const isMobile = props.mobile ? "mobile" : "";
// console.log(props.values)
    return (
        (
             <nav className={`navigation_${isMobile} navigation`}>
                <NavLink className={`navigation__text navigation__text_home navigation__text_${props.savedNewsLocation ? 'black' : 'null'}`} activeClassName='navigation__text_active' exact to='/'>Home</NavLink>
   
                {props.Loggedin ?
                    (<NavLink className={`navigation__text navigation__text_saved navigation__text_${props.savedNewsLocation ? 'black' : 'null'}`} activeClassName='navigation__text_active navigation__text_active-black' exact to='/saved-news'>
                        Saved articles</NavLink>) : null}
                        
                    {props.Loggedin ? (
                            <button onClick={props.onSignOut}
                    className={` navigation__btn navigation__text navigation__btn_${props.savedNewsLocation ? 'black' : 'null'} navigation__text_${props.savedNewsLocation ? 'black' : 'null'}`}>
                       <span className='navigation__btn-username'>
                          {currentUser && currentUser.name}
                           </span> 
                        <img src={props.savedNewsLocation ? signOut : signOutWhite}
                        className='navigation__signout'alt='signout' />
                    </button>


                    ): (

                        <button onClick={props.onSigninClick}
                        className={`navigation__btn navigation__text navigation__btn_${props.savedNewsLocation ? 'black' : 'null'} navigation__text_${props.savedNewsLocation ? 'black' : 'null'}`}>
                            Sign in</button>
                
                    )}
               
            </nav>

        )
    )
}


export default Navigation;