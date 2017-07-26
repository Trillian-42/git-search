import React, { Component } from "react";
import { Link } from "react-router"; // This link (see below) links to the header on the pg so that when user clicks
//on the title it takes them back to the search bar page.
//This is the layout component. It's desplayed by the top-level Route
//this.props.children will correspond to the current URL's component.
//If the URL is only / then the IndexRoute's component will be the child (Search component)
//If the URL is /user/:username then the User component will be displayed.
class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="main-header">
          <h1>
            <Link to="/">React Git Searchin'</Link>
          </h1>
        </header>
        <main className="main-content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
