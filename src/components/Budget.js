import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
  const { budget,dispatch,expenses,currency} = useContext(AppContext);

  const changeBudget = (val)=>{
    const totalExpenses = expenses.reduce((total, item) => {
      return (total + item.cost);
    }, 0);


    if(val<totalExpenses) {
      alert("You cannot reduce the budget lower than the spending!");
    }
    else if(val>20000) {
      alert("Budget Cannot Exceed 20,000!");
    }
    else {
      dispatch({
        type: 'SET_BUDGET',
        payload: val,
      })
    }
  }

  return (
    <div className='alert alert-secondary'>
      Budget: {currency}
      <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
    </div>
  );
};
export default Budget;