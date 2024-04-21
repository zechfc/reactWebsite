import Header from '../components/Header';
import Footer from '../components/Footer';

const Signin = () => {

  return (
    <div>
          <Header />

          <section>
          <div  class="popup">
            <div id="login" class="form">
                <h2>log in</h2>
                <div class="form-elements"></div>
                    <label for="email">Email</label>
                    <input type="email" name="email" required id="email" placeholder="Enter email" />
                <div class="form-elements"></div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" />
                <div class="form-elements">
                    <button> Sign in</button>

                    </div>
                    </div>
                    </div>
                
            </section>



    </div>
  );
};

export default Signin;
