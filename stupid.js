
  render() {
    var values = this.state.repos;
    var none = 'YOU LAZY FOO'
    var items = this.state.repos.map(function(repo) {
      return (
        <ul>
          <li>{repo.name}</li>
        </ul>
      )
    });
    if(values.length === 0) {
      return (
        <div>
          {none}
        </div>
      )
    } else {
      return (
        <div>
          {items}
        </div>
      )
    }
  }
}
export default Repos;





// import React, { Component } from "react";

// class Repos extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             repos: {}
//         }
//     }
//     componentDidMount() {
//         this.fetchRepos();
//     }
    
//     fetchRepos() {
//         fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token554612bc8de7a1a6744b77055cbab693543d20f0`)  
//             .then(resp => resp.json())
//             .then(repos => {  //this repos is saying to set the json payload to repos
//               this.setState((prevState, props) => ({        //({ means we are returning an object
//                repos: repos  //repos(refers to this.state above):repos(sets payload from json = to repos)
//                }));
//         })
//         .catch(err => console.log(err));
//     }
    
//     render() {
//        var items = this.state.repos.map(function(repo) {
//            return (
//                <ul>
//                    <li>{repo.name}</li>
//                </ul>
//            )
//        });
   
//            return (
//                <div>
//                    {items}
//                </div>    
//            )
//        }
//     }

// export default Repos;