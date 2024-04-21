
import Header from '../components/Header';
import Footer from '../components/Footer';
const RoomRental = () => {
  return (
  <section >
        <Header />

       <section id="background">
        <div id="RRsubheader">
            <h1>Room Rentals</h1>
            <h3>Call 9999-888-888 For inquires</h3>
            <p>Both of our room types come soundproof, with charging stations, and with a kiosk so you can have your order come straight to your room. You can reserve here or by calling the phone number above. All walk-in reservations are subject to availability though we do keep rooms empty specifically for walk-ins. We have rooms that can hold one person all the way up to rooms that can hold four people. </p>
        </div>

        <div id="mid-section" class="columns">
        <p id="day" class="one">Day</p>
        <p class="half">&</p>
        <p id="nite" class="one">Nite</p>

        </div>
        
        
        
        
        <div id="content" class="columns">
           
                <section id="daycontent" class="one">  

                
                    <div id="dawn"> 
                        <img src="images/dawnroom.png"></img>
                    </div>
                    <p>The dawn room rentals are meant for those trying to be productive and get some work done. It comes with a modern desktop computer. We also include a docking station if you wish to plug in your own devices. The day happy hour applies when this room is rented from 5am-6pm, and any food order from the room has an additional discount as well.</p>
                    <div class="button">
                        <button id="btn-dawn">Rent Dawn</button>    
                        </div> 
          </section>

         
            <section id="line">

            </section>
            <section id="nightcontent" class="one">  

                    <div id="dusk" > 
                        <img src="images/duskroom.png"></img>
                    </div>
                    <p>The dusk room rentals are meant for those trying to wind down and relax. It comes with a comfortable bed as well as a temporary change of clothes. We also include built-in speakers for those that want to plug in a play ambient music such as white noise. The Nite happy hour applies when this room is rented from 6pm-5am, and any food order from the room has an additional discount as well.</p>
                    <div class="button">
                        <button id="btn-dusk">Rent Dusk</button>    
                        </div>
                </section>
        </div>
    </section>
    <Footer />

  </section>

  
  );
}

export default RoomRental;