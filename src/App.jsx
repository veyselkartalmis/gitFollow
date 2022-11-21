import { useState } from "react";
import Followers from "./components/Followers/Followers";
import Following from "./components/Following/Following";
import NonFollowers from "./components/NonFollowers/NonFollowers";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./app.scss";

function App() {
	const [username, setUsername] = useState();
	const [followers, setFollowers] = useState([]);
	const [following, setFollowing] = useState([]);
	const [nonFollowers, setNonFollowers] = useState([]);

	//function
	const getUserName = undefined;
	const fetchAllData = undefined;
	const findNonFollowers = undefined;

	return (
		<>
			<Header />
			<Banner
				getUserName={getUserName}
				setUsername={setUsername}
				username={username}
				fetchAllData={fetchAllData}
				findNonFollowers={findNonFollowers}
				followers={followers}
				setFollowers={setFollowers}
				setFollowing={setFollowing}
				following={following}
				setNonFollowers={setNonFollowers}
			/>
			<div className="follow-container">
				<Followers followers={followers} />
				<Following following={following} />
				<NonFollowers nonFollowers={nonFollowers} />
			</div>
		</>
	);
}

export default App;
