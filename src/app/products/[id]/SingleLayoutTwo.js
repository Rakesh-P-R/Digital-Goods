'use client';
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "@/store/slices/productSlice";
import ProductRating from "@/components/product/elements/ProductRating";

const SingleLayoutTwo = ({ singleData }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [colorImage, setColorImage] = useState("");
    const [productSize, setProductSize] = useState("");
    const getWishlist = useSelector((state) => state.productData.wishlistItems);
    const isWishlistAdded = getWishlist.filter((data) => data.id === singleData.id);

    const colorImageHandler = (color) => {
        setColorImage(color);
    };
    const productSizeHandler = (size) => {
        setProductSize(size);
    };
    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleAddToCart = () => {
        if (quantity > 0) {
            const product = {
                ...singleData,
                cartQuantity: quantity,
                productColor: colorImage.color,
                productSize: productSize
            };
            dispatch(addToCart(product));
            // Redirect to the checkout page
            window.location.href = "/checkout";
        } else {
            alert("Please select minimum 1 quantity");
        }
    };
    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
    };

    return (
        <div className="axil-single-product-area bg-color-white">
            <div className="single-product-thumb axil-section-gap pb--20 pb_sm--0 bg-vista-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb--40">
                            {/* Product images */}
                        </div>
                        <div className="col-lg-6 mb--40">
                            {/* Product details */}
                            {/* Product variations */}
                            {/* Product actions */}
                            <div className="product-action-wrapper d-flex-center">
                                <div className="pro-qty">
                                    <span className="qtybtn" onClick={decrementQuantity}>-</span>
                                    <input type="number" className="quantity-input" value={quantity} readOnly />
                                    <span className="qtybtn" onClick={incrementQuantity}>+</span>
                                </div>
                                <ul className="product-action d-flex-center mb--0">
                                    <li className="add-to-cart">
                                        {/* Add to Cart button */}
                                        <button
                                            disabled={(singleData.colorAttribute && !colorImage) || (singleData.sizeAttribute && !productSize)}
                                            onClick={handleAddToCart}
                                            className="axil-btn btn-bg-primary"
                                        >
                                            Add to Cart
                                        </button>
                                    </li>
                                    <li className="wishlist">
                                        {/* Wishlist button */}
                                        <button className="axil-btn wishlist-btn" onClick={() => handleAddToWishlist(singleData)}>
                                            <i className={isWishlistAdded.length === 1 ? "fas fa-heart" : "far fa-heart"} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLayoutTwo;
