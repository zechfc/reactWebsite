
const MenuItem = (menuItem) => {

  
  return (
    <section >
     <button id="side-panel-button" class="side-panel-toggle" type="button"> Recommend A Nite Menu Item</button>
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
                          <button type="submit">Submit</button>
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
