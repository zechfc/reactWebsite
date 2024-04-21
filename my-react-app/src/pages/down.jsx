import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/duskitems";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Down = () => {
  const [menuItems, setMenuItems] = useState([]);

  //useEffect “delays” a piece of code from running until that render is reflected on the screen.
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://zechfc.github.io/csce242/projects/part6%20org/menu.json"
        
      );
      console.log("made it");

      setMenuItems(response.data);
    })();
  }, []);

  return (
    <div>
          <Header />

      {menuItems.map((menuItem) => (
        <MenuItem
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

          <Footer />


    </div>
  );
};

export default Down;
