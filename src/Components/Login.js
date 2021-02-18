import react from 'react'
import './form.css'

function Login() {
    return(
        <div className="form">
        <div className="form__content">
          <h1 className="form__title">Войти</h1>
          <form action>
            <div className="form__input">
              <p className="form__text">Логин:</p>
              <input type="text" maxLength={16} required />
            </div>
            <div className="form__input">
              <p className="form__text">Пароль:</p>
              <input type="password" maxLength={20} required />
            </div>
            <button type="submit" className="form__button">Войти</button>
            <p className="form__undertext">
            Нет аккаунта? <a href="#">Создай его</a><br />
            Забыли пароль? <a href="#">Восстановить</a>
          </p>
          </form>
        </div>
      </div>
    )
}

export default Login;