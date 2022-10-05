
import './App.css';
import { NavBar } from './Components/NavBar';
import { TextComponent } from './Components/TextComponent';
import { Form } from './Components/Form';
import { StarwarsCharacters } from './Components/StarwarsCharacters';

function App() {
  return (
    <div className='MainContainer'>
      <NavBar />
      <TextComponent />
      <Form /> 
      < StarwarsCharacters />
    </div>
  );
}

export default App;
