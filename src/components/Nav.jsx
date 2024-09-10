import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"

const Nav = () => {
    return (
    <>
    <NavStyle>
        <header className="nav">
            <Link to='/' className="home">Home</Link>
            <Link to='/login' className="login">Login</Link>
        </header>
    </NavStyle>
    </>
    )
}
export default Nav