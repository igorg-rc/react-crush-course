import logo from './logo.svg';
import './App.css';
import {Todo} from './components/Todo'

const App = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hello from React!</h3>
      <Todo title="Learn React" description="Let's take some fun!" />
      <Todo title="Learn Node.js" description="Let's make it more!" />
      <Todo title="Learn databases" description="Let's make it better!" />

      <Todo title="Learn JS" description="Let's take some fun!" />
      <Todo title="Learn HTML5" description="Let's make it more!" />
      <Todo title="Learn CSS3" description="Let's make it better!" />
    
    </div>
  );
}

export default App;
