import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";


const Navigation = () => {

    const productsInCart = useSelector(cartProducts);
    let amount = 0;
    for (let i = 0; i < productsInCart.length; i++) {
        amount += productsInCart[i].amount ;
    }
    return (
        <BrowserRouter>
            <Header cartCount={amount}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Navigation;