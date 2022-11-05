import "./followers.scss";

const Followers = ({ followers }) => {
    return (
        <div className="box">
            <h3 className="box-title">Your Followers</h3>
            <div className="user-container">
                {followers.map((follower) => (
                    <div className="user" key={follower.id}>
                        <img className="user-image" src={follower.avatar_url} alt={follower.login} />
                        <a className="user-name" href={follower.html_url} target="_new-blank">{follower.login}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Followers;