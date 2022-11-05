import { useState } from "react";
import Followers from "./components/Followers/Followers";
import Following from "./components/Following/Following";
import NonFollowers from "./components/NonFollowers/NonFollowers";
import bodyBg from "./assets/bg-overlay.png";
import "./app.scss";

function App() {
  const [username, setUsername] = useState();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [nonFollowers, setNonFollowers] = useState([]);

  const getUserName = (e) => {
    setUsername(e.target.value);
  }

  const fetchAllData = () => {
    // Followers data
    fetch(`https://api.github.com/users/${username}/followers`)
      .then(res => res.json())
      .then(data => {
        setFollowers(data);
      });

    //Following data
    fetch(`https://api.github.com/users/${username}/following`)
      .then(res => res.json())
      .then(data => {
        setFollowing(data);
      });
  };

  const findNonFollowers = () => {
    //NonFollowers filter
    const nonFollower = following.filter((user) => {
      return !followers.some((follower) => {
        return follower.id === user.id
      })
    });

    setNonFollowers(nonFollower);
  }

  return (
    <div className="follow-container">
      <a class="sign" href="https://github.com/veyselkartalmis" target="_new-blank">@veyselkartalmis</a>
      <img className="body-bg" src={bodyBg} alt="bodyBg" />
      <div className="title">
        <h3>Find out your non-followers on GitHub!</h3>
        <div className="input-buttons">
          <input
            placeholder="github username"
            class="input"
            type="text"
            onChange={getUserName}
          >
          </input>
          <button onClick={fetchAllData}>Find Followers</button>
          <button className={`non-follow ${followers.length > 0 ? 'active' : ''}`} onClick={findNonFollowers} disabled={followers.length > 0 ? false : true}>Find Unfollowers</button>
        </div>
      </div >
      <div className="follow-boxes">
        <Followers followers={followers} />
        <Following following={following} />
        <NonFollowers nonFollowers={nonFollowers} />
      </div>
    </div >
  );
}

export default App;
