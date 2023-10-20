import logo from "../assets/icons/logo.jpg";
import cartIcon from "../assets/icons/cart-icon.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = ({ cartCount }) => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="grid grid-cols-3 w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper flex justify-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underlinej font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-50 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-center space-x-10">
                    <Link to="/home" className="text-2xl">Home</Link>
                    <Link to="/menu"className="text-2xl">Menu</Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/cart" className="mr-4 relative">
                        <img src={cartIcon} alt="cartIcon" className="w-10 h-10 object-cover"/>
                        {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-1/2 absolute -top-1 -right-1">{cartCount}</div> : null}
                    </Link> 
                </div>
            </div>
        </nav>
    )
}

