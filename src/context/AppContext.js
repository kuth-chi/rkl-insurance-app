// context/AppContext.js
import React, { createContext, useReducer } from 'react';


// Define App reducer hook
export const AppReducer = (state, action) => {
    let budget = 0;
    // Define actions
    switch (action.type) {
        case "ADD_EXPENSE":
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExpense, currentExpense) => {
                    return previousExpense + currentExpense.cost
                }, 0
            );
            total_budget = total_budget + action.payload.cost;
            action.type = 'DONE';
            if (total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExpense) => {
                    if (currentExpense.name === action.payload.name) {
                        currentExpense.cost = action.payload.cost + currentExpense.cost;
                    }
                    return currentExpense
                });
                return {
                    ...state,
                }; 

            } else {
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state,
                }
            };
        case 'RED_EXPENSE':
            const red_expense = state.expenses.map((currentExpense) => {
                if (currentExpense.name === action.payload.name && currentExpense.cost - action.payload.cost >= 0) {
                    currentExpense.cost = currentExpense.cost - action.payload.cost;
                    budget = state.budget + action.payload.cost;
                }
                return currentExpense
            })
            action.type = 'DONE';
            return {
                ...state,
                expenses: [...red_expense]
            };

        case 'DELETE_EXPENSE':
            action.type = 'DONE';
            state.expenses.map((currentExpense) => {
                if (currentExpense.name === action.payload.name) {
                    budget = state.budget + currentExpense.cost;
                    currentExpense.cost = 0;

                }
                return currentExpense;
                
            })
            action.type = 'DONE';
            return {
                ...state,
                budget
            };

            case 'SET_BUDGET':
                action.type = 'DONE';
                state.budget = action.payload;
                return {
                    ...state,
                };
            case 'CHG_CURRENCY':
                action.type = 'DONE';
                state.currency = action.payload;
                return {
                    ...state,
                }

        default:
            return state;
    }
};


// Initial state with items
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
        { id: "Security", name: 'Security', cost: 250 },
    ],
    currency: "£",
}

// Define App context
export const AppContext = createContext();

// App context provider
export const AppProvider = (props) => {

    // Setup app state take reducer and initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
        let remaining = 0;

    // Define actions
    if(state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {

            return (total = total + item.cost)
        });

        remaining = state.budget - totalExpenses;
    }

    // return App context provider
    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
                remaining: remaining,
                currency: state.currency,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}