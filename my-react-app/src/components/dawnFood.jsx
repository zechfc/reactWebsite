
const dawnFood = (menuItem) => {
    if (menuItem.menu == "dawn") {

    if(menuItem.type == "Food"){
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
   

  }
};

export default dawnFood;
