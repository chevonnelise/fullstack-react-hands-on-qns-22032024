import React, { useState } from 'react'

export default function Buffet() {

  const [items, setItems] = useState([]);

  const calculateTotal = () => {
    const itemCosts = {
      beef: 12.00,
      chicken: 7.50,
      fish: 10.00,
      mushrooms: 5.50,
      spinach: 2.50
    };

    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += itemCosts[items[i]];
    }
    return total;

  }

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (!items.includes(value)) {
      setItems([...items, value]); 
    } else {
      setItems(items.filter(item => item !== value)); 
    }
  }

  return (
    <React.Fragment>
      <div>
        <input type="checkbox" name="orders" value="beef" onClick={handleCheckboxChange} /><label>Shabu Shabu Beef</label>
      </div>
      <div>
        <input type="checkbox" name="orders" value="chicken" onClick={handleCheckboxChange} /><label>Chicken Fillet</label>
      </div>
      <div>
        <input type="checkbox" name="orders" value="fish" onClick={handleCheckboxChange} /><label>Fish Fillet</label>
      </div>
      <div>
        <input type="checkbox" name="orders" value="mushrooms" onClick={handleCheckboxChange} /><label>Assorted mushhrooms</label>
      </div>
      <div>
        <input type="checkbox" name="orders" value="spinach" onClick={handleCheckboxChange} /><label>Spinach</label>
      </div>
      <h1>Total:{calculateTotal()}</h1>
    </React.Fragment>
  )
}

