import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

//SET_TEXT_FILTER default values
test('should setup set text filter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


//SET_TEXT_FILTER provided values
test('should setup set text filter action object with provided values', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

//SORT_BY_DATE
test('should setup sort by date filter action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

//SORT_BY_AMOUNT
test('should setup sort by amount filter action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

//SET_START_DATE
test('should setup set start date filter action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

//SET_END_DATE
test('should setup set end date filter action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
