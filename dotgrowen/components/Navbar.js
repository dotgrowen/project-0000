import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';


function Navbar(props) {

    const { user, username } = useContext(UserContext)

    return (
        <nav>
            <ul className="navbar" >
                {props.children}
            </ul>
        </nav>
    )
}

function NavbarLogo() {
    const { user, username } = useContext(UserContext)
    return (
            <Link href="/">
                {username ? <h6 className="nav-main">welcome {username}</h6> : <div className="nav-item-1"></div>}
            </Link>
    )
}

function NavItem(props) {
    return (
        <li>
            <a href={props.link}  target={props.at ? "_blank" : null}>
                <button className="nav-items">{props.at ? <span className="green-dot">{props.at}</span> :  <span className="green-dot">. </span>}{props.tab}</button>
            </a>
        </li>
    )
}



export { Navbar, NavbarLogo, NavItem }