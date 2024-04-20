import './Header.css';

const Header = () => {
  return (
  <header>
     <div id="heading" class="columns ">
            <div class="align one">
                <h1 >Ezz Coffee</h1>
            </div>

                <section id="signin" >
                <a href="#"> 
                <img alt="signin" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/PICOL_icon_Login.svg"></img>
                <p>Sign In</p>                
            </a>

            </section >

            <section id="cart-btn" >
                <a href="cart.html" >
                <img alt="cart" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Antu_amarok_cart_view.svg"></img>
                <p>cart</p>
            </a>
            </section>
        </div>


       <nav id="main-nav">

        <div id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>

                <ul id="nav-items" class="columns hide-small">
                    <li><a href="index.html"><img alt="index" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg"></img>Home</a></li>
                    <li><a href="up.html"><img alt="up" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/OOjs_UI_icon_sun-ltr.svg"></img>Pick Me Up</a></li>
                    <li><a href="down.html"><img alt="down" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/OOjs_UI_icon_moon.svg"></img>Put Me Down</a></li>
                    <li><a href="roomRental.html"><img alt="roomRental" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Bell-concierge-solid.svg"></img>Room Rentals</a></li>
                    <li><a href="aboutUs.html"><img  alt="aboutUs"src="https://upload.wikimedia.org/wikipedia/commons/8/83/Coffee-beans_-_Delapouite_-_game-icons.svg"></img>About Us</a></li>
                </ul>
            </nav>

  </header>

  
  );
}

export default Header;