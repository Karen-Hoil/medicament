import React from 'react'

function Login() {
  return (
    <>
    <div className='body'>
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" className='input_login'/>
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true" className='label_login'>
          Registrate
        </label>
        <input type="text" name="txt" placeholder="Usuario" required="" className='input_login'/>
        <input type="password" name="pswd" placeholder="Contraseña" required="" className='input_login'/>
        <button className='boton_login'>Registrate</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true" className='label_login'>
          Inicio de sesión
        </label>
        <input type="text" name="txt" placeholder="Usuario" required="" className='input_login'/>
        <input type="password" name="pswd" placeholder="Contraseña" required="" className='input_login'/>
        <button className='boton_login'>Inicio de sesión</button>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default Login
