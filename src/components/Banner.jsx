import React from "react";

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
}) {
	getUserName = (e) => {
		setUsername(e.target.value);
	};

	fetchAllData = () => {
		// Followers data
		fetch(`https://api.github.com/users/${username}/followers`)
			.then((res) => res.json())
			.then((data) => {
				setFollowers(data);
			});

		//Following data
		fetch(`https://api.github.com/users/${username}/following`)
			.then((res) => res.json())
			.then((data) => {
				setFollowing(data);
			});
	};

	findNonFollowers = () => {
		//NonFollowers filter
		const nonFollower = following.filter((user) => {
			return !followers.some((follower) => {
				return follower.id === user.id;
			});
		});

		setNonFollowers(nonFollower);
	};

	return (
		<div className="banner">
			<h1>Find out your non-followers on GitHub!</h1>
			<input
				type="text"
				name=""
				id=""
				placeholder="Github Username"
				value={username}
				onChange={getUserName}
			/>
			<div className="buttons">
				<button className="followers" onClick={fetchAllData}>
					Find Followers
				</button>
				<button
					className={`unfollowers ${
						followers.length > 0 ? "active" : ""
					}`}
					onClick={findNonFollowers}
				>
					Find Unfollowers
				</button>
			</div>
		</div>
	);
}
