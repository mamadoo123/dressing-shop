// //===========Reducer=========
// const INITIAL_STATE={currentUser:null}
// const userReducer = (state = INITIAL_STATE, action) =>{
//     switch (action.type) {
//         case 'SET_CURRENT_USER':
//             return({
//                 ...state,
//                 currentUser:action.payload
//             });
//         default:
//             return state
//     }
// }
// const INITIAL_STATE = {hidden:true}
// const cardReducer = (state=INITIAL_STATE, action)=>{
//     switch (action.type) {
//         case 'TOGGLE_CARD_HIDDEN':
//             return  {
//                 ...state,
//                 hidden:!state.hidden
//             }
//         default:
//             return state;
//     }
// }

// //==========Root Reducer=========
// import {combineReducers} from 'redux';
// import userReducer from './user/user-reducer';
// import cardReducer from './card/card-reducer';
// export default combineReducers({
//     usre: userReducer,
//     card: cardReducer
// });

// //===========Action==============
// const setCurrentUser = user => ({
//     type: 'SET_CURRENT_USER',
//     payload:user
// });

// const toggleCardHidden = () =>{
//     type:'TOGGLE_CARD_HIDDEN'
// }

// //============Store==============
// import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import rootReducer from './redux/root-reducer';
// const middlewares = [logger];
// export default store = createStore(rootReducer, applyMiddleware(...middlewares));

// //============MapStateToProps=====
// const mapStateToProps = state =>({
//     currentUser: state.user.currentUser
// });

// const mapStateToProps = ({user:{currentUser}})=> ({
//     currentUser
// });
// const mapStateToProps = state => ({
//     hidden: state.card.hidden
// })

// //==============MapDispatchToProps======
// import { dispatch, connect } from 'react-redux';

// const mapDispatchToProps = dispatch => ({
//     user: user=>dispatch(setCurrentUser(user))
// });

// const mapDispatchToProps = dispatch => ({
//     toggleCardHidden: ()=>dispatch(toggleCardHidden())
// })
