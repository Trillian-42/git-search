import React, { Component } from "react";
import Infinite from "react-infinite";
import GithubUser from "./GithubUser";

class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      following: [],
      done: false
    };
  }

  fetchData() {
    // if (this.state.done) {
    //   return;
    // }
    this.setState({ loading: true });

    var that = this; // What's this?? Make sure you remember or understand what this line does
    var page = this.state.page;
    fetch(
      `https://api.github.com/users/${this.props.params
        .username}/following?per_page=25&page=${page}&access_token7756cc5b095ede456ac2458c7ff727b00ab75ebe`
    )
      .then(response => response.json())
      .then(payload => {
        if (payload.length === 0) {
          that.setState({
            loading: false,
            done: true
          });
        } else {
          // Why that.setState instead of this.setState??
          that.setState({
            following: that.state.following.concat(payload),
            page: page + 1,
            loading: false
          });
        }
      });
  }

  render() {
    var items = this.state.following.map(function(user) {
      return (
        <div className="followers-list__item" key={user.id}>
          <GithubUser user={user} />
        </div>
      );
    });

    // Look in app.css for the styles that make this look like it does
    return (
      <div className="followers-page">
        <h3>
          Following {this.props.params.username}
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

export default Following;