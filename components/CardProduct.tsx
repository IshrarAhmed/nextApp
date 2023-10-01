import React from 'react';
import cardStyle from "../styles/CarProduct.module.css"
import { BsFillCartPlusFill,BsCartCheckFill } from "react-icons/bs";
import {  AiOutlineArrowRight ,AiOutlineDelete } from "react-icons/ai";
import Link from 'next/link';
import { addToCart } from '@/redux/CartSlice';
import { useDispatch,useSelector } from 'react-redux';
import {toast} from "react-toastify"


interface CardProductProps {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
}

const CardProduct: React.FC<CardProductProps> = ({ id, title, price, description, image }) => { 
  
  const dispatch = useDispatch()
  const addProductToRedux =()=>{
    // const payload = {
    //   id,
    //   quantity: 1, // You may initialize quantity as needed
    // };
    dispatch(addToCart({id, title, price, description, image}))
    toast.success('Item added to cart!' ,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
  })
  }
  return (
    <div className={cardStyle["product-card"]} key={id}>
    <img src={image} alt="Product" className={cardStyle['product-image']} loading="lazy"  />
    <div className={cardStyle['product-details']}>
      <p className={cardStyle['product-title']}>{title?.substring(0, 20)}</p>
      <p className={cardStyle['product-price']}>${price}</p>

      <div className={cardStyle['button-container']}>
      <Link href={`/product/${id}`} aria-label="Link">
        <div className={cardStyle['clickable-icon']} >
            <AiOutlineArrowRight />
         
        </div>
        </Link>
        <div className={cardStyle['clickable-icon']}   onClick={addProductToRedux}>
     
        <BsFillCartPlusFill />
        </div>
      </div> 
    </div>
  </div>
  );
};

export default CardProduct;
