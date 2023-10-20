import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartProducts, totalAmount } from "../stores/cart/cartSlice";

export const TotalComponent = (action) => {
    const cart = useSelector(cartProducts);
    let totalPrice = 0;
    { cart && cart?.map((product) => {
        totalPrice += (product.price * product.amount);
    })}
    return (
        <div className="flex flex-col pt-5 flex items-end text-lg">
                    <div>
                    <h2>Total: ${totalPrice}</h2>
                    </div>
        </div>
    )
}

export default TotalComponent;