import React from 'react';
import resume from './resume';
import personalInfo from './personalInfo';

export const initialState = { resume, personalInfo };

export default React.createContext(initialState);
