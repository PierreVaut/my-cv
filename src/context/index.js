import React from 'react';
import constants from './constants';
import resume from './resume';
import personalInfo from './personalInfo';

export const initialState = { [constants.RESUME]: resume, [constants.PERSONAL_INFO]: personalInfo };

export default React.createContext(initialState);

export { constants };
