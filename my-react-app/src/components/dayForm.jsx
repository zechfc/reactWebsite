
const MenuItem = (menuItem) => {
    
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

    
    return (

                    <div id="side" class="side-panel">
                      <form id="menuItems">
                          <p>
                            <label for="menuItem-name">Name:</label>
                            <input
                              type="text"
                              id="menuItem-name"
                              name="menuItem-name"
                              required
                              minlength="3"
                              placeholder="Item Name"
  
                            />
                             
                          </p>
                          <p>
                              <label for="menuItem-description">Description:</label>
                              <input
                                type="text"
                                id="menuItem-description"
                                name="menuItem-description"
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
               


  
    );
  };

  export default MenuItem;
  