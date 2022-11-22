import { useState } from "react";
import Followers from "./components/Followers/Followers";
import Following from "./components/Following/Following";
import NonFollowers from "./components/NonFollowers/NonFollowers";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./app.scss";
import notFound from "./assets/notFound.webp";

function App() {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("");
	const [followers, setFollowers] = useState([]);
	const [following, setFollowing] = useState([]);
	const [nonFollowers, setNonFollowers] = useState([]);

	//function
	const getUserName = undefined;
	const fetchAllData = undefined;
	const findNonFollowers = undefined;

	return (
		<>
			<Header user={user} />
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
				user={user}
				setUser={setUser}
			/>

			{user !== "Not Found" && user !== null ? (
				<div className="follow-container">
					<Followers follow={followers} />
					<Followers follow={following} />
					<Followers follow={nonFollowers} />
				</div>
			) : (
				<div className="container_down">
					{user === "Not Found" ? (
						<img className="notFound" src={notFound} alt="arama" />
					) : (
						""
					)}
				</div>
			)}
		</>
	);
}

export default App;
