const ProductPrice = (props) => {
  return (
    <div className="product-price-variant">
      {props.price.salePrice ? (
        <span className="price old-price">
          <span className="currency-symbol">₹</span>
          {props.price.price}
        </span>
      ) : (
        ""
      )}
      <span className="price current-price">
        <span className="currency-symbol">₹</span>
        {props.price.salePrice
          ? props.price.salePrice
          : props.price.price}
      </span>
      <div className="mt-2 justify-between " style={{
        display:'flex',
        flexDirection:'column',
        gap:'2px',
        fontSize:'10px'
      }}>
        <div className="border border-gray-300 py-1 px-4 rounded-l-md bg-gray-100">Purchased: 1</div>
        <div className="border border-gray-300 py-1 px-4 rounded-r-md bg-gray-100">Participation: 3</div>
      </div>



    </div>
  );
}

export default ProductPrice;
