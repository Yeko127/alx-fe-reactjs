import {Link} from "react-router-dom";

function Navbar(){
    const navStyle = {backgroundColor: "blue", padding: "1rem"};
    const listStyle ={display: "flex", justifyContent: "Center", gap: "2rem", listStyle: "none", margin: 0, padding: 0};
    const linkStyle = {color: "white", textDecoration:"none", fontSize: "1.2rem", fontWeight: "bold"};
        

    return(
        <nav style={navStyle}>
            <ul style={listStyle}> 
                <li><link to="/" style={linkStyle}>Home</link></li>
                <li><link to="/about" style={linkStyle}>About</link></li>
                <li><link to="/services" style={linkStyle}>Services</link></li>
                <li><link to="/contact" style={linkStyle}>Contact</link></li>
            </ul>
       
        </nav>

    )
}

export default Navbar;