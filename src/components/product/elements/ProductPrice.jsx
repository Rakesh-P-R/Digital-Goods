import React from 'react';

const ProductPrice = (props) => {
  return (
    <div className="product-price-variant">
      {/* Ensure props.price is defined before accessing its properties */}
      {props.price && props.price.salePrice ? (
        <span className="price old-price">
          <span className="currency-symbol">₹</span>
          {/* Ensure props.price.price is defined before accessing it */}
          {props.price.price}
        </span>
      ) : (
        ''
      )}
      <span className="price current-price">
        <span className="currency-symbol">₹</span>
        {/* Ensure props.price is defined and has salePrice property */}
        {props.price && props.price.salePrice ? props.price.salePrice : (props.price && props.price.price)}
      </span>
      <div
        className="mt-2 justify-between"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          fontSize: '10px',
        }}
      >
        <div className="border border-gray-300 py-1 px-4 rounded-r-md bg-gray-100">
          Participance: {props.Participance}
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
