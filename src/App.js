import { uData } from './Data';
import { useState } from 'react'
import './App.css';
import Chair from './Chair';

function App() {
  // const [seats]=useState(uData);
  // console.log(seats)
  return (
    <div className="App">
      <input  type='number' />
      <div>
        {
          uData.map((item, i) => <Chair item={item} key={i} />)
        }
      </div>
    </div>
  );
}

export default App;
