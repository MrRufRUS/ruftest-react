import react from 'react'
import './nav.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav(){
    return(
        <header>
        <nav>
          <div className="nav__container">
            <ul className="nav__links">
              <li><Link to='/' className="nav__element">Главная</Link></li>
              <li><Link className="nav__element">Пройти тестировние</Link></li>
              <li><Link className="nav__element">FAQ</Link></li>
            </ul>
            <div className="nav__buttons">
              <Link to='/signup' className="reg-btn">Регистрация</Link>
              <Link to='/login' className="log-in-btn">Войти</Link>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Nav;