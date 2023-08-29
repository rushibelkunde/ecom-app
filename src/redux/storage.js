
// using persist storage
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // key for the persisted data
  storage, // storage medium
  // other configuration options if needed
};

export default persistConfig;
