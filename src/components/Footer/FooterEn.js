import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FaTwitter, FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa';

const FooterEn = () => (
  <>
  <div className="layout-wrapper section cf">
    <nav className="nav nav-footer cf">
      <ul>
        <li>
          <a href="http://www.liberte.ca/en/" target="_blank" className="item-link footer footer-link">Home</a>
        </li>
        <li>
          <a href="javascript:void(0);" className="item-link footer footer-link">About us</a>
        </li>
        <li>
          <a href="http://www.liberte.ca/en/contact-us" target="_blank" className="item-link footer footer-link">Contact us</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://www.liberte.ca/en/products/" className="item-link footer footer-link">Products</a>

          <ul>
            <li>
              <a href="http://www.liberte.ca/en/products/" className="item-link footer footer-link">All products</a>
            </li>
            <li>
              <a target="_self" href="http://www.liberte.ca/en/products/yogurt" className="item-link footer footer-link">Yogurt</a>
            </li>
            <li>
              <a target="_self" href="http://www.liberte.ca/en/products/kefir" className="item-link footer footer-link">Kefir</a>
            </li>
            <li>
              <a href="http://www.liberte.ca/en/products/cheese-butter" className="item-link footer footer-link">Cheese and butter</a>
            </li>
            <li>
              <a href="http://www.liberte.ca/en/products/sour-cream-creme-fraiche" className="item-link footer footer-link">Sour Cream - Creme Fraiche</a>
            </li>
            <li>
              <a href="http://www.liberte.ca/en/products/goat-milk-products" className="item-link footer footer-link">Goat milk products</a>
            </li>
            <li>
              <a href="http://www.liberte.ca/en/products/tofu" className="item-link footer footer-link">Tofu</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://www.liberte.ca/en/recipes/" className="item-link footer footer-link">Recipes</a>
          <ul>
            <li>
              <a href="http://www.liberte.ca/en/recipes/all/" className="item-link footer footer-link">All recipe</a>
            </li>
            <li>
              <a href="http://www.liberte.ca/en/recipes/" className="item-link footer footer-link">New recipes</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="http://www.liberte.ca/en/community" className="item-link footer footer-link">Community</a>
        </li>
        <li>
          <a href="http://www.liberte.ca/en/faq" className="item-link footer footer-link">FAQ</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://tourneeliberte.ca/#!/fr" className="item-link footer footer-link">Artisan Tour</a>
        </li>
      </ul>
    </nav>

    <div className="footer-socials">
      <div className="logos-sociaux">
        <p>Follow us</p>
        <div>
          <a className="slink footer footer-link-social" href="https://www.twitter.com/liberteqc" target="_blank">
            <FaTwitter />
          </a>
          <a className="slink footer footer-link-social" href="https://www.facebook.com/LiberteCan" target="_blank">
            <FaFacebook />
          </a>
          <a className="slink footer footer-link-social" href="http://www.pinterest.com/libertecanada/" target="_blank">
            <FaPinterest />
          </a>
          <a className="slink footer footer-link-social" href="http://www.instagram.com/libertecanada" target="_blank">
            <FaInstagram  />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="subfooter">
    <div className="layout-wrapper section cf">
      <nav className="nav nav-subfooter">
        <ul>
          <li>
            <a href="http://www.liberte.ca/en/terms-of-use" className="item-link">Term of use</a>
          </li>
          <li>
            <a href="http://www.liberte.ca/en/privacy-policy" className="item-link">Privacy policy</a>
          </li>
        </ul>
      </nav>
      <p className="r-align">© 2016 Les produits de marque Liberté inc. All rights reserved</p>
    </div>
  </div>
  </>
)

FooterEn.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default FooterEn;
