import React, { useContext } from 'react';
import Item from '../item';
import './Page.css';
import ResumeContext from '../../context';


const Page = () => {
  const resume = useContext(ResumeContext);
  console.log(resume);
  return (
    <div className="A4" data-testid="page">
      <div className="page-block left">
        <Item type="" />
        <Item type="" />
        <Item type="" />

      </div>
      <div className="page-block right">
        <Item type="" />
        <Item type="" />
        <Item type="" />

      </div>
    </div>
  );
};

export default Page;
