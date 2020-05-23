import React, { useState, useContext, useEffect } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetForm = () => {
    const budgetContext = useContext(BudgetContext);
    const { addBudget, current, clearCurrent, updateBudget } = budgetContext;

    useEffect(() => {
        if(current !== null) {
            setBudget(current);
        } else {
            setBudget({
                income: '',
                expenses: { rent: '', car: '', subscriptions: '', groceries: '', play: '' },
                investments: { t401k: '', hsa: '', roth: '', robinhood: '' }
            });
        }
    }, [current]);

    const [budget, setBudget] = useState({
        income: '',
        expenses: { rent: '', car: '', subscriptions: '', groceries: '', play: '' },
        investments: { t401k: '', hsa: '', roth: '', robinhood: '' }
    });

    const {
        income,
        expenses: { rent, car, subscriptions, groceries, play },
        investments: { t401k, hsa, roth, robinhood }
    } = budget;

    const onChange = e => {
        const newBudget = {
            ...budget,
            expenses: { ...budget.expenses },
            investments: { ...budget.investments }
        };
        console.log('original budget: ', newBudget)

        if(newBudget[`${e.target.name}`] !== undefined) {
            newBudget[`${e.target.name}`] = e.target.value 
        } else if(newBudget.expenses[`${e.target.name}`] !== undefined) { 
            newBudget.expenses[`${e.target.name}`] = e.target.value
        } else if(newBudget.investments[`${e.target.name}`] !== undefined) {
            newBudget.investments[`${e.target.name}`] = e.target.value
        };

        console.log('the new budget', newBudget);
        setBudget({ ...newBudget });
    }

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addBudget(budget);
        } else {
            updateBudget(budget);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Budget' : 'Add Budget'}</h2>            
            <input type="text" placeholder="income" name="income" value={income} onChange={onChange}/>
            <input type="text" placeholder="rent" name="rent" value={rent} onChange={onChange}/>
            <input type="text" placeholder="car" name="car" value={car} onChange={onChange}/>
            <input type="text" placeholder="subscriptions" name="subscriptions" value={subscriptions} onChange={onChange}/>
            <input type="text" placeholder="groceries" name="groceries" value={groceries} onChange={onChange}/>
            <input type="text" placeholder="play" name="play" value={play} onChange={onChange}/>
            <input type="text" placeholder="t401k" name="t401k" value={t401k} onChange={onChange}/>
            <input type="text" placeholder="hsa" name="hsa" value={hsa} onChange={onChange}/>
            <input type="text" placeholder="roth" name="roth" value={roth} onChange={onChange}/>
            <input type="text" placeholder="robinhood" name="robinhood" value={robinhood} onChange={onChange}/>
            <div>
                <input type="submit" value={current ? 'Update Budget' : 'Add Budget'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>    
            </div>}
        </form>
    )
}

export default BudgetForm;