import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/dawnitems";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayForm from '../components/dayForm';
import DawnFood from '../components/dawnFood';
import DawnDrink from '../components/dawnDrinks';
import LogoDawn from '../components/dawnlogo';



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

          <div className="two foodContainer"  id="drinkCont">

          {menuItems.map((menuItem) => (
        <DawnDrink
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

      <div className="three">
      <LogoDawn />

      </div>
      <div className="two">

      {menuItems.map((menuItem) => (
        <DawnFood
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
              </div>

          <Footer />


    </div>
  );
};

export default Dawn;
