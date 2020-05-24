import React, { useContext, useRef, useEffect } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetFilter = () => {
    const budgetContext = useContext(BudgetContext);
    const text = useRef('');
    const { filterBudgets, clearFilter, filtered } = budgetContext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if(text.current.value !== '') {
            filterBudgets(e.target.value);
        } else {
            clearFilter();
        };
    };

    return (
        <form>
            <input 
                ref={text} 
                type="text" 
                placeholder='Filter Budgets...'
                onChange={onChange}    
            />
        </form>
    )
}

export default BudgetFilter;