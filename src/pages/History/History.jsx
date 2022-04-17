import React from 'react';
import { useAuth, useData } from '../../contexts';
import { Sidebar } from '../../components';
import { HistoryCard } from './HistoryCard';
import './History.css';
import { clearAllHistory } from '../../utils/historyUtils';

export const History = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();

  return (
    <div>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          {state.history.length > 0 && (
            <div className='history__btn'>
              <button
                onClick={() => clearAllHistory(token, dispatch)}
                className='btn clear__btn'
              >
                clear history
              </button>
            </div>
          )}
          <div className='video__card'>
            {state.history.length > 0 ? (
              state.history.map((item) => (
                <HistoryCard key={item._id} item={item} />
              ))
            ) : (
              <h1 className='text text__center heading__text'>
                Looks like you haven't Added anything yet.
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
