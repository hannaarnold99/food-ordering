import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";
export const PaymentForm = ({ onTabSwitch }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        alert("Order Successfully Placed");
    }

    return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 pb-4 text-2xl md:text-center">Payment Details</h3>

            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="cardNumber">Card Number</label>
                    <input 
                    {...register('cardNumber', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="cardNumber"
                    type="text"
                    placeholder="Card Number"
                    />
                {errors.cardNumber && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="expDate">Expiration Date</label>
                    <input 
                    {...register('expDate', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="expDate"
                    type="text"
                    placeholder="MM/YYYY"
                    />
                {errors.expDate && <span className="text-red-500">This field is required</span>}
                </div>

            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="cvv">CVV</label>
                    <input 
                    {...register('cvv', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="cvv"
                    type="text"
                    placeholder="CVV"
                    />
                {errors.cvv && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="zipCode">Billing Zip Code</label>
                    <input 
                    {...register('zipCode', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="zip code"
                    type="text"
                    placeholder="Billing Zip"
                    />
                {errors.zipCode && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="flex justify-end p-2">
                <button className="flex items-center" type="submit"><span className="mr-1">Place Order</span></button>
            </div>
        </form>
    )
}

