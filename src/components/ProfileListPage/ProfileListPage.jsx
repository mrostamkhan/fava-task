import { useState } from "react"
import ProfileList from "./ProfileList/ProfileList"
import ProfileSearch from "./ProfileSearch/ProfileSearch"

const ProfileListPage = () => {

    return (
        <div className="container">
            <main>
                <ProfileSearch />
                <ProfileList />
            </main>
        </div>
    )
}

export default ProfileListPage