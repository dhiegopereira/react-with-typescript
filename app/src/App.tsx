import { useState } from 'react';
import './App.css';
import Cep from './components/Zip';

function App() {
  const [zip, setZip] = useState<number>(1)
  return (
    <div className="App">
      <input 
      type="number"
      onChange={e => setZip(Number(e.target.value))}
      />
     <Cep zip={zip}/>
    </div>
  );
}

export default App;
