import {Link, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
     <Router>
    <div className="App">
    <div className="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
        <Link href="#"><img src="img/logo.png" alt=""/></Link>
    </div>
    <div class="humberger__menu__cart">
        <ul>
            <li><Link href="#"><i class="fa fa-heart"></i> <span>1</span></Link></li>
            <li><Link href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></Link></li>
        </ul>
        <div class="header__cart__price">item: <span>$150.00</span></div>
    </div>
    <div class="humberger__menu__widget">
        <div class="header__top__right__language">
            <img src="img/language.png" alt=""/>
            <div>English</div>
            <span class="arrow_carrot-down"></span>
            <ul>
                <li><Link href="#">Spanis</Link></li>
                <li><Link href="#">English</Link></li>
            </ul>
        </div>
        <div class="header__top__right__auth">
            <Link href="#"><i class="fa fa-user"></i> Login</Link>
        </div>
    </div>
    <nav class="humberger__menu__nav mobile-menu">
        <ul>
            <li class="active"><Link href="./index.html">Home</Link></li>
            <li><Link href="./shop-grid.html">Shop</Link></li>
            <li><Link href="#">Pages</Link>
                <ul class="header__menu__dropdown">
                    <li><Link href="./shop-details.html">Shop Details</Link></li>
                    <li><Link href="./shoping-cart.html">Shoping Cart</Link></li>
                    <li><Link href="./checkout.html">Check Out</Link></li>
                    <li><Link href="./blog-details.html">Blog Details</Link></li>
                </ul>
            </li>
            <li><Link href="./blog.html">Blog</Link></li>
            <li><Link href="./contact.html">Contact</Link></li>
        </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
        <Link href="#"><i class="fa fa-facebook"></i></Link>
        <Link href="#"><i class="fa fa-twitter"></i></Link>
        <Link href="#"><i class="fa fa-linkedin"></i></Link>
        <Link href="#"><i class="fa fa-pinterest-p"></i></Link>
    </div>
    <div class="humberger__menu__contact">
        <ul>
            <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
            <li>Free Shipping for all Order of $99</li>
        </ul>
    </div>
</div>
    </div>
    </Router>
  );
}

export default App;
