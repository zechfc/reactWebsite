
const duskFood = (menuItem) => {
    if (menuItem.menu == "dusk") {

    if(menuItem.type == "Food"){
      return (    
        <div>
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
                <li>{menuItem.ingredients[0]}</li>
                  <li>{menuItem.ingredients[1]}</li>
                  <li>{menuItem.ingredients[2]}</li>
                  <li>{menuItem.ingredients[3]}</li>
                  </ul>
                <h3>Price</h3>
                  <div className="bullets">
                  <p> <strong>{menuItem.amt[0]} Serving Size</strong>{menuItem.prices[0]}</p>
                    <p> <strong>{menuItem.amt[1]} Serving Size</strong> {menuItem.prices[1]}</p>
                    <p><strong>{menuItem.amt[2]} Serving Size</strong>{menuItem.prices[2]}</p>
                  </div>
                </td>
            </tr>
          </table>
   
               
                  </div>
    )} 
   

  }
};

export default duskFood;
