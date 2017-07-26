import React from "react";
import { Link } from "react-router";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
          user: {}
        };
        this.fetchUser.bind(this);
    }
    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(prevProps) {  //this causes a click on a followers/following person to go to that next person's site-like a chain
        if (prevProps.params.username !== this.props.params.username) {  //prevents url changes but user does not--this reinstantiates the fetchUser data
            this.fetchUser();  //this is a lifestyle hook and will reinstantiate fetchUser for new users
        }                        //component does not get torn down, but, new data can enter it.
    }

    fetchUser() {  //this gets called when the component is instantiated & it mounts it to the DOM
        fetch(`https://api.github.com/users/${this.props.params.username}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0
`)
        .then(resp => resp.json())
        .then(user => {
            this.setState((prevState, props) => ({        //({ means we are returning an object
            user: user
            }));
        })
        .catch(err => console.log(err));
    }
//This method is used as a mapping function. Eventually this could be factored out to its own component.
    renderStat(stat) {
        return (
            <li key={stat.name}  className="user-info__stat">
              <Link to={stat.url}>
                 <p className="user-info__stat-value">
                    {stat.value}
                 </p>
                 <p className="user-info__stat-name">
                    {stat.name}
                 </p>
              </Link> 
            </li>    
        );
    }


    render() {
      //if state has no user property render this, otherwise continue on
        if (!this.state.user) {
            return <div className="user-page">LOADING......</div>;
        }

        //assuming the user is loaded, because we checked
        const user = this.state.user;

        //Gather up some number stats about the user, to be used in a map below
        const stats = [
            {
                name: "Public Repos",
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: "Followers",
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: "Following",
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }
        ];

        //Now we can render, sweet!
        return(
            <div className="user-page">
              <div className="user-info">
                <Link className="user-info__text" to={`/user/${user.login}`}>
                 <img 
                 className="user-info__avatar"
                 src={user.avatar_url}
                 alt={`${user.login} avatar`}
                 />
                 <h2 className="user-info__title">
                   {user.login} ({user.name})
                 </h2>
                 <p className="user-info__bio">
                   {user.bio}
                 </p>
                </Link>

                <ul className="user-info__stats">
                  {stats.map(this.renderStat)}
                </ul>

              </div>
              <div className="user-extra">
              </div> 
                {this.props.children}
            </div>
        );
    }
}

export default User;

/*
 "login": "ormus395",
  "id": 28426718,
  "avatar_url": "https://avatars3.githubusercontent.com/u/28426718?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ormus395",
  "html_url": "https://github.com/ormus395",
  "followers_url": "https://api.github.com/users/ormus395/followers",
  "following_url": "https://api.github.com/users/ormus395/following{/other_user}",
  "gists_url": "https://api.github.com/users/ormus395/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ormus395/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ormus395/subscriptions",
  "organizations_url": "https://api.github.com/users/ormus395/orgs",
  "repos_url": "https://api.github.com/users/ormus395/repos",
  "events_url": "https://api.github.com/users/ormus395/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ormus395/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jarec Turner",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Bio not defined\r\nJavascript student at codercamps.\r\nReact and Redux = WAAT?",
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2017-05-05T05:24:43Z",
  "updated_at": "2017-07-24T17:54:06Z"
}*/