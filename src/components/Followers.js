import React, { Component } from "react";
import Infinite from "react-infinite";
import GithubUser from "./GithubUser";

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      followers: [],
      done: false
    };
  }

  fetchData() {
   // if (this.state.done) {
    //return;
    // }
    this.setState({ loading: true });

    var that = this; //What's this?? Make sure you remember or understand what this line does.
    var page = this.state.page;
    fetch(
      `https://api.github.com/users/${this.props.params.username}/followers?per_page=25&page=${page}&access_token=554612bc8de7a1a6744b77055cbab693543d20f0`)
      .then(response => response.json())
      .then(payload => {
        if (payload.length === 0) {
          that.setState({
            loading: false,
            done: true
          });
        } else {
          //Why that.setState instead of this.setState??
          that.setState({
            followers: that.state.followers.concat(payload),
            page: page + 1,
            loading: false
          });
        }
      });
  }

  render() {
    var items = this.state.followers.map(function(user) {
      return (
        <div className="followers-list__item" key={user.id}>
          <GithubUser user={user} />
        </div>
      );
    });

    //Look in app.css for the styles that make this look like it does
    return (
      <div className="followers-page">
        <h3>
          Followers of {this.props.params.username}
        </h3>
         <Infinite
          loadingSpinnerDelegate={<div className="loading" />}
          isInfiniteLoading={this.state.loading}
          onInfiniteLoad={this.fetchData.bind(this)}
          infiniteLoadBeginEdgeOffset={20}
          elementHeight={41}
          containerHeight={250}
          useWindowAsScrollContainer={true}
        >
          {items}
        </Infinite>
      </div>
    );
  }
}
export default Followers;
