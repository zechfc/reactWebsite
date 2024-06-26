import Header from '../components/Header';
import Footer from '../components/Footer';
import React from "react";

const About = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      console.log("test");
  
      const result = document.getElementById("result");
      let response = await getEmailResult();
  
      if(response.status == 200){
          result.innerHTML = "Email successfully sent";
      } else {
          result.innerHTML = "Sorry, your email was not sent";
      }
      }
  
  
    const getEmailResult = async() => {
      const form = document.getElementById("contact-form");
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const result = document.getElementById("result");
      result.innerHTML = "Please wait....";
  
      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers:{
                  "Content-Type":"application/json",
                  Accept:"application/json"
              },
              body:json
          });
  
          return response;
      } catch(error){
          console.log(error);
          result.innerHTML = "Sorry, your email couldn't be sent";
      }
  };
  


  return (
    
  <section >

<Header />

     <div class="columns fcontent">
            <section class="half" id="Founder">
                <h1>Our Founder</h1>
                <img src="images/zechfc.jpg"></img>
            </section>
            <section class="three fcontenttext">
              
                <p> Our founder’s dream was to always serve everyone. He recognized Americans work around the clock and he wanted to make sure that there would be something for everyone regardless of what time it was. He recognized that there is a big emphasis on staying alert and moving, but a lack of resources for when you need to relax and slow down. There are tons of stores and restaurants that focus on providing stimulants to customers to help them get through the workday but those same stores are lacking when it comes to the end of the work day and people want to rest. That’s why he made it his personal mission to help everyone get what they need through every part of the day.
                </p>
            </section>
            

        </div>
        <div class="columns fcontent">
            <section class="three">
                <h2>Our Mission</h2>
                <p>Our mission is to help keep America running by allowing it to slow down. We also hope to reach everyone, we are aware that there are people who work unconventional hours such as a graveyard shift, or people who are on call and have to be ready at a moment’s notice. We also want to provide spaces to unwind or be productive outside of the office or workplace. This is for those who a break in the middle of the day, a change of pace, or simply a place to work that’s not at home.
                </p>
            </section>
        </div>

        <div class="columns info-section">
                    <section class="half center-form">
                        <h3>Contact us</h3>
                        <form onSubmit={onSubmit}
                        id="contact-form"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          value="49db1dfd-5178-489a-b2ac-88f4af656c12"
                        />
              
                        <p>
                          <label for="name">Name:</label>
                          <input
                            id="name"
                            type="text"
                            placeholder="first and last"
                            name="name"
                            required
                          />
                        </p>
                        <p>
                          <label for="email">Email:</label>
                          <input id="email" type="email" name="email" required />
                        </p>
                        <p>
                          <label for="message">Message:</label>
                          <textarea id="message" name="message" required></textarea>
                        </p>
                        <input
                          type="hidden"
                          name="redirect"
                          value="https://web3forms.com/success"
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="Contact from Ezzs Website"
                        />
                        <input type="hidden" name="from_name" value="My Website" />
              
                        <p>
                          
                          <button type="submit">Submit Form</button>
                        </p>
              
                        <p id="result"></p>
                      </form>
                </section>

                <section class="half">
                  <h3>Our Location</h3>
                  <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421189.70575548935!2d-81.23330667246806!3d34.438321622849394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a98c68e09453%3A0xa72194d2a8707033!2sCanal%20Coffee%20Company!5e0!3m2!1sen!2sus!4v1710620715254!5m2!1sen!2sus"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </section>
        </div>

        <Footer />

        
  </section>
  );
}

export default About;