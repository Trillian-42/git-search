import React, { Component } from "react";
import Infinite from "react-infinite";
import GithubRepo from "./GithubRepo";

class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            loading: true,
            repos: [],
            done: false
        };
    }
  
    fetchData() {
      this.setState({ loading: true });
      var that = this;
      var page = this.state.page;

    fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token554612bc8de7a1a6744b77055cbab693543d20f0`)  
      .then(response => response.json())
      .then(repos => {
          if (repos.length === 0) {
              that.setState({
                  loading: false,
                  done: true
              });
          } else {
              that.setState({
                  repos: repos,
                  page: page + 1,
                  loading: false
              });
          }
      });

    }

    render() {
        if (!this.state.repos) {
            return <div className="followers-page">LOADING...</div>;
        }

    return (
        <div className="followers-page">
          <h3>{this.props.params.username}'s repos</h3>
          <ul className="followers-list">
          {
              this.state.repos.map(function(repo) {
                  return <li key={repo.id}><GithubRepo repo={repo}/></li>;
              })
          }
          </ul>
          <Infinite
          loadingSpinnerDelegate={<div className="loading" />}
          isInfiniteLoading={this.state.loading}
          onInfiniteLoad={this.fetchData.bind(this)}
          infiniteLoadBeginEdgeOffset={20}
          elementHeight={41}
          containerHeight={250}
          useWindowAsScrollContainer={true}
        />
        </div>
    );

}};

export default Repos;

//  componentDidMount() {
//         fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token554612bc8de7a1a6744b77055cbab693543d20f0`)  
//             .then(resp => resp.json())
//             .then(repos => {  //this repos is saying to set the json payload to repos
//               this.setState((prevState, props) => ({        //({ means we are returning an object
//                repos: repos  //repos(refers to this.state above):repos(sets payload from json = to repos)
//                }))
//               console.log(repos)
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

  
// //    