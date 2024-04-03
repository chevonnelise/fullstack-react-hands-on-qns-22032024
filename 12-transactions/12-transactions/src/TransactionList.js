import React, {useState} from 'react';

export default function TransactionList() {
  
    const [transactions, setTransactions] = useState(
        [
            {
                'id': 1201,
                'name':'TCZ 121Z',
                'type':'debit',
                'amount':1723
            },
            {
                'id': 1203, 
                'name':'AARON WREN',
                'type':'credit',
                'amount':500
            },
            {
                'id': 1207, 
                'name':'THOMSON FAMILY CLINIC',
                'type':'debit',
                'amount':60
            },
            {
                'id': 1211, 
                'name':'F&J TRADING',
                'type':'debit',
                'amount':120.5
            }
        ]
    )

    return (
    <React.Fragment>
        <ul>
            {
                transactions ? transactions.map((transaction)=> 
                <li style={{color:transaction.type === "debit" ? "red" : "green"}}>
                    {transaction.name}:{transaction.amount}
                </li>
                ) : <p> Loading... </p> 
            }
        </ul>
    </React.Fragment>
    )
  
}