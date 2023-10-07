import { uData } from './Data';
import { useState } from 'react'
import './App.css';
import Chair from './Chair';

function App() {
  const [value, setValue] = useState(1);
  const handleProceed = () => {
    setValue(1);
  }
  return (
    <div className="App">
      {/* select quantity */}
      <select
        onChange={(e) => setValue(Number(e.target.value))} 
        style={{ width: "100px", height: "25px" }}
      >
        <option disabled selected >Qty</option>
        <option value='1' >1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>

      </select>

      <select style={{ width: "100px", height: "25px", marginLeft: '10px' }}>
       
        <option disabled selected >Ticket type</option>
        <option>Standard</option>
        <option>premium</option>
      </select>

      {/*  to know box type */}
      <div style={{ display: "flex" }}>
        <div
          style={{ marginLeft: "10px", height: "20px", width: '20px', border: "2px solid gray", background: "white" }}
        ></div> Unavailable  |
        <div
          style={{ marginLeft: "10px", height: "20px", width: '20px', border: "2px solid black", background: 'gray' }}
        ></div> Available    |
        <div
          style={{ marginLeft: "10px", height: "20px", width: '20px', border: "2px solid black", background: 'rgb(52, 237, 52)' }}
        ></div> Booked
        <div>
          <button
          style={{ padding: "5px", fontSize: "2rem", background: "#FA8072", color: "white", }} onClick={handleProceed}
        >Proceed</button>
        </div>
      </div>

      {/* showing box */}
      <div style={{ border: "3px solid black", padding: '10px', marginTop: "10px" }}>
        {
          uData.map((item, i) => <Chair item={item} key={i} value={value} />)
        }
      </div>

    </div>
  );
}

export default App;
