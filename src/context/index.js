import React from 'react';
import constants from './constants';
import skills from './skills';

import { headerData, resumeData, footerData } from './resources';

export const initialState = {
  [constants.HEADER]: headerData,
  [constants.SKILLS]: skills,
  [constants.RESUME]: resumeData,
  [constants.FOOTER]: footerData,
};

export default React.createContext(initialState);

export { constants };
