import './ProfileList.css'
import ProfileListItem from "../ProfileListItem/ProfileListItem"
import { useEffect, useState } from 'react'
import { ProfileService } from '../../../services/ProfileService'

const ProfileList = ({ term }) => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (term != '') {
            ProfileService.getList(term).then((res) => {
                setProfiles([...res])
            })
        }
    }, [term])

    return (
        <ul className="profileList__sec">
            {profiles.map((item) => (<li key={item.id}><ProfileListItem profile={item} /></li>))}
        </ul>
    )
}

export default ProfileList