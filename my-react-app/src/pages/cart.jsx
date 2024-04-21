import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {

  return (
    <div>
          <Header />

          <section>
        <div  class="popup">
            <div  id="cart"class="form">
                <h2>Cart</h2>

                <ul>
                    <li>Food</li>
                    <li>Food</li>
                    <li>Bev</li>
                    <li>Bev</li>
                    <li>Total</li>

                </ul>
                <div class="form-elements">
                    <button> Check Out</button>

                </div>
            </div>

               
            </div>
            </section>

          <Footer />


    </div>
  );
};

export default Cart;
