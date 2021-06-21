import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Hairong'
  const x = false
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x?'Yes':'No'}</h2>
    </div>
  );
}

export default App;
