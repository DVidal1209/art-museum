import React from 'react'
import './navigation.css'
import Auth from '../../utils/auth'
export default function Navigation(props) {
    return (
        <>
            <nav>
                <img src='https://res.cloudinary.com/dgnio63sm/image/upload/v1675730246/IMG-0090_hghfql.png' alt='mountain logo' />
                <h2 onClick={() => window.location.href ='/museums'}>Museums</h2>
                <h2 onClick={() => window.location.href ='/'}>Home</h2>
                {Auth.loggedIn() ? (
                    <>
                        <h2 onClick={Auth.logout}>Signout</h2>
                        <h2 onClick={() => window.location.href ='/profile'}>Profile</h2>
                    </>
                    ) : (
                    <h2 onClick={() => window.location.href ='/login'}>Login/Sign-up</h2>

                )
                }
            </nav>
        </>
    )
}
