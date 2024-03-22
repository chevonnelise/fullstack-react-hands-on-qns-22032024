import React, {useState} from 'react'

export default function Display () {
  
    const [drink, setDrink] = useState(1);

    const getDrink = () => {
        if (drink === 1) {
            return 'coffee';
        }
        if (drink === 2) {
            return 'tea';
        }
        if (drink === 3) {
            return 'orangejuice';
        }
    }

    return (
        <React.Fragment>
          <h1>Drink Vending Machine</h1>
          <div className="display">
          </div>
          <button onClick={() => setDrink(1)}>Coffee</button>
          <button onClick={() => setDrink(2)}>Tea</button>
          <button onClick={() => setDrink(3)}>Orange Juice</button>
          {drink}
        </React.Fragment>
      );
    
  }