import { useState } from "react";
import Followers from "./components/Followers/Followers";
import Following from "./components/Following/Following";
import "./app.scss";
import bodyBg from "./assets/bg-overlay.png";

function App() {
  const [username, setUsername] = useState();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

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

    var difference = following.filter(x => !followers.includes(x));
    console.log(difference);
  };

  return (
    <div className="follow-container">
      <img className="body-bg" src={bodyBg} alt="bodyBg" />
      <div className="title">
        <h3>Enter Github Username and Find Unfollowers</h3>
        <div className="input-buttons">
          <input
            placeholder="github username"
            class="input"
            type="text"
            onChange={getUserName}
          >
          </input>
          <button onClick={fetchAllData}>Let's Find</button>
        </div>
      </div>
      <div className="follow-boxes">
        <Followers followers={followers} />
        <Following following={following} />
      </div>
    </div>
  );
}

export default App;
