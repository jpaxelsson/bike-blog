import * as React from "react"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"
import { useState } from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    width: 100%;
    height: 50px;
    background-color: lightsalmon;

    ul { 
        display: flex;
        flex-wrap: wrap;
        float: right; 
        margin: 20 0px;
        padding: 0 0px;
    }

    ul li { 
        list-style-type: none;
        padding: 0px 20px;
    }

    li:hover { 
        color: black;
    }

    a {
        text-decoration: none;
        padding: 0px 0px;
        color: black;
    }
`

const Nav = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState( false )

    const toggleHamburger = () => {
        setHamburgerOpen( !hamburgerOpen )
    }

    return <>
        <StyledNav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </StyledNav>

        <style jsx>{
        `@media only screen and (max-width: 480px){
            
            .navigation ul {
                display: ${hamburgerOpen ? 'flex' : 'none'};
                background-color: lightcoral;
                height: 94vh;
                width: 50vw;
                margin-top: 50px;
                flex-direction: column; 
                gap: 20px;
                position: absolute;
                font-size: 1.5rem; 
                z-index: 99;
            }

            .navigation li {
                margin-top: 10px;
            }
        `}    
        </style>
    </>
}

export default Nav; 