import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cardReducer from './card/card-reducer';
import sectionReducer from './section/section-reducer';
import collectionReducer from './collection/collection-reducer';


const rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer,
    sections: sectionReducer,
    collections: collectionReducer
});

const persistConfig = {
    key:'root',
    storage,
    whitelist:['card']
}

export default persistReducer(persistConfig, rootReducer);



