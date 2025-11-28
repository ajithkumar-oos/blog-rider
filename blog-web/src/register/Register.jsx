import "../register/Register.css"
import {Link} from "react-router-dom"
function Register() {
  return (
    <div>
       <div className='register'>
        <form className="form-css" >
            <h1 className="h1 h-css">Register</h1>
            <label className="label-css">UserName</label>
            <input className="input-css" type="text" />
            <label className="label-css">Email</label>
            <input className="input-css" type="text" />
            <label className="label-css">Password</label>
            <input className="input-css" type="password" />
            <button className="button-css">ENTER</button>
            <div>
            <a className="text-light" href="#">forget password ?</a>
            <Link to="/login"><a className="text-light" href="#">Login</a></Link>
            </div>


        
        </form>

      </div>
    </div>
  )
}

export default Register
