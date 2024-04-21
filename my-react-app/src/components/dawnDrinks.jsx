import LogoDawn from '../components/dawnlogo';

const dawnDrinks = (menuItem) => {

  if (menuItem.menu == "dawn") {
    if(menuItem.type == "Drink" ){
      return (    
        <section>
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
                    <p> <strong>Large </strong>{menuItem.prices[0]}</p>
                    <p> <strong>Medium </strong> {menuItem.prices[1]}</p>
                    <p><strong>Small </strong>{menuItem.prices[2]}</p>
                  </div>
                </td>
            </tr>
          </table>

      
                             </section>

                
    )}

    <LogoDawn />

   

  }
};

export default dawnDrinks;
