import './App.css';

function App() {
  const buttontext="Click ME!"
  return (
    <div className="App">
      <h1 >Learning to convert jsx to html</h1><br /><br />
      <label htmlFor='name' className='name'>Name:</label>
      <input type='text' id='name' />
      <button style={{ backgroundColor: 'red', color: 'white' }}>{buttontext}</button>
    </div>
  );
}

export default App;
