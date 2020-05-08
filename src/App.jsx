import React from 'react';
import './App.css';
import { Header, PageBlock } from './components';


function App() {
  return (
    <div className="A4" data-testid="page">
      <Header />
      <PageBlock className="left" />
      <PageBlock className="right" />
    </div>
  );
}

export default App;
