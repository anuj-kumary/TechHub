import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { ACTION_TYPE } from '../utils/ActionType';
import { InitialState, DataReducer } from '../reducer/DataReducer';
import { getAllCategories, getAllVideosServices } from '../Services/Services';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const hamburgerClickHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };

  useEffect(() => {
    (async () => {
      try {
        const videoResponse = await getAllVideosServices();
        if (videoResponse.status === 200) {
          dispatch({
            type: ACTION_TYPE.INITIAL_DATA,
            payload: videoResponse.data.videos,
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllCategories();
        if (response.status === 200) {
          dispatch({
            type: ACTION_TYPE.CATEGORIES,
            payload: response.data.categories,
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        modal,
        modalData,
        setModal,
        setModalData,
        hamburgerClickHandler,
        setToggleSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
