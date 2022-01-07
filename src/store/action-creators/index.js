 const FETCHING_STARTED = 'FETCHING_STARTED';
 const FETCHING_COMPLETE = 'FETCHING_COMPLETE';
 const FETCHING_ERROR = 'FETCHING_ERROR';


const getQuote = async function () {
    try {
        const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        const data = await res.json();
        let i = Math.floor(Math.random() * (data["quotes"].length -1));
        if (data && data["quotes"][0]) {
            return {
                quote: data["quotes"][i].quote,
                author: data["quotes"][i].author
            };
        }
    } catch (error) {
        return "error";
    }
};

export const fetchingStarted = () => {
    return {type: FETCHING_STARTED};
}
export const fetchingComplete = (result) => {
    return {quote: result.quote,
    author: result.author,
    type: FETCHING_COMPLETE}
}
export const fetchingError = () => {
    return {type: FETCHING_ERROR};
}

export const fetchQuote = () => async dispatch => {
    dispatch(fetchingStarted());
    const result = await getQuote();
    if (result === "error") {
        dispatch(fetchingError());
    } else {
        dispatch(fetchingComplete(result));
    }
}
export default fetchQuote;