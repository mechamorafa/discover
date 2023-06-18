import './Logo.css'
import logo from '../../assets/img/ico.png'
import React from 'react'


export default function Logo() {
    return <aside className="logo">
        <a href="/" className="logo">
            <img src={logo}  alt="logo" />
        </a>
    </aside>;
}