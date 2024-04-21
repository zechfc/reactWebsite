
const MenuItem = (menuItem) => {

  const submitForm = (event) => {
    event.preventDefault(); //don't refresh the page
    console.log("xxx");
    const result = document.getElementById("result");

    result.innerHTML = "";

    const Container = document.getElementById("side");

    const form = event.target
    const name = form.elements["item-name"].value;
    const desc = form.elements["item-description"].value;
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

  return (
    <section >
     <button onClick={open} id="side-panel-button" class="side-panel-toggle" type="button"> Recommend A Nite Menu Item</button>
                <div class="wrapper ">  
                  <div id="side" class="side-panel">
                    <form id="items">
                        <p>
                          <label for="item-name">Name:</label>
                          <input
                            type="text"
                            id="item-name"
                            name="item-name"
                            required
                            minlength="3"
                            placeholder="Item Name"

                          />
                           
                        </p>
                        <p>
                            <label for="item-description">Description:</label>
                            <input
                              type="text"
                              id="item-description"
                              name="item-description"
                              required
                              minlength="10"
                              placeholder="Item-Description"
  
                            />
                             

                          </p>
                        
              
                        <p>
                          <input type="radio" name="Type" value="Drink" required /> 

                          <label for="Drink" class="inline">Drink</label>
                        </p>
                    
                        <p>
                          <input required type="radio" name="Type" value="Food" /> 
                          <label for="Food" class="inline">Food</label>
                        </p>
                        <p>
                            <label for="imgupload" class="inline">Upload an Img It can be a JPG, JPEG, or PNG</label>
                            <input type="file" required  id="imgupload" accept="image/png, image/jpeg, image/jpg"name="imgupload"/>  
                           

                        </p>
              
                        <p>
                            <label for="imgupload" class="inline">List at Least 4 core ingredients</label>
                            <ol>
                                <li><input type="text" id="ing-1" name="ing-1" required placeholder="Ingredients 1"/>  </li>
                                <li><input type="text" id="ing-2" name="ing-2" required placeholder="Ingredients 2"/>  </li>
                                <li><input type="text" id="ing-3" name="ing-3" required placeholder="Ingredients 3"/>  </li>
                                <li><input type="text" id="ing-4" name="ing-4" required placeholder="Ingredients 4"/>  </li>
                                <li><input type="text" id="ing-5" name="ing-5"  placeholder="Ingredients 5"/>  </li>
                                <li><input type="text" id="ing-6" name="ing-6"  placeholder="Ingredients 6"/>  </li>


                            </ol>
                          
                        </p>
                        <p>
                            <label for="recipieupload" class="inline">Upload a PDF with a detailed Recipie</label>
                            <input type="file" required  id="recipieupload" accept="application/pdf"name="recipieupload"/> 
                        </p>
                        <p>
                          <button onSubmit={submitForm} type="submit">Submit</button>
                        </p>
                        <p id="result"></p>

                      </form>
                  </div>
<div id="dawnmenu" class="columns Menu">
      
     
      <div class="two drinksContainer" id="drinkCont">
        <table class="top drinks">
          <tr>
            <th>Drink of the Week</th>
            <th>Cup Oh Joe</th></tr>
            <tr>
              <td>
                <img src="images/coffee.jpg"></img>
                  <p></p>
                  <button class="order">Order</button>
                </td>
                <td>
                  <p>A classic cup of American Joe with just a hint of love</p>
                  <h3>Ingredients</h3>
                  <ul>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Sugar</li>
                    <li>Creamer</li>
                    </ul>
                  <h3>Price</h3>
                    <div class="bullets">
                      <p><strong>Large</strong> -  5.00</p>
                      <p><strong>Medium</strong> -  3.50</p>
                      <p><strong>Small</strong> -  2.00</p>
                    </div>
                  </td>
              </tr>
            </table>
            <table class="top drinks">
              <tr>
                <th>Beverage Menu</th>
                <th>Coconut pick me up</th>
              </tr>
              <tr>
                  <td>
                    <img src="images/Coconut pick me up.jpg"></img>
                      <p></p>
                      <button class="order">Order</button>
                  </td>
                  <td>
                    <p>Something more delicate but with a surprising punch</p>
                    <h3>Ingredients</h3>
                    <ul>
                      <li>Lime</li>
                      <li>Coconut</li>
                      <li>Sugar</li>
                      <li>Dragon Fruit</li>
                    </ul>
                    <h3>Price</h3>
                    <div class="bullets">
                      <p>
                        <strong>Large</strong> -  5.00</p>
                        <p><strong>Medium</strong> -  3.50</p>
                        <p><strong>Small</strong> -  2.00</p>
                      </div>
                    </td>
                    </tr>
                    </table>
                    </div>
                    <div id="center" class="three">
                      <img src="images/sun.png"></img>
                    </div>
                    <div class="two foodContainer" id="foodCont">
                      <table class="top food">
                        <tr>
                          <th>Food of the Week</th>
                          <th>Tiny Whale</th>
                        </tr>
                        <tr>
                          <td>
                            <img src="images/tiny whale.jpg"></img>
                              <p></p>
                              <button class="order">Order</button>
                            </td>
                            <td>
                              <p>Small enough to eat on a the go but hearty enough to be a meal</p>
                              <h3>Ingredients</h3>
                              <ul>
                              <li>Eggs</li>
                              <li>Salmon</li>
                              <li>Tomato</li>
                              <li>Sour Cream</li>
                              <li> Lettuce</li>
                              </ul>
                              <h3>Price</h3>
                              <div class="bullets">
                                <p><strong>3 serving amt</strong> -  $5.00</p>
                                <p><strong>2 serving amt</strong> -  $3.50</p>
                                <p><strong>1 serving amt</strong> -  $2.00</p>
                             </div>
                             </td>
                          </tr>
                          </table>
                          
                          <table class="top food">
                            <tr>
                              <th>Food Menu</th>
                              <th>Strawberry Starter</th>
                            </tr>
                            <tr>
                              <td>
                                <img src="images/Strawberry Starter.jpg"></img>
                                  <p></p>.
                                  <button class="order">Order</button>
                                  </td>
                                  <td>
                                    <p>Something small and sweet to help you get on your feet</p>
                                    <h3>Ingredients</h3>
                                  <ul>
                                    <li>Strawberry</li>
                                    <li>Milk</li>
                                    <li>Sugar</li>
                                    <li>Butter</li>
                                  </ul>
                                  <h3>Price</h3>
                                  <div>
                                    <p><strong>9 serving amt</strong> -  $5.00</p>
                                    <p><strong>6 serving amt</strong> -  $3.50</p>
                                    <p><strong>3 serving amt</strong> -  $2.00</p>
                                  </div>
                                  </td>
                                  </tr>
                                  </table>
                                  </div>
                                  </div>
                 
                                  </div>

    </section>
  );
};

export default MenuItem;
