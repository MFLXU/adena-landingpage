import logo from '../Assets/logo.svg'
import btnCart from '../Assets/btn-cart.svg'


function Navbar(){
    return(
        <nav>
            <div className="container font-inter">
                <div className="nav__con">
                    <div>
                        <img src={logo} alt="adena logo"/>
                    </div>
                    <div className="nav__links">
                        <a className="nav__link" href="/">Products</a>
                        <a className="nav__link" href="/">About</a>
                        <a className="nav__link" href="/">Shop List</a>
                        <img src={btnCart} alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export  default  Navbar