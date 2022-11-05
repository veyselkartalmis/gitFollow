import "../Followers/followers.scss";

const Followers = ({ following }) => {
    return (
        <div className="box">
            <h3 className="box-title">Your Following</h3>
            <div className="user-container">
                {following.map((follow) => (
                    <div className="user" key={follow.id}>
                        <img className="user-image" src={follow.avatar_url} alt={follow.login} />
                        <a className="user-name" href={follow.html_url} target="_new-blank">{follow.login}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Followers;