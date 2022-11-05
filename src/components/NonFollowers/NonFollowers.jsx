import "../Followers/followers.scss";

const NonFollowers = ({ nonFollowers }) => {
    return (
        <div className="box">
            <h3 className="box-title">NonFollowers</h3>
            <div className="user-container">
                {nonFollowers.map((nonFollow) => (
                    <div className="user" key={nonFollow.id}>
                        <img className="user-image" src={nonFollow.avatar_url} alt={nonFollow.login} />
                        <a className="user-name" href={nonFollow.html_url} target="_new-blank">{nonFollow.login}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NonFollowers;