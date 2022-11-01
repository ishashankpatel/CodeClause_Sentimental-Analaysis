import React, { useState, useEffect } from 'react';
import './App.css';
import posv from './normal.png';
import nev from './sad.png';
import happy from './happy.png';

import Sentiment from 'sentiment';
const sentiment = new Sentiment();

function App() {

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div className='mainn'>
      <header className='App-header'>
        <h2>Sentiment Analysis</h2>
<h4>Enter your phrase/thoughts</h4>
        <input value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '90%' }}
        />

        {
          sentimentScore !== null ?
            <p>Sentiment Score: {sentimentScore.score}</p>
            : ''
        }

        {
          sentimentScore ?
            sentimentScore.score === 0 ?
            <img src={posv} alt="normal" width={"200px"} height={"200px"} />
              :
              sentimentScore.score > 0 ?
              <img src={happy} alt="happy" width={"200px"} height={"200px"} />
                :
                <img src={nev} alt="negative" width={"200px"} height={"200px"} />
                   : ''
        }

      </header>
    </div>
  );
}

export default App;
