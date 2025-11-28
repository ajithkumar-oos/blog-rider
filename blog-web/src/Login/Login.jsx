import "../Login/Login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div>
      <div className='login'>
        <form className="form-css" >
            <h1 className="h1-css">LOG IN</h1>
            <label className="label-css">UserName</label>
            <input className="input-css" type="text" />
            <label className="label-css">Password</label>
            <input className="input-css" type="password" />
            <button className="button-css">ENTER</button>
            <div>
            <a className="text-light" href="#">forget password ?</a>
            <Link to="/register"><a className="text-light" href="#">Register</a></Link>
            </div>


        
        </form>

      </div>
    </div>
  )
}

export default Login
