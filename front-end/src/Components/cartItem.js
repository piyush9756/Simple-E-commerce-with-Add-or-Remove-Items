import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../Redux/Slices/cartSlice";

export default function CartItem({item}){
  const dispatch = useDispatch();

  function handleAddQuantity(){
    dispatch(addToCart({product:item}))
  }
  function handleMinusQuantity(){
    dispatch(removeFromCart({product:item}))
  }

    return (
        <>
        <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          {/* <!-- Image --> */}
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src={item.image}
              className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>
          {/* <!-- Image --> */}
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Data --> */}
          <p><strong>{item.title}</strong></p>
          <p>Color: blue</p>
          <p>Size: M</p>

          {/*  <!--Trash Bin Button --> */}
          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
          {/*  <!--Wish List Button --> */}
          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
            title="Move to the wish list">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
          </button>
          
        </div>
            {/* <!-- Data --> */}
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Quantity --> */}
          <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
            <button className="btn btn-primary px-3 me-2"
              onClick={handleMinusQuantity}>
              <i className="fas fa-minus">-</i>
            </button>

            <div className="form-outline">
              <input id="form1" min="0" name="quantity" value={item.cartQuantity} type="number" className="form-control" />
              <label className="form-label" htmlFor="form1">Quantity</label>
            </div>

            <button className="btn btn-primary px-3 ms-2"
              onClick={handleAddQuantity}>
              <i className="fas fa-plus">+</i>
            </button>
          </div>
          {/* <!-- Quantity --> */}

         {/*  <!-- Price --> */}
          <p className="text-start text-md-center">
            <strong>{item.price}</strong>
          </p>
          {/* <!-- Price --> */}
        </div>
      </div>
      {/* <!-- Break Line --> */}

      <hr className="my-4" />
      </>
    )
}