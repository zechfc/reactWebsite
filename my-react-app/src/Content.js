import './Content.css';

const Content = () => {
  return (
  <section className = {Content.className}>
         <div id="background">
        <div id="subheader">
            <p>Here at Ezz Coffzee we believe in giving you what you need any time you need easy. But to serve all our customers needs we need to be open 24/7. Which we are! We are happy to serve you ...</p>
        </div>

      
        
        
        
        <div id="content" class="columns">
           
                <section id="daycontent" class="one">  

                    <div id="daypic" > 
                        <h2>Day</h2>
                        <img alt="daypic" id="pic1" src="images/cupDawn.jpg"></img>
                        <p>Our main goal with the day menu is to provide you with a pick me up. This could come in the form of a drink that gives you that quick boost of energy or a meal that sustains you for the rest of the working day. The day menu is curated for those either just starting their day or trying to get through the rest of it. We run our day happy hour from 5am-6pm, which includes discounts on all our day menu items.</p>
                        <div class="button">
                            <button id="btn-day">Pick Me Up!</button>    
                            </div>
                            
                    </div>
               

                  
                    
            </section>

            <section id="line">
                <img alt="line" src="images/line.png"></img>

            </section>

            <section id="nightcontent" class="one">  
                <div id="nightpic" > 
                    <h2>Nite</h2>

                    <img alt="nightpic" id="pic2" src="images/cupDusk.png"></img>
                    <p>Our main goal with the Nite menu is to provide you with a put me up. This could come in the form of a drink that lulls you to sleep or the meal that relaxes you. The Nite menu is curated for those either just ending their day or trying to relax after a long day of work. We run our day happy hour from 6pm-5am, which includes discounts on all our Nite menu items.</p>
               
                    <div class="button">
                        <button id="btn-night">Put Me Down!</button>    
                        </div>
                       
                </div>
               

                   
                   
            </section>
        </div>
        
    </div>
    <div  id="signin-pop" class="popup hide" >
            <div id="login" class="form">
                <h2>log in</h2>
                <div class="form-elements"></div>
                    <label for="email">Email</label>
                    <input type="email" name="email" required id="email" placeholder="Enter email"></input>
                <div class="form-elements"></div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password"></input>
                <div class="form-elements">
                    <button> Sign in</button>

                </div>
            </div>
        </div>
        <section class="center">

<p>&copy; By Zechariah</p>

    <button id="btn-attributions">Show attributions</button>    
</section>
  </section>
  );
}

export default Content;