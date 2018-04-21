import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
    const filters = {
        text: 'Gum',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0]]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
        //text, sortBy, startDate, endDate
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

// test('should filter by date value', () => {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: undefined
//         //text, sortBy, startDate, endDate
//     };
//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
// });