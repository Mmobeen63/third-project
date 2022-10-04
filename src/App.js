
import './App.css';
import { NavBar } from './Components/NavBar';
import { TextComponent } from './Components/TextComponent';
import { Form } from './Components/Form';

function App() {
  return (
    <div className='MainContainer'>
      <NavBar />
      <TextComponent />
      <Form />
    </div>
  );
}

export default App;
