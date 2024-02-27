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
        <>
            <ProfileDetail profileLogin={profileLogin} />
            <ProfileRepositories profileLogin={profileLogin} />
        </>
    )
}

export default ProfileDetailPage