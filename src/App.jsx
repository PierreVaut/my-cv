import React from 'react';
import './App.css';
import { Header, PageBlock, Footer } from './components';
import { constants } from './context';

const {
  RESUME, SKILLS, HEADER, FOOTER,
} = constants;

function App() {
  return (
    <div className="A4" data-testid="page">
      <Header resource={HEADER} />
      <main>
        <PageBlock className="left" pageBlockType={constants.RESUME} />
        <PageBlock className="right" pageBlockType="none for the moment" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
