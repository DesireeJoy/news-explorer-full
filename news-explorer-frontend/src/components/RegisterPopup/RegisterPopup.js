import Popup from "../Popup/Popup"
import React, { useState } from 'react';


function RegisterPopup(props) {
 

    return (
        (
            <Popup
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={props.onSubmit}
                name='sign-up' title='Sign up'
            >
                <div className="login" >    
                    <label className='login__label'>Email</label>
                    <input className="login__input" placeholder="Enter your email" name="email" type="email" required value={props.values.email} onChange={props.handleChangeForm} />
                    <label className='login__label'>Password</label>
                    <input className="login__input" placeholder="Enter password" name="password" type="password" required value={props.values.password} onChange={props
                        .handleChangeForm} />
                    <label className='login__label'>Username</label>
                    <input className="login__input" placeholder="Enter your username" name="name" type="text" required value={props.values.name} onChange={props.handleChangeForm} />
                    <span className='login__error'>{props.duplicateEmail && 'Duplicate email'}</span>
                    <button type="submit"   className="login__btn">Sign up</button>


                    <div className="login__signup">
                        <p className='login__extraText'>or
                <span className="login__link" onClick={props.onSigninClick}>Sign in</span>
                        </p>
                    </div>
                </div>
            </Popup>
        )
    )
}

export default RegisterPopup;