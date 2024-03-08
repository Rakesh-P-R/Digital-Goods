"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  addToQuickView,
} from "@/store/slices/productSlice";

const ActionButtons = (props) => {
  const dispatch = useDispatch();
  const getWishlist = useSelector((state) => state.productData.wishlistItems);
  const isWishlistAdded = getWishlist.filter((data) => data.id === props.productAction.id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const quickViewHandler = (product) => {
    dispatch(addToQuickView({
      viewItem: product,
      quickView: true
    }));
  };

  return (
    <ul className="cart-action">
     
      {props.cartBtn && (
        <li className="select-option ">
          {props.productAction.pCate === "NFT" || props.productAction.productType === "variable" ? (
            <Link href={`/products/${props.productAction.id}`}>
              Buy Product
            </Link>
          ) : (
            <Link href={`/products/${props.productAction.id}`}>
            Buy Product
          </Link>
          )}
        </li>
      )}
      {props.quickViewBtn && props.productAction.pCate !== "NFT" && (
        <li className="quickview">
          <button onClick={() => quickViewHandler(props.productAction)}>
            {/* <i className="far fa-eye" /> */}
          </button>
        </li>
      )}
    </ul>
  );
};

export default ActionButtons;
