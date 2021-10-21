import { useEffect } from 'react';
function Popup(props) {
    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    })

    function handleEscClose(e) {
        if (e.key === 'Escape') {
            props.onClose()
        }
    }
    function handleOverlayClick(e) {
        if (e.target.classList.contains('popup__opened')) {
            props.onClose();
        }
    }
    return (
        (
            <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_visible" : ""}`} onClick={handleOverlayClick} >
                <div className="popup__box">
                    <button className="popup__close-btn" type="button" aria-label="Close" onClick={props.onClose}></button>
                    <div className="popup__container">
                        <h3 className="popup__title">{props.title}</h3>
                        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
                            {props.children}

                        </form>
                    </div>

                </div>
            </div>
        )
    )
}

export default Popup;