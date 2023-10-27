import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }
    return (
        <div className="w-full p-4 m-2 rounded text-black text-center bg-slate-50">
                <img src={product.imageUrl} alt={product.name} className="h-40 w-40 mx auto w-full flex object-bottom justify-center "/>
                <h1 className="font-bold text-center text-lg pt-2 pb-3">{product.name}</h1>
                <p className="text-center line-clamp-4">{product.description}</p>
                <AddProduct onAddProduct={addProduct}/>
            </div>
    )
}

export default ProductPreviewCard;