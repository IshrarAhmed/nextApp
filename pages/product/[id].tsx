import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getApiCall } from "@/utils/axios";
import Loader from "@/components/Loader";
import Skeleton from "react-loading-skeleton";
import { GetServerSideProps } from "next";
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai";






export const getServerSideProps:GetServerSideProps=async(context:any)=> {


  

  const { id } = context.query;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
 
    console.log("Fetched data:", data);
            
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } };
  }
}
interface Product {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number };
}
interface Details {
  data:Product
}
export default function ProductDetails({data}:Details) {



  const [product, setProduct] = useState<Product | null>(null);
  const [isloading, setIsloading] = useState<boolean>(true);



  // const getProduct = () => {
  //   try {
  //     getApiCall(`/products/${id}`).then((response: Product) => {
  //       setProduct(response);
  //       setIsloading(false);
  //     });
  //   } catch (err) {
  //     console.log("errrrrrorrrrr", err);
  //   }
  // };
 console.log("product length",product)
  useEffect(() => {
    // getProduct();
     setProduct(data)
     if(data){
 setIsloading(false)
     }
  }, []);
  return (
    <>
      {!isloading ? (
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <Link className="text-decoration-none text-dark" href="/">
                <div className="d-flex align-items-center m-3">
                    <i className="fa fa-long-arrow-left" ></i>
                    <span className="ml-1"><AiOutlineArrowLeft/></span>
                </div>
            </Link>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      <img
                        id="main-image"
                        alt="product"
                        src={product?.image}
                        width="250"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-muted text-capitalize">
                        {" "}
                        in {product?.category}
                      </span>
                      <h5 className="text-uppercase">{product?.title}</h5>
                      Rating {product?.rating && product?.rating.rate}
                      <i className="fa fa-star text-warning"></i>
                      <div className="price d-flex flex-row align-items-center">
                        <big className="display-6">
                          <b>${product?.price}</b>
                        </big>
                      </div>
                    </div>
                    <p className="text-muted">{product?.description}</p>
                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button className="btn btn-outline-dark text-uppercase mr-2 px-4">
                        Buy
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    {/* Show skeleton for the image */}
                    <Skeleton height={250} width={250} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border p-4">
                  <div className="mt-4 mb-3">
                    {/* Show skeleton for the title */}
                    <Skeleton height={20} width={200} />
                    {/* Show skeleton for the rating */}
                    <Skeleton height={20} width={100} />
                    <div className="price d-flex flex-row align-items-center">
                      {/* Show skeleton for the price */}
                      <Skeleton height={30} width={80} />
                    </div>
                  </div>
                  {/* Show skeleton for the description */}
                  <Skeleton count={4} height={20} />
                  <div className="cart mt-4 align-items-center">
                    <button className="btn btn-outline-dark text-uppercase mr-2 px-4">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
