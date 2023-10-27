export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-red-500 hover:bg-red-400 rounded-full w-5 h-5 flex items-center justify-center text-lg"><span>+</span></button>
        </div>
    )
}