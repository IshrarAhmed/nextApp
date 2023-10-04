import React from 'react'
import { AiOutlineInstagram ,AiOutlineTwitter} from "react-icons/ai";
import {BsFacebook } from "react-icons/bs"


export default function Footer(){
  return (
    <>
    {/* Footer */}
    <footer
        className="text-center text-lg-start "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.instagram.com/"
              className="me-4 text-reset"
              aria-label="Instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              className="me-4 text-reset"
              aria-label="Facebook"
            >
              <BsFacebook />
            </a>
            <a
              href="https://twitter.com/i/flow/login"
              className="me-4 text-reset"
              aria-label="Twitter"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </section>

        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  ShopBar
                </h6>
                <p>
                  The shopbar company is about online E-commerce website .
                  MarketPlace for the Products
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="https://fakestoreapi.com/"
                    className="text-reset"
                    aria-label="MensClothing"
                  >
                    Mens's clothing
                  </a>
                </p>
                <p>
                  <a
                    href="https://fakestoreapi.com/"
                    className="text-reset"
                    aria-label="Jewelery"
                  >
                    Jewelery
                  </a>
                </p>
                <p>
                  <a
                    href="https://fakestoreapi.com/"
                    className="text-reset"
                    aria-label="Electronics"
                  >
                    Electronis
                  </a>
                </p>
                <p>
                  <a
                    href="https://fakestoreapi.com/"
                    className="text-reset"
                    aria-label="WomensClothing"
                  >
                    Women's Clothing
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "#94bede" }}>
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://mdbootstrap.com/"
            aria-label="Search"
          >
            shopbar.com
          </a>
        </div>
      </footer>
    {/* Footer */}
  </>
  
  )
}

