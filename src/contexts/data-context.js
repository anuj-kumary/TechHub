import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { ACTION_TYPE } from '../utils/ActionType';
import { InitialState, DataReducer } from '../reducer/DataReducer';
import { getAllVideosServices } from '../Services/Services';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);

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

  return (
    <DataContext.Provider
      value={{ state, dispatch, modal, modalData, setModal, setModalData }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
