
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
                  </div>
                  <div id="dawnmenu" class="columns Menu">
      
     
      </div>
                 

    </section>
  );
};

export default MenuItem;
