import "./followers.scss";
import { AiOutlineRight } from "react-icons/ai";

const Followers = ({ followers }) => {
	return (
		<div className={`box ${followers.length > 0 ? "active" : ""}`}>
			<h3 className="box-title">
				Your Followers{" "}
				<span style={{ opacity: "0.8", fontSize: "12px" }}>
					({followers.length})
				</span>
			</h3>
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
							<AiOutlineRight
								size="24px"
								className="AiOutlineRight"
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Followers;
