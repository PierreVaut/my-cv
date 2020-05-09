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
        <PageBlock className="left" resource={RESUME} />
        <PageBlock className="right" resource={SKILLS} />
      </main>
      <Footer resource={FOOTER} />
    </div>
  );
}

export default App;
