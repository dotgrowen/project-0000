import Link from 'next/link';



function Navbar(props) {
    return (
        <nav>
            <ul className="navbar" >
                {props.children}
            </ul>
        </nav>
    )
}

function NavbarLogo() {
    return (
            <Link href="/">
                <div className="nav-item-1"></div>
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