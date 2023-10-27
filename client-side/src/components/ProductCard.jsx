import React     from 'react'

const ProductCard = ({
  product, i
}) => {
  return (
    <>  
      <div key={i}  className="col-md-3 col-12 px-2 mb-3 product-card">
        <div className="border shadow rounded-lg p-0 card h-100 ">
          <div className="card-image mb-2">
              <img
                src={require(`../assets/images/${product.img}`) }
                alt="loading.."
                className="mx-auto my-auto image img-fluid"
                sizes="(min-width: 1122px) 296px,(min-width: 866px) 218px,(max-width: 610px) 202px,202px"
              />
          </div>
          <div className="card-body px-3">
            <h6>{product.title}</h6>
            <small>{product.description}</small>
          </div>
          <div className="footer card-footer px-3 border-none border-top-0">
            <div className="d-flex align-items-center justify-content-between">
            {/* <h6 className="my-2 text-success">{product.quantity}quantity</h6> */}
              <h6 className="my-2 text-success">₹{product.price}</h6>
            </div>
            
            <button type="button"  className="btn btn-sm btn-primary">
               <span><i className="fas fa-check" /> Add to Cart </span>
            </button>   
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductCard