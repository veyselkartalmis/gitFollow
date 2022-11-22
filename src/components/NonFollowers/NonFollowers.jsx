import "../Followers/followers.scss";
import { AiOutlineRight } from "react-icons/ai";

const NonFollowers = ({ nonFollowers }) => {
	return (
		<div
			className={`box ${nonFollowers.length > 0 ? "active" : ""}`}
			style={{ backgroundColor: "#FAE5E5" }}
		>
			<h3 className="box-title">
				NonFollowers{" "}
				<span style={{ opacity: "0.8", fontSize: "12px" }}>
					({nonFollowers.length})
				</span>
			</h3>
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

export default NonFollowers;
