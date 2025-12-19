import React from 'react';
import Sec1 from './sec1/Sec1';
import Sec11 from './sect11/Sect11'; 
import './home.css';
import Sect2 from './sec2/Sect2';
import Sec3 from './sec3/Sec3';
import Sec4 from './sec4/Sec4';
import Sec5 from './sec5/Sec5';
import Sec6 from './sec6/Sec6';
import Sec7 from './sec7/Sec7';
import Sec8 from './sec8-foot/Sec8';

function Home() {
  return (
    <div className="parent">
      <Sec11 /> 
      <Sec1 />  
      <Sect2/>
      <Sec3/>
      <Sec4/>
      {/* <Sec5/> */}
      <Sec6/>
      <Sec7/>
      <Sec8/>
    </div>
  );
}

export default Home;
