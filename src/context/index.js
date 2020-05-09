import React from 'react';
import constants from './constants';

import {
  headerData, resumeData, footerData, skillsData,
} from './resources';

export const initialState = {
  [constants.HEADER]: headerData,
  [constants.SKILLS]: skillsData,
  [constants.RESUME]: resumeData,
  [constants.FOOTER]: footerData,
};

export default React.createContext(initialState);

export { constants };
