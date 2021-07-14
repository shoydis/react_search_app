import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
       	<h1>Nav</h1>
	  	<ul className="nav-links">
	  
	  		<Link to="/search">
				<li>
					Search
				</li>
	  		</Link> 
	  		<Link to="/history">
				<li>
					History
				</li>
	  		</Link>
	  	</ul>
    </nav>
  );
}

export default Nav;
