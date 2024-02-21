'use client';
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FsLightbox from "fslightbox-react";
import { addToCart, addToWishlist } from "@/store/slices/productSlice";
import SlickSlider from "@/components/elements/SlickSlider";
import { discountPercentage, reviewAverage, slugify } from "@/utils";
import { ProductReview } from "@/data/Comments";
import ProductRating from "@/components/product/elements/ProductRating";

const SingleLayouThree = ({ singleData }) => {
    const findReview = ProductReview.filter((data) => slugify(data.productId) === slugify(singleData.id));
    const ratingNumber = reviewAverage(findReview);
    const getWishlist = useSelector((state) => state.productData.wishlistItems);
    const isWishlistAdded = getWishlist.filter((data) => data.id === singleData.id);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [quantity, setquantity] = useState(1);
    const [colorImage, setColorImage] = useState("");
    const [productSize, setProductSize] = useState("");
    const [fsToggler, setFsToggler] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (cartAddedData) => {
        let product = {...cartAddedData}
        if (quantity > 0) {
            product.cartQuantity = quantity;
            product.productColor = colorImage.color;
            product.productSize = productSize;
            dispatch(addToCart(product));
        }else {
            alert("Please select minimum 1 quantity")
        }
    };

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setquantity(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setquantity(quantity + 1);
    }

    const colorImageHandler = (color) => {
        setColorImage(color);
    };

    const productSizeHandler = (size) => {
        setProductSize(size);
    };
    const getFullscreenPreview = () => {
        let galleryPreview = [];
        if (singleData.gallery) {
            singleData.gallery.map((img) => {
                galleryPreview.push(img);
            })
        } else {
            galleryPreview.push(singleData.thumbnail);
        }
        return galleryPreview;
    }

    return (
        <section className="axil-single-product-area axil-section-gap pb--0">
            <div className="single-product-thumb mb--40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb--40">
                            <div className="row">
                                <div className="col-lg-10 order-lg-2">
                                    <div className="single-product-thumbnail-wrap">
                                        <SlickSlider
                                            class="single-product-thumbnail product-large-thumbnail-3 axil-product"
                                            slidesToShow={1}
                                            infinite={false}
                                            draggable={false}
                                            focusOnSelect={true}
                                            adaptiveHeight={true}
                                            asNavFor={nav2}
                                            ref={(slider1 => setNav1(slider1))}
                                        >
                                            {singleData.gallery ? singleData.gallery.map((galleryImg, index) => (
                                                <div className="thumbnail" key={index}>
                                                    <Image
                                                        src={galleryImg}
                                                        height={584}
                                                        width={584}
                                                        alt="Gallery Image"
                                                    />
                                                </div>
                                            )) :
                                                <div className="thumbnail">
                                                    <Image
                                                        src={singleData.thumbnail}
                                                        height={584}
                                                        width={584}
                                                        alt="Gallery Image"
                                                    />
                                                </div>
                                            }
                                        </SlickSlider>
                                        {singleData.salePrice &&
                                            <div className="label-block">
                                                <div className="product-badget">{discountPercentage(singleData.price, singleData.salePrice)}% OFF</div>
                                            </div>
                                        }
                                        {singleData.gallery && 
                                        <>
                                            <div className="product-quick-view position-view">
                                                <button onClick={() => setFsToggler(!fsToggler)} className="popup-zoom">
                                                    <i className="far fa-search-plus" />
                                                </button>
                                            </div>
                                            <FsLightbox
                                            toggler={fsToggler}
                                            sources={getFullscreenPreview()}
                                            />
                                        </>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-2 order-lg-1">
                                    <SlickSlider
                                        class="product-small-thumb-3 small-thumb-wrapper"
                                        slidesToShow={5}
                                        infinite={false}
                                        draggable={false}
                                        focusOnSelect={true}
                                        vertical={true}
                                        asNavFor={nav1}
                                        ref={(slider2 => setNav2(slider2))}
                                        responsive= {[
                                            {
                                                breakpoint: 992,
                                                settings: {
                                                    vertical: false,
                                                }
                                              },
                                        ]}
                                    >
                                        {singleData.gallery ? singleData.gallery.map((galleryImg, index) => (
                                            <div className="small-thumb-img" key={index}>
                                                <Image
                                                    src={galleryImg}
                                                    height={207}
                                                    width={213}
                                                    alt="Thumb Image"
                                                />
                                            </div>
                                        )) :
                                            <div className="small-thumb-img">
                                                <Image
                                                    src={singleData.thumbnail}
                                                    height={207}
                                                    width={213}
                                                    alt="Thumb Image"
                                                />
                                            </div>}
                                    </SlickSlider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mb--40">
                            <div className="single-product-content">
                                <div className="inner">
                                    <h2 className="product-title">{singleData.title}</h2>
                                    <span className="price-amount">${singleData.salePrice ? singleData.salePrice : singleData.price}</span>
                                    <ProductRating rating={singleData} textEnable/>
                                    {singleData.shortDes && 
                                    <>
                                    <ul className="product-meta" dangerouslySetInnerHTML={{ __html: singleData.shortDes.listItem }}></ul>
                                    <p>{singleData.shortDes.text}</p>
                                    </>
                                    }
                                    <div className="product-variations-wrapper">
                                        {singleData.colorAttribute &&
                                        <div className="product-variation">
                                            <h6 className="title">Colors:</h6>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    {singleData.colorAttribute?.map((data, index) => (
                                                        <li className={`${data.color} ${colorImage.color === data.color ? "active" : ""
                                                            }`} key={index} onClick={() => colorImageHandler(data)}>
                                                            <span>
                                                                <span className="color" />
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        }
                                        {singleData.sizeAttribute &&
                                        <div className="product-variation product-size-variation">
                                            <h6 className="title">Size:</h6>
                                            <ul className="range-variant">
                                                {singleData.sizeAttribute?.map((data, index) => (
                                                    <li key={index} className={productSize === data ? "active" : ""}
                                                    onClick={() => productSizeHandler(data)}>{data}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        }
                                    </div>

                                    <div className="product-action-wrapper d-flex-center">
                                        <div className="pro-qty">
                                            <span className="qtybtn" onClick={decrementQuantity}>-</span>
                                            <input type="number" className="quantity-input" value={quantity} readOnly />
                                            <span className="qtybtn" onClick={incrementQuantity}>+</span>
                                        </div>
                                        <ul className="product-action d-flex-center mb--0">
                                            <li className="add-to-cart">
                                                <button disabled={(singleData.colorAttribute && !colorImage) || (singleData.sizeAttribute && !productSize) ? true : false} onClick={() => handleAddToCart(singleData)} className="axil-btn btn-bg-primary">Add to Cart</button>
                                            </li>
                                            <li className="wishlist">
                                                {/* <button className="axil-btn wishlist-btn" onClick={() => handleAddToWishlist(singleData)}><i className={isWishlistAdded.length === 1 ? "fas fa-heart" : "far fa-heart"} /></button> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default SingleLayouThree;