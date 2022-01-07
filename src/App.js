import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import quoteAction from './store/action-creators/index';
import './App.css';

function App() {
  const quote = useSelector(state => state.quote.quote);
  const author = useSelector(state => state.quote.author)
  const dispatch = useDispatch();
  const fetchQuote = bindActionCreators(quoteAction, dispatch);
  console.log(quote);
  useEffect(() => { fetchQuote(); }, []);
  let tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + quote + '" ' + author);
  return (
    <div className="container-fluid">
      <div className="mx-auto my-auto justify-content-center text-center col-6" id="quote-box">
        <div id="quote-text">
          <div id="text">{quote}</div>
          <div id="author" className=""><i>-{author}</i></div>
          <div className="row justify-content-center" id="bottom-bar">
            <button id="new-quote" className="btn btn-primary col-3" onClick={() => fetchQuote()}> New Quote</button>
            <a id="tweet-quote" className="btn btn-primary col-3" href={tweetLink} target="_blank">Tweet Quote</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
