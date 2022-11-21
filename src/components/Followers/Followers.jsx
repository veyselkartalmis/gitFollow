import "./followers.scss";

const Followers = ({ followers }) => {
	return (
		<div className={`box ${followers.length > 0 ? "active" : ""}`}>
			<h3 className="box-title">Your Followers</h3>
			<div className="user-container">
				{followers.map((follower) => (
					<div className="user" key={follower.id}>
						<a
							className="user-name"
							href={follower.html_url}
							target="_new-blank"
						>
							<img
								className="user-image"
								src={follower.avatar_url}
								alt={follower.login}
							/>
							<span>{follower.login}</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Followers;
