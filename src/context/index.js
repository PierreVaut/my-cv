import React from 'react';
import constants from './constants';
import footer from './footer';
import skills from './skills';

import { headerData, resumeData } from './resources';

export const initialState = {
  [constants.HEADER]: headerData,
  [constants.SKILLS]: skills,
  [constants.RESUME]: resumeData,
  [constants.FOOTER]: footer,
};

export default React.createContext(initialState);

export { constants };
