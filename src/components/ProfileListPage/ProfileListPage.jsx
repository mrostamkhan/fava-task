import { useEffect } from "react"
import ProfileList from "./ProfileList/ProfileList"
import ProfileSearch from "./ProfileSearch/ProfileSearch"

const ProfileListPage = () => {

    useEffect(() => {
        console.log(111)
    })

    const searchProfiles = ({ term }) => {
        console.log('in root', term);
    }

    return (
        <div className="container">
            <main>
                <ProfileSearch onSearch={searchProfiles} />
                <ProfileList />
            </main>
        </div>
    )
}

export default ProfileListPage