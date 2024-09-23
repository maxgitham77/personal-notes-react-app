import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar container">
            <h2 className="primary-color">Notes App</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add-note" className="ml-3">New Note</Link>
            </div>
        </nav>
    )
}

export default Navbar;