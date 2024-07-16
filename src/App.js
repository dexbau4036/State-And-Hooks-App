import React, { useState } from 'react';
 import './App.css';
 import Button from './component/Button';
 import TextField from './TextField';
 import TodoList from './component/TodoList';


 function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
  setCount(count + 1);
 };

 const handleDecrement = () => {
  setCount(0);
  };

 const [inputValue, setInputValue] = useState('');
 const handleChange = (e) => {
 setInputValue(e.target.value);
 };


 return (

  	<div className="App">
	<header className="App-header">

   	<h1>Counter: {count}</h1>
   	<h1>CIS453 Welcome</h1>
			<h1>Dexter Bautista</h1>
    	<Button label="Increment" onClick={handleIncrement} />
    	<Button label="Decrement" onClick={handleDecrement} />
	
	<h1>Text Field Value: {inputValue}</h1>
 	<TextField value={inputValue} onChange={handleChange} />

	<p>Todo list </p>
 	<TodoList />
 	</header>
  	</div>
	);

}

export default App;
