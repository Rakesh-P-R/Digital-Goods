'use client';
import { useState } from "react"; // Make sure this import is within a client component
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import SlickSlider from "@/components/elements/SlickSlider";
import { addToCart, addToWishlist } from "@/store/slices/productSlice";
import ProductRating from "@/components/product/elements/ProductRating";

const SingleLayoutFour = ({ singleData }) => {
    // Set up states
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [colorImage, setColorImage] = useState("");
    const [productSize, setProductSize] = useState("");
    const wishlist = useSelector((state) => state.productData.wishlistItems);
    const isWishlistAdded = wishlist.some((item) => item.id === singleData.id);

    // Event handlers
    const handleColorImage = (color) => {
        setColorImage(color);
    };
    
    const handleProductSize = (size) => {
        setProductSize(size);
    };
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    
    const handleAddToCart = () => {
        if (quantity > 0 && colorImage !== "" && productSize !== "") {
            const product = {
                ...singleData,
                cartQuantity: quantity,
                productColor: colorImage,
                productSize: productSize
            };
            dispatch(addToCart(product));
            // Redirect to the checkout page
            window.location.href = "/checkout";
        } else {
            alert("Please select quantity, color, and size.");
        }
    };
    
    const handleAddToWishlist = () => {
        dispatch(addToWishlist(singleData));
    };

    // Render component
    return (
        <div className="axil-single-product-area bg-color-white">
            <div className="single-product-thumb axil-section-gap pb--20 pb_sm--0 bg-vista-white">
                <div className="container">
                    <div className="row row--50">
                        {/* Product image section */}
                        <div className="col-lg-6 mb--40">
                            {/* SlickSlider for product images */}
                        </div>
                        {/* Product details section */}
                        <div className="col-lg-6 mb--40">
                            <div className="single-product-content">
                                <div className="inner">
                                    <h2 className="product-title">{singleData.title}</h2>
                                    <span className="price-amount">${singleData.salePrice ? singleData.salePrice : singleData.price}</span>
                                    <ProductRating rating={singleData} textEnable />
                                    {/* Product variation selectors */}
                                    {/* Quantity selector */}
                                    {/* Add to Cart and Wishlist buttons */}
                                    <div className="product-action-wrapper d-flex-center">
                                        <div className="pro-qty">
                                            <span className="qtybtn" onClick={decrementQuantity}>-</span>
                                            <input type="number" className="quantity-input" value={quantity} readOnly />
                                            <span className="qtybtn" onClick={incrementQuantity}>+</span>
                                        </div>
                                        <ul className="product-action d-flex-center mb--0">
                                            <li className="add-to-cart">
                                                <button
                                                    disabled={!colorImage || !productSize}
                                                    onClick={handleAddToCart}
                                                    className="axil-btn btn-bg-primary"
                                                >
                                                    
                                                    Add to Cart
                                                </button>
                                            </li>
                                            <li className="wishlist">
                                                <button
                                                    className="axil-btn wishlist-btn"
                                                    onClick={handleAddToWishlist}
                                                >
                                                    <i className={isWishlistAdded ? "fas fa-heart" : "far fa-heart"} />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLayoutFour;
