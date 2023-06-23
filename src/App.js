import './App.css';
import {useState} from 'react';
function App() {
  const [item,setItem] = useState('');
  const [array,setArray] = useState([]);
  const update = () => {
    console.log(item,!item);
    if(!item){
      alert('enter a valid task !');
      return;
    }
    const obj={
      id: Math.floor(Math.random()*100),
      task: item
    }
    setArray(array => [...array,obj]);
    setItem('');
  }
  const del = (id) => {
    const newArr = array.filter(item => item.id !== id);
    setArray(newArr);
  }
  return (
  <div className='main'> 
    <h1>ToDo List</h1>
    <input 
        type="text" 
        placeholder="ENTER TASK"
        value={item}
        onChange={e => setItem(e.target.value)} 
    ></input>
    <button onClick={update}>ADD</button>
    <ul>
      {
        array.map(arr => <li key={arr.id}>{arr.task} <button onClick={() => del(arr.id)}>🔴</button></li>)
      }  
    </ul>
    </div>
  );
}

export default App;
