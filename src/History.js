function History() {
 
	if(sessionStorage.getItem("localHistory")){ 
		var history = sessionStorage.getItem("localHistory").split(",");

		console.log("history was:");
		console.log(history);
		 
		history = history.splice(1, history.length);

		console.log("history is now:");
		console.log(history);

		return (

		  <div>    
			<h1>HISTORY</h1>
			<p> (A list of the search terms from this session, and the time they were made.)</p>
			<div className="SearchedTerms">

				<ol> 
					{history.map(history => (
					  <li key={history}> {history}</li> 
						))
					}

				</ol>
			</div>

		  </div>
		);  
	} else{  
		return (

		  <div>    
			<h1>HISTORY</h1>
			<p> (A list of the search terms from this session)</p>
			<div className="SearchedTerms">
 
				<ol> 
					<li>No searches have been made yet.</li>
				</ol>
			</div>

		  </div>
		);  
	}
	 
}
 
export default History;