import React, {useState} from 'react'

export default function GuestList() {

    const [guests, setGuests] = useState(
        [
            'Tony Stark',
            'Hawkeye',
            'Spider Man',
            'Bruce Wayne'
        ]
    )

    const handleGuestChange = (event) => {
        const newName = prompt('Enter the new guest name:');
        if (newName !== null) { // Check if the prompt wasn't canceled
            const updatedGuests = [...guests]; // Create a copy of the guests array
            updatedGuests[event] = newName; // Update the name of the guest at the specified index
            setGuests(updatedGuests); // Update the state with the modified array
        }

    }

    return (
        <React.Fragment>
            <h1>Guest List</h1>
            <ul>
                {guests.map((guest,index)=> (
                    <li key={index} onClick={() => handleGuestChange(1)}>{guest}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}