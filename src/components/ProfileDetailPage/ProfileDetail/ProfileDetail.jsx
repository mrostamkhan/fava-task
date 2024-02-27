import { useEffect } from "react";

const ProfileDetail = ({ profileLogin }) => {

    useEffect(() => {
        console.log(profileLogin)
    }, [])

    return (
        <div>
            {profileLogin} Detail
        </div>
    )
}

export default ProfileDetail;