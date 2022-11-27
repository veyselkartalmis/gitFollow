import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Banner({
	getUserName,
	setUsername,
	username,
	fetchAllData,
	findNonFollowers,
	followers,
	setFollowers,
	setFollowing,
	following,
	setNonFollowers,
	user,
	setUser,
}) {
	getUserName = (e) => {
		setUsername(e.target.value);
	};

	fetchAllData = async () => {
		// Followers data
		await fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "Not Found") return setUser("Not Found");

				setUser(data);

				// Followers data
				fetch(`https://api.github.com/users/${username}/followers?per_page=100`)
					.then((res) => res.json())
					.then((data) => {
						setFollowers(data);
					});

				//Following data
				fetch(`https://api.github.com/users/${username}/following?per_page=100`)
					.then((res) => res.json())
					.then((data) => {
						setFollowing(data);
					});
				//
			});
	};

	findNonFollowers = () => {
		setNonFollowers(
			//NonFollowers filter
			following.filter((user) => {
				return !followers.some((follower) => {
					return follower.id === user.id;
				});
			})
		);
	};

	return (
		<div className="banner">
			<h1>
				Find out your <span>non-followers</span> on <span>GitHub!</span>
			</h1>
			<label htmlFor="" className="AiOutlineSearchLabel">
				<AiOutlineSearch size="24px" className="AiOutlineSearch" />
				<input
					type="text"
					name=""
					id=""
					placeholder="Github Username"
					value={username}
					onChange={getUserName}
				/>
			</label>

			<div className="buttons">
				<button
					className="followers"
					onClick={fetchAllData}
					disabled={!username.length}
				>
					Find Followers
				</button>
				<button
					className={`unfollowers ${
						followers.length > 0 ? "active" : ""
					}`}
					onClick={findNonFollowers}
					disabled={!followers.length}
				>
					Find Unfollowers
				</button>
			</div>
		</div>
	);
}
