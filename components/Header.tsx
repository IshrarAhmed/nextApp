import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099-removebg-preview.png"
import Link from 'next/link'


import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile} from "react-icons/cg";

import { useSelector } from 'react-redux'
import Modal from './Modal'


export default function Header ()  {
  const cartData = useSelector((state:any)=>state.cart.cartitem 
  )
  const userLogggedIn = useSelector((state:any)=>state.user.isloggedIn
  )
 const [modalOpen ,setModalOpen] = useState(false)
  const [query,setQuery] = useState("")
  const router = useRouter()

  const trimmedQuery = query.trim();
   const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    {
      query.length > 2 && router.push(`/search/${encodeURIComponent(trimmedQuery)}`);
    }

  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Image
          src={logo}
          style={{ height: "68px", marginLeft: "40px",width:"86px" }}
          alt="logo"
          loading="lazy"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" > 
            <Link className="nav-link active" aria-current="page" href='/' passHref aria-label="home">
            
                Home
              
            </Link>
          
            </li>
            <li className="nav-item" >
        <Link  className="nav-link active" aria-current="page" href='/blog' passHref   aria-label="blog"> 
        Blog
        </Link>
            </li>
            <li className="nav-item" >
              <Link  className="nav-link active" aria-current="page" href='/aboutUs' passHref aria-label="aboutUs">
                About us
              </Link>
            </li>

            <li className="nav-item dropdown"></li>
          </ul>
          <form
            className="d-flex"
                onSubmit={handleSearchSubmit}
            style={{
              marginRight: "16px",
            }}
          >
            <input
              className="form-control me-2"
              type="search"
        
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
        
            />

            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ backgroundColor: "green", color: "white" }}
        
            >
              Search
            </button>
          </form>
          <Link href="/cart/Cartpage">
          <button
            type="button"
            className="btn btn-primary position-relative"
       
            style={{
              marginRight: "2%",
            }}
          >
<AiOutlineShoppingCart/> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartData?.length}
            <span className="visually-hidden">unread messages</span>
         
           
            </span>
          </button>
             </Link>


             <div
              style={{
                marginBottom: "-10px",
                marginRight: "80px",
      
              }}
            >
              <Link  className="nav-link active" aria-current="page" href='/SignUp' passHref aria-label="aboutUs">
             { !userLogggedIn? "SignUp":"Logout"}
              </Link>
   </div>
       { modalOpen&& <Modal/>}
          <div
         
          >

            <h6
              // style={{
              //   marginBottom: "-10px",
              //   marginRight: "80px",
              //   cursor: "arrow",
              // }}
            >
              { userLogggedIn&&  <div onClick={()=>setModalOpen(true)}><CgProfile/></div>}
            </h6>
          </div>
        </div>
      </div>
    </nav>
  )
}
