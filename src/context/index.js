import React from 'react';
import constants from './constants';

import {
  headerData, resumeData, footerData, skillsData, downloadButtonData,
} from './resources';

export const initialState = {
  [constants.HEADER]: headerData,
  [constants.SKILLS]: skillsData,
  [constants.RESUME]: resumeData,
  [constants.FOOTER]: footerData,
  [constants.DOWNLOAD_BUTTON]: downloadButtonData,
};

export default React.createContext(initialState);

export { constants };
