import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/dawnitems";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayForm from '../components/dayForm';

import DawnDrinks from '../components/dawnDrinks';


const Dawn = () => {
  
  const [menuItems, setMenuItems] = useState([]);

  //useEffect “delays” a piece of code from running until that render is reflected on the screen.
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://zechfc.github.io/csce242/projects/part6%20org/menu.json"
        
      );
      setMenuItems(response.data);
    })();
  }, []);

  return (
    <div>
          <Header />

          <div class="wrapper ">  

          <DayForm />
          <div id="dawnmenu" class="columns Menu">

      {menuItems.map((menuItem) => (
        <DawnDrinks
          key={menuItem.menuId}
          name={menuItem.name}
          type={menuItem.type}
          menu={menuItem.menu}
          feature={menuItem.feature}
          main_image={menuItem.img}
          description={menuItem.description}
          prices={menuItem.prices}
          amt={menuItem.amt}
          ingredients={menuItem.ingredients}


        />

      ))}
              </div>
              </div>

          <Footer />


    </div>
  );
};

export default Dawn;
