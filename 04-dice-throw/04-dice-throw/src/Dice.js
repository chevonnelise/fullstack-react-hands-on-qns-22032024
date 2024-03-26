import React, {useState} from 'react';

export default function Dice() {
    const [dice, setDice] = useState("1");

    const random = () => {
        const num = parseInt(Math.random()*6) + 1;
        setDice(num);
    }

    return (<>
    <div>
        <p>Random Number: {dice}</p>
        <button onClick={random}>Dice rolled</button>
    </div>

    </>)
}