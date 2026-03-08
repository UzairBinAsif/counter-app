import React, {useState} from 'react'


const App = () => {
  let [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <button onClick={() => setCount(++count)}>+ Increment</button>
      <div className='counter'>{count}</div>
      <button onClick={() => setCount(--count)}>- Decrement</button>
    </div>
    </>
  )
}

export default App