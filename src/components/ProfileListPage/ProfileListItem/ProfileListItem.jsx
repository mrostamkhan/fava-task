import './ProfileListItem.css'
import {Link} from 'react-router-dom'

const ProfileListItem = ({ profile }) => {
    return (
        <div className="profile__item">
            <img src={profile.avatar_url} className="profile__avatar" />
            <h3>{profile.login}</h3>
            <Link to={'/profile/'+ profile.login} className="btn btn-primary mt-2">More</Link>
        </div>
    )
}

export default ProfileListItem;