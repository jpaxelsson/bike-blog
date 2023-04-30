import * as React from "react"

const Footer = () => {
    return <>
    <footer>
        {/* <h4>Jonas Axelsson<br/>{new Date().getFullYear()}</h4> */}
        {/* <p>Jonas Axelsson<br/>{new Date().getFullYear()}</p> */}
        <p>Jonas Axelsson {new Date().getFullYear()}</p>
        <div id="scroll-to-top"><a href="#">Up!</a></div>
    </footer>
    </>
}

export default Footer; 