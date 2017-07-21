import React, { Component } from "react";
import { Link } from "react-router"; // This link (see below) links to the header on the pg so that when user clicks
//on the title it takes them back to the search bar page.

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
