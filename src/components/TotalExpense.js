// components/TotalExpense.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const TotalSpent = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {

        return (total = total + item.cost)
    }, 0);

    // const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert alert-primary row align-items-center`}>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default TotalSpent;