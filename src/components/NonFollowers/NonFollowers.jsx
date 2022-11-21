import "../Followers/followers.scss";

const NonFollowers = ({ nonFollowers }) => {
	return (
		<div
			className={`box ${nonFollowers.length > 0 ? "active" : ""}`}
			style={{ backgroundColor: "#FAE5E5" }}
		>
			<h3 className="box-title">NonFollowers</h3>
			<div className="user-container">
				{nonFollowers.map((nonFollow) => (
					<div className="user" key={nonFollow.id}>
						<a
							className="user-name"
							href={nonFollow.html_url}
							target="_new-blank"
						>
							<img
								className="user-image"
								src={nonFollow.avatar_url}
								alt={nonFollow.login}
							/>
							<span>{nonFollow.login}</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default NonFollowers;
