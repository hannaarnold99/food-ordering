import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { ProductsSummaryCard } from "./ProductSummaryCard";

export const ProductsSummary = () => {

    const cart = useSelector(cartProducts);
    return (
        <div className="flex flex-col">
            { cart && cart?.map((product, index) => {
                if (product.amount > 0) {
                return (
                    <div>
                    <ProductsSummaryCard product={product} key={index} />
                    </div>
                )
                }
            })}
        </div>
    )
}