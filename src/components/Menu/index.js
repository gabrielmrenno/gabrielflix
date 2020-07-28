import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        //retorna a tag Menu em JSX (HTML)
        <nav className= 'Menu'>
            <a href="/">
                <img className = 'Logo' src = {Logo} alt = 'Logo da AsuraFlix'/>
            </a>
            <Button className="ButtonLink" href="/">Novo vídeo</Button>
        </nav>
    ) 
}

//para ser usada em outro arquivo
export default Menu