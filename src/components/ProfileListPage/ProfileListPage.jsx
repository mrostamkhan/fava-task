import { useEffect, useState } from "react"
import ProfileList from "./ProfileList/ProfileList"
import ProfileSearch from "./ProfileSearch/ProfileSearch"

const ProfileListPage = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        console.log(111)
    }, [])

    const searchProfiles = async ({ term }) => {
        let response = await fetch(`https://api.github.com/search/users?q=${term}&client_id=undefined&client_secret=undefined`);
        let responseData = await response.json();

        setProfiles([...responseData.items])
    }

    return (
        <div className="container">
            <main>
                <ProfileSearch onSearch={searchProfiles} />
                <ProfileList profiles={profiles} />
            </main>
        </div>
    )
}

export default ProfileListPage