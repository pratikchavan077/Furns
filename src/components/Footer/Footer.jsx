import React from "react";
import { FaPinterestP, FaTumblr, FaTwitter, FaPinterest, FaLinkedin, FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css"; // Import CSS module
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* ABOUT US */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>ABOUT US</h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.socialIcons}>
            <FaPinterestP />
            <FaTumblr />
            <FaTwitter />
            <FaPinterest />
            <FaLinkedin />
          </div>
        </div>

        {/* INFORMATION */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>INFORMATION</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><Link to="/aboutus">About Us</Link></li>
            <li className={styles.listItem}><Link to="/checkout">Delivery Information</Link></li>
            <li className={styles.listItem}><Link to="/">Privacy & Policy</Link></li>
            <li className={styles.listItem}><Link to="/">Terms & Condition</Link></li>
            <li className={`${styles.listItem} ${styles.highlightLink}`}><a href="#">Manufacturers</a></li>
          </ul>
        </div>

        {/* MY ACCOUNT */}
        <div className={styles.footerSection}>
          <h3 className={`${styles.heading}`}>MY ACCOUNT</h3>
          <ul className={styles.list}>
            <li className={`${styles.listItem} ${styles.highlightLink}`}><Link to="/account">My Account</Link></li>
            <li className={styles.listItem}><Link to="/">My Cart</Link></li>
            <li className={styles.listItem}><Link to="/login">Login</Link></li>
            <li className={styles.listItem}><Link to="/wishlist">Wishlist</Link></li>
            <li className={styles.listItem}><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>NEWSLETTER</h3>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Your Mail*" className={styles.newsletterInput} />
            <button className={styles.newsletterButton}><i className="fas fa-paper-plane" style={{fontSize:"12px"}}></i> Send Mail</button>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className={styles.bottomFooter}>
        <p>© 2025 Furns Made with <FaHeart className={styles.heartIcon} /> By Pratik.</p>
      </div>
    </footer>
  );
};

export default Footer;
