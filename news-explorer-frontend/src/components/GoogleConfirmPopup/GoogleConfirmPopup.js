import Popup from "../Popup/Popup";

function GoogleConfirmPopup(props) {
    return (
        (<Popup
                isOpen={props.isOpen}
                onClose={props.onClose}
                name='confirm' title='This Google Account is already registered with a password.'
            >
                <div className="confirmation__link login__link" onClick={props.onSigninClick}>Sign in</div>
            </Popup>
        
        )
    )
}

export default GoogleConfirmPopup;