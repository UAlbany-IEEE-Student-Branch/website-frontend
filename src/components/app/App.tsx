import React from 'react';
import Main from '../main/Main';
import { About } from '../about/About';
import { Slider } from '../events/Slider';
import { Officers } from '../officers/Officers';
import { Social } from '../social/Social';

function App() {
  return (
    <div>
      <Main />
      <About />
      <Slider />
      <Officers />
      <Social />
    </div>
  );
}

export default App;
