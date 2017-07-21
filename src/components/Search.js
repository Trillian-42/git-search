import React from "react";
import { browserHistory as history } from "react-router";


//We gonna need a class here
class Search extends React.Component {   //same as saying const Search = new React.Component
    constructor(props) {                     //class requires a constructor and a render method
        super(props);   //super keywords will invoke the constructor for object up the prototype chain to the React.Component
           
        this.handleSubmit = this.handleSubmit.bind(this);  //implicitly binding to this instance of search (refs-input value)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.refs.userInput.value);
        history.push(`/user/${this.refs.userInput.value}`);  //this line pushes user input in search bar to the URL
    }

    render() {
       return (
          <div className="search-page">
             <h2>Enter a Github Username</h2>
             <form onSubmit={this.handleSubmit}>
                 <input ref="userInput" className="search-page__input" type="text" />
                 <button className="search-page__button">Search</button>
             </form>
           </div>  
       );
    }
};

export default Search;