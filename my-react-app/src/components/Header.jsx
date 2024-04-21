import { Outlet, Link } from "react-router-dom";

const Header = () => {

    const showHideNav = () => {
        const root = document.querySelector(":root");
            //root.style.setProperty("--ball-color", color); changes all the circles color
        if(document.getElementById("nav-items").classList.toggle("hide-small"))
            {
                root.style.setProperty("--top1", "500px");
                root.style.setProperty("--top2", "800px");
            }
        else
        {
          
                root.style.setProperty("--top1", "800px");
                root.style.setProperty("--top2", "900px");
        }
       
    
    
    
    };
    
    
    
      
    
    const toggleMenu = () => {
            const mainNav= document.getElementById("main-nav");
            mainNav.classList.toggle("show-menu");
        };
    
    

    
  return (
  <header>
     <div id="heading" class="columns ">
            <div class="align one">
                <h1 >Ezz Coffee</h1>
            </div>

                <section id="signin" >
                <Link to="/signin">
                <img alt="signin" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/PICOL_icon_Login.svg"></img>
                <p>Sign In</p>                
            </Link>

            </section >

            <section id="cart-btn" >
            <Link to="/cart">
                <img alt="cart" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Antu_amarok_cart_view.svg"></img>
                <p>cart</p>
            </Link>
            </section>
        </div>


       <nav id="main-nav">

        <div onclick = {showHideNav} id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>

                <ul id="nav-items" class="columns hide-small">
                    <li><Link to="/layout"><img alt="index" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg"></img>Home</Link></li>
                    <li> <Link to="/up"><img alt="up" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/OOjs_UI_icon_sun-ltr.svg"></img>Pick Me Up</Link></li>
                    <li><Link to="/down"><img alt="down" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/OOjs_UI_icon_moon.svg"></img>Put Me Down</Link></li>
                    <li><Link to="/roomRental"><img alt="roomRental" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Bell-concierge-solid.svg"></img>Room Rentals</Link></li>
                    <li><Link to="/about"><img  alt="aboutUs"src="https://upload.wikimedia.org/wikipedia/commons/8/83/Coffee-beans_-_Delapouite_-_game-icons.svg"></img>About Us</Link></li>
                </ul>
            </nav>
            <Outlet />


  </header>

  
  );
}

export default Header;