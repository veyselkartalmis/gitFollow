import React from "react";
import userSVG from ".././assets/user.svg";

export default function Header({ user }) {
	console.log(user);
	return (
		<header className="header">
			<span style={{ textAlign: "center" }}>
				<a href="/" style={{ color: "#000", fontSize: "18px" }}>
					gitFollow
				</a>
			</span>

			{!user && (
				<div className="user-information">
					<img
						src={userSVG}
						alt=""
						style={{ width: "24px", height: "24px" }}
					/>
				</div>
			)}

			{user && user !== "Not Found" && (
				<div className="user-information">
					<span>{user.login}</span>
					<img src={user?.avatar_url} alt="Profil_Photo" />
				</div>
			)}
		</header>
	);
}
