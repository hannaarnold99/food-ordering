import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductPreviewCard } from "./ProductPreviewCard";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

export const ProductsPreview = () => {
        const [products, setProducts] = useState([]);
        const dispatch = useDispatch(); 

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
            };

        useEffect(() => {
            fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
        }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className="container mx-auto pb-4 w-3/4 text-white">
          <h2 className="font-bold text-center pt-8 text-3xl pb-3">Featured Items</h2>
          <Carousel responsive={responsive} className="bg-white">
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                    <div class="w-full p-3">
                        <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct}/>
                    </div>
                    )
                })
            }

        </Carousel>
        </div>
    )
}