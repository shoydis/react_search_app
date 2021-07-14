import React from 'react';
 
var cachedHits="null";

 

class Search extends React.Component {
	
  constructor(props) {
    super(props);
 
    this.state = { query: '', hits: [] };
  }
 
  onChange = event => {
    this.setState({ query: event.target.value });   
  };



  onSearch = event => {
	  
    event.preventDefault(); //stops the page from reloading on submit
 
    const { query } = this.state;
	console.log("The query is: " + query);
 
    if (query === '') {  // skip if empty.
      return;
    }
 
	//get the results
    fetch('https://hn.algolia.com/api/v1/search?query=' + query)
	.then(response => response.json())
	.then(result => this.onSetResult(result, query)); 
	
	//find time of submission.
	var time = new Date().getTime(); // get unix timestamp 
	var date = new Date(time); // create Date object 
	var readableTime = date.toString();  //convert it to a readable date/time
	
	//assemble history log
	var newItem = readableTime + " | '" + {query}.query + "'";   // the "search history" that will be saved (time | search term). 
	cachedHits = cachedHits + ", " + newItem; //create history entry
    console.log("cachedHits is now: " + cachedHits);
	  
    sessionStorage.setItem("localHistory", cachedHits); //store the history log.
		
  };
 
  onSetResult = (result, key) => {  
 
    this.setState({ hits: result.hits });  //set data to the state.
	  
  };
 
  render() {
    return (
      <div>  
		
        <form onSubmit={this.onSearch}>
          <input type="text" onChange={this.onChange} />
          <button type="submit">Search</button>
        </form>
		
  		<div className="displayedItemArea"> 
			{this.state.hits.map(item => (  //map out the data.
				<a key={item.objectID} href={item.url} target="_blank" className="searchResult"  rel="noreferrer" > 
					<h3>Article: {item.title}</h3>
					<p>Author: {item.author}</p> 
				</a> 
			))}
		</div>

      </div>
    );
  }
}
 
export default Search;