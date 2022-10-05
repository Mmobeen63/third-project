
import './App.css';
import { NavBar } from './Components/NavBar';
import { TextComponent } from './Components/TextComponent';
import  {SignupForm}  from './Components/SignupForm';
import { StarwarsCharacters } from './Components/StarwarsCharacters';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='MainContainer'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={TextComponent} />
          <Route path='/Signup' component={SignupForm} />
          <Route path='/StarWarsCharacter' component={StarwarsCharacters} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
