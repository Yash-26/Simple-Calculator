import { useState } from 'react';
import './App.css';

function App() {
  
  const [val,setval] = useState('')

  return (
    <div className="container">
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type="text" value={val}/>
          </div>
          <div>
            <input type='button' value='AC' onClick={e=>setval('')}/>
            <input type='button' value='DEL' onClick={e=>setval(val.slice(0,-1))}/>
            <input type='button' value='.' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='/' onClick={e=>setval(val + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='7' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='8' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='9' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='*' onClick={e=>setval(val + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='4' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='5' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='6' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='-' onClick={e=>setval(val + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='1' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='2' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='3' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value=' + ' onClick={e=>setval(val + e.target.value)}/>
          </div>
          <div>
            <input type='button' value='00' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='0' onClick={e=>setval(val + e.target.value)}/>
            <input type='button' value='=' className='equal' onClick={e=>setval(eval(val))}/>
          </div>
        </form>

      </div>
      
    </div>
  );
}

export default App;
