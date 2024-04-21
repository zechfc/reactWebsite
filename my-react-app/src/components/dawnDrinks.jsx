import LogoDawn from '../components/dawnlogo';

const dawnDrinks = (menuItem) => {

  if (menuItem.menu == "dawn") {
    if(menuItem.type == "Drink" && menuItem.feature == true){
      return (    
        
      <table className="two top drinks">
        <tr>
          <th>Drink of The Week</th>
          <th>{menuItem.name}</th>
          </tr>
          <tr>
            <td>
        
              <img id="test" src={menuItem.main_image}></img>
                <p></p>
                <button className="order">Order</button>
              </td>
              <td>
                <p>{menuItem.description}</p>
                <h3>Ingredients</h3>
                <ul>
                  <li>{menuItem.ingredients[0]}</li>
                  <li>{menuItem.ingredients[1]}</li>
                  <li>{menuItem.ingredients[2]}</li>
                  <li>{menuItem.ingredients[3]}</li>
                  </ul>
                <h3>Price</h3>
                  <div className="bullets">
                    <p><strong></strong></p>
                    <p><strong></strong> </p>
                    <p><strong></strong></p>
                  </div>
                </td>
            </tr>
          </table>
   
    )}
    if(menuItem.type == "Drink" && menuItem.feature == false){
      return (    
      
          <table className="two top drinks">
            <tr>
              <th>Beverage Menu</th>
              <th>{menuItem.name}</th>
            </tr>
            <tr>
                <td>
                  <img src={menuItem.main_image}></img>
                    <p></p>
                    <button className="order">Order</button>
                </td>
                <td>
                  <p>{menuItem.description}</p>
                  <h3>Ingredients</h3>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li> </li>
                  </ul>
                  <h3>Price</h3>
                  <div className="bullets">
                    <p>
                      <strong>Large</strong> -  5.00</p>
                      <p><strong>Medium</strong> -  3.50</p>
                      <p><strong>Small</strong> -  2.00</p>
                    </div>
                  </td>
                  </tr>
                  </table>
               
                
    )}

    <LogoDawn />

    if(menuItem.type == "Food" && menuItem.feature == true){
      return (    
        <section>
      <table className="top food">
        <tr>
          <th>Food of The Week</th>
          <th>{menuItem.name}</th>
          </tr>
          <tr>
            <td>
        
              <img id="test" src={menuItem.main_image}></img>
                <p></p>
                <button className="order">Order</button>
              </td>
              <td>
                <p>{menuItem.description}</p>
                <h3>Ingredients</h3>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  </ul>
                <h3>Price</h3>
                  <div className="bullets">
                    <p><strong></strong></p>
                    <p><strong></strong> </p>
                    <p><strong></strong></p>
                  </div>
                </td>
            </tr>
          </table>
   
                  </section>
    )}
    if(menuItem.type == "Food" && menuItem.feature == false){
      return (    
        <section>
      
          <table className="top food">
            <tr>
              <th>Food Menu</th>
              <th>{menuItem.name}</th>
            </tr>
            <tr>
                <td>
                  <img src={menuItem.main_image}></img>
                    <p></p>
                    <button className="order">Order</button>
                </td>
                <td>
                  <p>{menuItem.description}</p>
                  <h3>Ingredients</h3>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li> </li>
                  </ul>
                  <h3>Price</h3>
                  <div className="bullets">
                    <p>
                      <strong>Large</strong> -  5.00</p>
                      <p><strong>Medium</strong> -  3.50</p>
                      <p><strong>Small</strong> -  2.00</p>
                    </div>
                  </td>
                  </tr>
                  </table>
               
                  </section>
    )} 
   

  }
};

export default dawnDrinks;
