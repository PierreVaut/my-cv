import React from 'react';
import './App.css';
import { Header, PageBlock, Footer } from './components';
import { constants } from './context';


function App() {
  return (
    <div className="A4" data-testid="page">
      <Header />
      <PageBlock className="left" pageBlockType={constants.RESUME} />
      <PageBlock className="right" pageBlockType="none for the moment" />
      <Footer />
    </div>
  );
}

export default App;
