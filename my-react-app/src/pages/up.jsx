import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DayForm from '../components/dayForm';
import DawnFood from '../components/dawnFood';
import DawnDrink from '../components/dawnDrinks';
import LogoDawn from '../components/dawnlogo';



const Dawn = () => {
  const submitForm = (event) => {
    event.preventDefault(); //don't refresh the page
    console.log("xxx");
    const result = document.getElementById("result");

    result.innerHTML = "";

    const Container = document.getElementById("side");

    const form = event.target
    const name = form.elements["menuItem-name"].value;
    const desc = form.elements["menuItem-description"].value;
    const img = form.elements["imgupload"].value;
    const recipie = form.elements["recipieupload"].value;


    const type = getRadioValue("Type");
    const ing1 = form.elements["ing-1"].value;
    const ing2 = form.elements["ing-2"].value;
    const ing3 = form.elements["ing-3"].value;
    const ing4 = form.elements["ing-4"].value;
    const ing5 = form.elements["ing-5"].value;
    const ing6 = form.elements["ing-6"].value;


    //console.log(name + " "+ desc + " "+ img + " "+ type + " "+ ing1);

    const list = document.createElement("ul");
    const nameli = document.createElement("li");
    const descli = document.createElement("li");
    const imgli = document.createElement("li");
    const typeli = document.createElement("li");
    const recipieli = document.createElement("li");

    const ing1li = document.createElement("li");
    const ing2li = document.createElement("li");
    const ing3li = document.createElement("li");
    const ing4li = document.createElement("li");
    const ing5li = document.createElement("li");
    const ing6li = document.createElement("li");


    nameli.innerHTML = "name:" + name;
    descli.innerHTML = "desc:" + desc;
    imgli.innerHTML = "img:" + img;
    recipieli.innerHTML = "recipie:" + recipie;

    typeli.innerHTML = "type:" + type;
    ing1li.innerHTML = "ing1:" + ing1;
    ing2li.innerHTML = "ing2:" + ing2;
    ing3li.innerHTML = "ing3:" + ing3;
    ing4li.innerHTML = "ing4:" + ing4;
    ing5li.innerHTML = "ing5:" + ing5;
    ing6li.innerHTML = "ing6:" + ing6;


    list.append(nameli);
    list.append(descli);
    list.append(imgli);
    list.append(typeli);
    list.append(recipieli);
    list.append(ing1li);
    list.append(ing2li);
    list.append(ing3li);
    list.append(ing4li);
    list.append(ing5li);
    list.append(ing6li);

    


    Container.append(list);
    result.innerHTML = "Form successfully sent";

};


const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";

};


//Side panel credit ->https://codepen.io/dcode-software/pen/OJxEWWz
const open = () => {

document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    console.log("test");
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
    if(document.getElementById("side-panel-button").innerHTML=="Close Panel")
    {
        document.getElementById("side-panel-button").innerHTML="Recommend A Day Menu Item"
    }
    else{
        document.getElementById("side-panel-button").innerHTML="Close Panel"

    }

  });
}

  
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
          <button onClick={open} id="side-panel-button" class="side-panel-toggle" type="button"> Recommend A Day Menu Item</button>

          <div class="wrapper ">  
          <DayForm />

          <div class="main">
                  
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
      <Footer />

              </div>
              </div>



    </div>
  );
};

export default Dawn;
