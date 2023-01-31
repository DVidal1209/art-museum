import React from 'react'
import './style.css'

export default function NavBar() {

    return (
        <>
            <nav>
                <img src='../mountain-removebg-preview.png' alt='mountain logo' />
                <h2 onClick={() => props.changePage("aboutme")}>About me</h2>
                <h2 onClick={() => props.changePage("project")}>Projects</h2>
                <h2 onClick={() => props.changePage("contact")}>Contact</h2>
                <h2 onClick={() => props.changePage("resume")}>Resume</h2>
            </nav>
        </>
    )
}
