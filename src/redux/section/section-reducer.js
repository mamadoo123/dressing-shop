import {data} from './data';
const INITIAL_STATE = data.sections;
const sectionReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sectionReducer;