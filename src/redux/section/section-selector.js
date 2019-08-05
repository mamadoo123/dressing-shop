import {createSelector} from 'reselect';

const selectStateSections = state => state.sections;
export const selectSections = createSelector(
    [selectStateSections],
    sections => sections
)