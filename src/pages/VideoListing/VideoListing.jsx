import React from 'react';
import { Sidebar } from '../../components';
import { useData } from '../../contexts/data-context';
import { searchVideos, sortVideosCategory } from '../../Services/Services';
import { VideoCard } from './components/VideoCard';
import './VideoListing.css';

export const VideoListing = () => {
  const { state, dispatch } = useData();
  const sortCategory = (catName) => {
    dispatch({
      type: 'SORT_BY',
      payload: catName,
    });
  };
  const searchByName = searchVideos([...state.videos], state.search);
  const sortByCategory = sortVideosCategory(searchByName, state.sortBy);

  return (
    <>
      <div className='video__container'>
        <Sidebar />
        <div className='video__list'>
          <div className='category__list'>
            {state.categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => sortCategory(cat.categoryName)}
                className='btn btn__action btn__icon'
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
          <div className='video__card'>
            {sortByCategory.map((item) => (
              <VideoCard item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
