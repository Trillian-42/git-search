import React, { Component } from "react";
var Link = require('react-router').Link;

class GithubUser extends Component {
   render() {
    var url = `/user/${this.props.user.login}`;
    var username = this.props.user.login;
    var avatarUrl = this.props.user.avatar_url;

    return (
        <Link className="github-usertag" to={url}>
          <img className="github-usertag__avatar" src={avatarUrl} alt="hello" />
            {username}
        </Link>
    );
  }
}
   
export default GithubUser;