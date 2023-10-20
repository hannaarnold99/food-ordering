import { Tabs } from "../../components/Tabs";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import useTabSwitch from "../../hooks/useTabSwitch";
import { AddressForm } from "../../components/AddressForm";
import { ProductsSummary } from "../../components/ProductsSummary";
import { PaymentForm } from "../../components/PaymentForm";
import TotalComponent from "../../components/TotalComponent";


const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs = ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

    if (!cart || cart.length === 0 ) {
        return (
            <div className="bg-white text-black flex items-center justify-center p-4">
                <h1>Your cart is empty.</h1>
            </div>
        )
    }
    return (
        <div className="bg-white text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <TotalComponent />
                <div className="flex justify-end p-2">
                    <button className="flex items-center" onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span></button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                <PaymentForm onTabSwitch={handleTabSwitch}/>
            </div>
        </div>
    )
}

export default Cart;