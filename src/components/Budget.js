// components/Budget.js
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
    <div className='alert alert-secondary row align-items-center'> 
        <div className="col-auto">
            <label for="budgetField" className="col-form-label">Budget: £</label>
        </div>
        <div class="col-auto">
            <input type="number" name='budgetField' value={newBudget} onChange={handleBudgetChange} step={50} className="form-control"></input>
        </div>  
    </div>
    )
}

export default Budget;