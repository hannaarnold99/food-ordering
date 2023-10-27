import { useDispatch } from "react-redux";
import { AiOutlineDelete } from 'react-icons/ai';
import {incrementProductAmount, decrementProductAmount, cartProducts } from "../stores/cart/cartSlice";

export const ProductsSummaryCard = ({ product, onRemoveProduct }) => {
    const dispatch = useDispatch();


    return (
        <div className="flex p-1 sm:p-2 border-b border-b-gray-200 flex-col grid grid-cols-2">
            <div className="mx auto flex object-bottom object-cover">
                <img src={product.imageUrl} className="w-40 h-40 object-cover object-bottom" alt={product.name} />
            </div>
            <div>
            <div className="product-info text-center">
                <h3>{product.name}</h3>
                <p className="text-gray-600 flex">{product.description}</p>
            </div>
            <div className="product-price-qt flex flex-col items-center justify-center">
                <div className="price">{`$${product.price}`}</div>
                <div className="quantity flex">
                    <button className="p-1" disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
                    <span className="p-1">{product.amount}</span>
                    <button className="p-1" onClick={() => dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
            </div>
            </div>
    )
}