import { useState } from "react"
import ProfileList from "./ProfileList/ProfileList"
import ProfileSearch from "./ProfileSearch/ProfileSearch"

const ProfileListPage = () => {

    const [term, setTerm] = useState('');


    const searchProfiles = async ({ term }) => {
        setTerm(term)
    }

    return (
        <div className="container">
            <main>
                <ProfileSearch onSearch={searchProfiles} />
                <ProfileList term={term} />
            </main>
        </div>
    )
}

export default ProfileListPage