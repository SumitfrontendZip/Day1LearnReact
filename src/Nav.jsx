import './Nav.css'
import Logo from './logo.png'
import List from './list.png'
function Nav(){
    return(
        <nav>
        <div className="navItems"><img src={Logo} alt=""/></div>
        <div className="navItems">
            <span>Home</span>
            <span>My Work</span>
            <span>Case Studies</span>
            <span>Psychology</span>
            <span>Courses</span>
            <button>Get Started</button>
        </div>
        <img src={List} alt=""/>
    </nav>
    )
}

export default Nav;