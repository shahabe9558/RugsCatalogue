import logo from './logo.svg';
import './App.css';
import data from './data'
import {useState} from 'react'
import Catalogue from './components/Catalogue';

function App() {
  const[catData, setdata] = useState(data);
  return (
    <div className="App">
        <Catalogue catData = {catData}/>
    </div>
  );
}
export default App;
