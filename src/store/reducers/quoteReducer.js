const FETCHING_STARTED = 'FETCHING_STARTED';
const FETCHING_COMPLETE = 'FETCHING_COMPLETE';
const FETCHING_ERROR = 'FETCHING_ERROR';

let defaultState = {
    quote: "",
    author: ""
};

const quoteReducer = (state=defaultState, action) => {
    switch(action.type) {
        case FETCHING_STARTED:
            return defaultState;
        case FETCHING_COMPLETE:
            return {quote: action.quote, author: action.author};
        case FETCHING_ERROR:
        default:
            return state;
    }
}
export default quoteReducer;