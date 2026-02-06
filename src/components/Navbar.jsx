import { Link } from 'react-router-dom'

function Navbar() {
        return (
            <nav className="nav-bar">
                <div className="nav-brand">
                    <Link to="/">Movies Explorer</Link>
                </div>
                <div className="nav-links"></div>
            </nav>
        )
    }

export default Navbar