import "../Navbar/Navbar.css";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-sm nav-css">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="javascript:void(0)"><b>BLOG-RIDER</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
      <ul class="navbar-nav  ">
        <li class="nav-item nav-line">
          <a class="nav-link text-light" href="javascript:void(0)"><Link to="/">Home</Link></a>
        </li>
        <li class="nav-item nav-line-2">
          <a class="nav-link  text-light" href="javascript:void(0)"><Link to="/Upload">PHOTOS/VIDEOS</Link></a>
        </li>
        <li class="nav-item nav-line-3">
          <a class="nav-link text-light" href="javascript:void(0)">PROFILE</a>
        </li>
      </ul>
      
    </div>
    <form class="d-flex">
       
      <Link to="/login">  <button class="btn text-light " type="button">LOG IN</button></Link>
      </form>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar;
