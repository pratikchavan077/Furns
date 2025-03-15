
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyAccount from './components/UserProfile/MyAccount'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import Shop from './components/Shop/Shop'
import poster1 from './assets/slider-2-1.webp'
import poster2 from './assets/premium_leather_sofa_resized.png'
import poster3 from './assets/slider-2-2.webp'
import poster4 from './assets/DiningSet.webp'
import product1 from './assets/product1.webp'
import product2 from './assets/product2.webp'
import product3 from './assets/product3.webp'
import product4 from './assets/product4.webp'
import Wishlist from './components/Wishlist/Wishlist'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
const productsData = [
  {
      id: 1,
      image: product1,
      name: "Modern Minimalist Chair",
      price: 129.99,
      description: "A sleek and comfortable chair designed for contemporary spaces, with high-quality wooden legs.",
      isNew:true,
      isDiscount:true,
      discount:"-5%"
  },
  {
      id: 2,
      image: product2,
      name: "Rustic Wooden Decor",
      price: 49.99,
      description: "Handcrafted wooden decorations to add a warm and cozy touch to your home decor.",
      isDiscount:true,
      discount:"-5%"
  },
  {
      id: 3,
      image: product3,
      name: "Luxury Ceramic Vase",
      price: 59.99,
      description: "A high-quality ceramic vase perfect for floral arrangements or as a decorative centerpiece."
  },
  {
      id: 4,
      image: product4,
      name: "Ergonomic Lounge Chair",
      price: 249.99,
      description: "A premium lounge chair designed for maximum comfort, ideal for both living rooms and offices.",
      isNew:true
  },
  {
      id: 5,
      image: product4,
      name: "Adjustable Office Desk",
      price: 399.99,
      description: "A modern office desk with height adjustment, suitable for both sitting and standing work."
  },
  {
      id: 6,
      image: product3,
      name: "Vintage Bedside Lamp",
      price: 79.99,
      description: "A stylish bedside lamp with warm lighting to create a cozy atmosphere in your bedroom.",
      
      isNew:true,
  },
  {
      id: 7,
      image: product2,
      name: "Luxury Sofa Set",
      price: 1299.99,
      description: "A spacious and comfortable sofa set, perfect for modern living rooms with premium fabric finish."
  },
  {
      id: 8,
      image: product1,
      name: "Elegant Dining Table",
      price: 699.99,
      description: "A solid wood dining table with a modern finish, perfect for family dinners and gatherings."
  }
];
const carouselData = [
  {
      id: 0,
      image: poster1,
      title: "New Collection",
      heading: "Luxury Flexible Sofa",
      description: "Experience ultimate comfort with our new flexible sofa set, designed for modern living spaces."
  },
  {
      id: 1,
      image: poster2,
      title: "Trending Now",
      heading: "Premium Leather Sofa",
      description: "Crafted with high-quality leather, this sofa adds elegance to your home while ensuring durability and comfort."
  },
  {
      id: 2,
      image: poster3,
      title: "Best Seller",
      heading: "Elegant Wooden Set",
      description: "Upgrade your dining experience with our handcrafted wooden dining set, featuring premium oak wood."
  },
  {
      id: 3,
      image: poster4,
      title: "Best Seller",
      heading: "Elegant Wooden Dining Set",
      description: "Upgrade your dining experience with our handcrafted wooden dining set, featuring premium oak wood."
  }
]

function App() {

  const [isCartActive, setIsCartActive] = useState(false);
  const [wishListedProducts, setWishListedProducts] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const[qty, setQty] = useState(1)
  return (
    <>
      <Router>
        <Header cartItems={cartItems} setCartItems={setCartItems} isCartActive={isCartActive} setIsCartActive={setIsCartActive} qty={qty}/>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home productsData = {productsData} carouselData={carouselData} wishListedProducts={wishListedProducts} setWishListedProducts={setWishListedProducts} qty={qty} setQty={setQty} cartItems={cartItems} setCartItems={setCartItems} setIsCartActive={setIsCartActive}/>} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/checkout' element={<Checkout cartItems={cartItems}/>}  />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop productsData = {productsData}/>} />
            <Route path='/wishlist' element={<Wishlist productsData={wishListedProducts} qty={qty} setQty={setQty} cartItems={cartItems} setCartItems={setCartItems}/>} />
          </Routes>
      </main>
      <Footer />
      </Router>

    </>
  )
}

export default App
