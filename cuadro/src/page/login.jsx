import React from 'react'

function Login() {
  return (
    <>
    <div className='body'>
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Registrate
        </label>
        <input type="text" name="txt" placeholder="Usuario" required="" />
        <input type="email" name="email" placeholder="Correo" required="" />
        <input type="password" name="pswd" placeholder="Contraseña" required="" />
        <button>Registrate</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Inicio de sesión
        </label>
        <input type="email" name="email" placeholder="Correo" required="" />
        <input type="password" name="pswd" placeholder="Contraseña" required="" />
        <button>Inicio de sesión</button>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default Login
