import Button from "./elements/Button";
import { useDispatch } from "react-redux";

const ProductDetailCard = ({ product, onAddProduct }) => {
    const addProduct = () => {
        onAddProduct(product)
    }
    return (
        <div className="p-4 m-4 rounded-lg bg-slate-50 w-1/4 flex flex-1 flex-col items-center">
            <div className="flex flex-col items-center justify-between text-center sm:h-full">
                <h2 className="text-3xl h-30">{product.name}</h2>
                <p className="text-lg text-gray-600">
                    {product.description}
                </p>
                <div className="flex items-center justify-between sm:h-10 md:h-20">
                    <div className="text-3xl text-black">${product.price}</div>
                </div>
            </div>
            <div className="mx auto w-full flex object-bottom justify-center">
                <img src={product.imageUrl} className="w-40 h-40 object-cover object-bottom" alt={product.name} />
            </div>
            <div className="w-full flex items-center justify-center content-end pt-5">
                <Button onClick={addProduct} className="bg-red-500 hover:bg-red-400 rounded-full w-5 h-5 flex items-center justify-center m-bottom text-lg"><span>+</span></Button>
            </div>
        </div>
    )
}

export default ProductDetailCard;