import { Outlet, Link } from "react-router-dom";

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
                            
                             <Link to="/up">
                            <button id="btn-day">Pick Me Up!</button>    
                            </Link> 


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
                    <Link to="/down">
                     <button id="btn-night">Put Me Down!</button>   
                     </Link> 
                        </div>
                       
                </div>
               

                   
                   
            </section>
        </div>
        
    </div>

  </section>
  );
}

export default Content;