import './App.css';
import Nav from './Nav';
import Search from './Search'; 
import History from './History'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
	<Router>
		<div className="App">  
			<Nav /> 
	  		<Switch>
				<Route path="/" exact component={Home}/>   
				<Route path="/search" component={Search}/>    
				<Route path="/history" component={History}/>
	  
	  		</Switch>
		</div>
	</Router>
  );
}

function Home() {
  
		return (

		  <div>    
			<h1>Welcome</h1>
			<p> Use the grey bar above to navigate. </p>
			 
		  </div>
		);   
	 
}

export default App;
