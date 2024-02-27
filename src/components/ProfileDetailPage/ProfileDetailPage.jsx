import { useEffect } from "react";
import { useState } from "react"
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import ProfileRepositories from "./ProfileRepositories/ProfileRepositories";

const ProfileDetailPage = ({ profileLogin }) => {

    const [profile, setProfile] = useState({});

    // useEffect(() => {
    //     console.log(111);
    // })

    return (
        <div className="container">
            <main>
                <ProfileDetail profileLogin={profileLogin} />
                <ProfileRepositories profileLogin={profileLogin} />
            </main>
        </div>
    )
}

export default ProfileDetailPage