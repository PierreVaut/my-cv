import React from 'react';
import constants from './constants';
import resume from './resume';
import personalInfo from './personalInfo';
import footer from './footer';

export const initialState = {
  [constants.RESUME]: resume,
  [constants.PERSONAL_INFO]: personalInfo,
  [constants.FOOTER]: footer,
};

export default React.createContext(initialState);

export { constants };
