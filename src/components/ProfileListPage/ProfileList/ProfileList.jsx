import './ProfileList.css'
import ProfileListItem from "../ProfileListItem/ProfileListItem"

const ProfileList = ({ profiles }) => {

    return (
        <ul className="profileList__sec">
            {profiles.map((item) => (<li><ProfileListItem profile={item} /></li>))}
        </ul>
    )
}

export default ProfileList