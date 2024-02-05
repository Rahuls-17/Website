

import React, { useState } from 'react';
import gameData from './GameData';
import './gameTest.css';

const GameTesting = () => {
  const [visibleGames, setVisibleGames] = useState(3);

  const loadMore = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 3);
  };

  const visibleGamesSlice = gameData.games.slice(0, visibleGames);

  return (
    <section className='py-3 container' style={{ backgroundColor: '' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className="title">
          <span className="live">GAME</span> <span className="events">TESTING</span>
        </h1>
        {visibleGames < gameData.games.length && (
          <button
            className='btn btn-dark-purple'
            onClick={() => loadMore()}
          >
            View More
          </button>
        )}
      </div>

      <div className='row'>
        {visibleGamesSlice.map((item) => (
          <div key={item.id} className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={item.img} alt={`Game ${item.id}`} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='desc-text'>{item.desc}</p>
                <div className='button-container'>
                  <a href={item.link} className='action-button action-button-play' target='_blank' rel='noopener noreferrer'>
                    Battle
                  </a>
                  <button className='action-button action-button-info'>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameTesting;
