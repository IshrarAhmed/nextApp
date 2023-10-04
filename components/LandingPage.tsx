import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { getApiCall } from "@/utils/axios";
import CardProduct from "./CardProduct";
import cardStyle from "../styles/CarProduct.module.css";
import LoaderSkeleton from "./LoaderSkeleton";
import { useRouter } from "next/router";
// import { addToCart } from "@/redux/CartSlice";
// import { useDispatch,useSelector } from "react-redux";
// import { GetServerSideProps } from "next";

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();


    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } };
  }
}

export default function LandingPage({ data }: any) {

  interface Data {
    id: number;
    price: number;
    title: string;
    image: string;
    description: string;
  }

  const [product, setProduct] = useState<Data[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>("All");
  const router = useRouter();
  const searchQuery = router.query.searchquery as string | undefined;

  const url =
    category == "All" ? "/products" : `/products/category/${category}`;
  const getdata = () => {
    getApiCall(url)
      .then((response) => {
        setProduct(response);

        setIsloading(false);
      })
      .catch(() => {});
  };
  const handleClick = (e: any) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    if (searchQuery || category) {
      getdata();
    } else {
      setProduct(data);
    }

    //  if(data?.length>0){
    //  setIsloading(false)
    //  }
  }, [category]);
  const filterdata = searchQuery
    ? product?.filter((prodct, index) => {
        return prodct?.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : product;



  return (
    <div className="container" style={{ paddingBottom: "50px", gap: "10px" }}>
      <div className="carousel slide" style={{ marginTop: "47px" }}>
        <Hero />

        {filterdata.length > 0 && (
          <div className={cardStyle["category_cl"]} key="category">
            <h5>Search By Category</h5>
            <select className="form-control w-25" onClick={handleClick}>
              <option value="All"> All category</option>

              <option value="men's clothing"> men's clothing</option>
              <option value="jewelery"> jewelery</option>
              <option value="women's clothing"> women's clothing</option>
              <option value="electronics"> electronics</option>
            </select>
          </div>
        )}
      </div>

      <div className={cardStyle["custom_row"]}>
        {!isloading ? (
          filterdata?.map((item, index) => {
            return (
              <div key={index}>
                <CardProduct
                  key={item?.id}
                  title={item?.title}
                  price={item?.price}
                  description={item?.description}
                  image={item?.image}
                  id={item?.id}
                />
              </div>
            );
          })
        ) : (
          <LoaderSkeleton count={8} />
        )}
      </div>

      {searchQuery && filterdata.length == 0 && (
        <div
          className="noProduct"
          style={{ marginLeft: "37%", marginTop: "25px" }}
        >
          <img
            src="https://i.imgur.com/dCdflKN.png"
            width={130}
            height={130}
            className="img-fluid mb-4 mr-3"
          />
          <h3>
            <strong> No Product Found</strong>
          </h3>
        </div>
      )}
    </div>
  );
}
