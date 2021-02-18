import react from 'react'
import './form.css'

function Register() {
    return(
        <div className="form" style={{transform: 'translate(-50%, 10%)'}}>
        <div className="form__content">
          <h1 className="form__title">Регистрация</h1>
          <form action>
            <div className="form__input">
              <p className="form__text">Логин:</p>
              <input type="text" maxLength={16} required />
            </div>
            <div className="form__input">
              <p className="form__text">Почта:</p>
              <input type="email" maxLength={16} required />
            </div>
            <div className="form__input">
              <p className="form__text">Пароль:</p>
              <input type="password" maxLength={20} required />
            </div>
            <div className="form__input">
              <p className="form__text">Подтверждение пароля:</p>
              <input type="password" maxLength={20} required />
            </div>
            <button type="submit" className="form__button">Регистрация</button>
          </form>
        </div>
      </div>
      
    )
}

export default Register;