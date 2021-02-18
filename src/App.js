import './App.css';
import './Components/nav.css'
import Nav from './Components/nav'
import Footer from './Components/Footer'
import Register from './Components/Register'
import Login from './Components/Login'
import Main from './Components/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/signup' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route exact path='/' component={Main}/>
      <Footer />
    </div>
  );
}

export default App;
