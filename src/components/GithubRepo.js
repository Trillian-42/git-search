import React, { Component } from "react";
// (Use a a href instead here var Link = require('react-router').Link;

class GithubRepo extends Component {
   render() {
    var url = this.props.repo.html_url;
    var name = this.props.repo.full_name;
    var stars = this.props.repo.stargazers_count;
   

    return (
        <a target="_blank" className="github-repotag" href={url}>
            {name}
            {" "}
            <span className="github-repotag__stars">{stars}*</span>
        </a>
    )
   }
};
   
export default GithubRepo;