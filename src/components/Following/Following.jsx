import "../Followers/followers.scss";

const Followers = ({ following }) => {
	return (
		<div
			className={`box ${following.length > 0 ? "active" : ""}`}
			style={{ backgroundColor: "#F6E4F5" }}
		>
			<h3 className="box-title">Following Users</h3>
			<div className="user-container">
				{following.map((follow) => (
					<div className="user" key={follow.id}>
						<a
							className="user-name"
							href={follow.html_url}
							target="_new-blank"
						>
							<img
								className="user-image"
								src={follow.avatar_url}
								alt={follow.login}
							/>
							<span>{follow.login}</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Followers;
