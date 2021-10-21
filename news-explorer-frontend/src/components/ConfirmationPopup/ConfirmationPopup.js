import Popup from "../Popup/Popup";

function ConfirmationPopup(props) {
    return (
        (<Popup
                isOpen={props.isOpen}
                onClose={props.onClose}
                name='confirm' title='Registration successfully completed!'
            >
                <div className="confirmation__link login__link" onClick={props.onSigninClick}>Sign in</div>
            </Popup>
        
        )
    )
}

export default ConfirmationPopup;