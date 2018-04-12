
//import './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 15000
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 10000
}));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

//console.log(showExpenses(store.expenses, store.filters));


ReactDOM.render(jsx, document.getElementById('App'));