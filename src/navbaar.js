import React from 'react';
import{
	Link
} from 'react-router-dom';

const Navbar = ()=> (

	/*<ul className = "navbar-expand-lg navbar navbar-dark bg-dark">
		<li className = "Nav-item">
		<Link className= "Nav-link active" to='/'>Home</Link>
		</li>

		<li className = "Nav-item">
		<Link className= "Nav-link" to='/about'>About</Link>
		</li>

	</ul>


  <nav className="navbar-expand-lg">
	
	
	  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		<li className = "nav-item">
		<Link className= "nav-link active text-black text-uppercase" to='/'>Home</Link>
		</li>
		<li className = "nav-item">
		<Link className= "nav-link" to='/about'>About</Link>
		</li>

	  </ul>
	
  </nav>*/


  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <h2 className="navbar-brand text-white text-uppercase">React-Router</h2>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to='/'>Home</Link></li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to='/about'>about</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to='/contact'>contact us</Link>
      </li>
      
   
    </ul>
    
  </div>
</nav>
  )

	export default Navbar;