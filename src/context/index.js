import React from 'react';
import constants from './constants';
import resume from './resume';
import footer from './footer';
import skills from './skills';

import { headerData } from './resources';

export const initialState = {
  [constants.HEADER]: headerData,
  [constants.SKILLS]: skills,
  [constants.RESUME]: resume,
  [constants.FOOTER]: footer,
};

export default React.createContext(initialState);

export { constants };
