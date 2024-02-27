import './ProfileListItem.css'

const ProfileListItem = ({ profile }) => {
    return (
        <div className="profile__item">
            <img src={profile.avatar_url} className="profile__avatar" />
            <h3>{profile.login}</h3>
            <button className="btn-primary mt-2">More</button>
        </div>
    )
}

export default ProfileListItem;