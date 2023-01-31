import React from 'react'
import './navigation.css'

export default function Navigation(props) {
    return (
        <>
            <nav>
                <img src='../mountain-removebg-preview.png' alt='mountain logo' />
                <h2 onClick={() => props.changePage("museums")}>Museums</h2>
                <h2 onClick={() => props.changePage("home")}>Home</h2>
                <h2 onClick={() => props.changePage("login")}>Login/Sign-up</h2>
            </nav>
        </>
    )
}
