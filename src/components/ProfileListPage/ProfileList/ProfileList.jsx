import './ProfileList.css'
import ProfileListItem from "../ProfileListItem/ProfileListItem"
import { useContext } from 'react'
import ProfileContext from '../../../shared/ProfileContext'

const ProfileList = () => {

    const profileContext = useContext(ProfileContext);
    const { searchTerm, profiles } = profileContext;

    if ((searchTerm != '' && profiles.data.length == 0) || profiles.term != searchTerm) {
        profileContext.getList(searchTerm)
    }

    return (
        <ul className="profileList__sec">
            {
                profiles.data.map((item) => (
                    <li key={item.id}><ProfileListItem profile={item} /></li>
                ))
            }
        </ul>
    )
}

export default ProfileList