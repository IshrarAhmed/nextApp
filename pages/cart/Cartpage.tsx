 import { useDispatch  ,useSelector} from "react-redux";
import { deleteFromCart, increment, decrement } from "@/redux/CartSlice";
import Link from "next/link";
import {  AiOutlineDelete } from "react-icons/ai";


 

export default function CartPage (){
    const dispatch = useDispatch()
  const cartData = useSelector((state:any) => state.cart.cartitem);


    return (
        <>
{ cartData.length >0 ?        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                Cart Item
                {cartData.map((item:any, ) => {
                  return (
                    <div className="card rounded-3 mb-4" key={item.id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">
                              {item?.title?.substring(0, 20)}
                            </p>
                            <p>
                              <span className="text-muted">Size: </span>M{" "}
                              <span className="text-muted">Color: </span>Grey
                            </p>
                          </div>

                          <div
                            className="col-md-3 col-lg-3 col-xl-2 d-flex"
                            style={{ marginLeft: "27px" }}
                          >
                            <button
                              style={{
                                marginLeft: "37px",
                              }}
                              onClick={() => {
                                dispatch(decrement(item.id));
                              }}
                            >
                              -
                            </button>
                            <p
                              style={{
                                marginLeft: "25px",
                              }}
                            >
                              {item.quantity}
                            </p>

                            <button
                              style={{
                                marginLeft: "23px",
                              }}
                              onClick={() => {
                                dispatch(increment(item.id));
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0" style={{ marginLeft: "37px" }}>
                              {" "}
                              $
                              { (parseFloat((item.quantity * item.price).toFixed(2)) as number).toFixed(2) }

                            </h5>
                          </div>
                          <div
                            className="col-md-1 col-lg-1 col-xl-1 text-end"
                            style={{ marginRight: "46px" }}
                          >
                            <a className="text-danger">
                              <i className="fas fa-trash fa-lg">
                                <AiOutlineDelete
                                  onClick={() =>
                                    dispatch(deleteFromCart(item.id))
                                  }
                                />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
        
              </div>
            </div>
          </div>
        </section>:(        <div
          className="card-body cart"
          style={{ marginTop: "40px", marginBottom: "120px" }}
        >
          <div className="col-sm-12 empty-cart-cls text-center">
            <img
              src="https://i.imgur.com/dCdflKN.png"
              width={130}
              height={130}
              className="img-fluid mb-4 mr-3"
              
            />
            <h3>
              <strong>Your Cart is Empty</strong>
            </h3>
            <h4>Add something to make happy :)</h4>
            <Link
                href="/"
              className="btn btn-primary cart-btn-transform m-3"
              data-abc="true"
            >
              continue shopping
            </Link>
          </div>
        </div>)}
        </>
    )
}