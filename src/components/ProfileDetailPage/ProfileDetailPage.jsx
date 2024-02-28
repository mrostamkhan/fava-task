import './ProfileDetailPage.css'
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
            <main className="profile_detail__page">
                <div className="mb-3 mt-3 profile_detail__page__header">
                    <button>Back To Search</button> <span>hireable: </span>
                </div>
                <ProfileDetail profileLogin={profileLogin} />
                <ProfileRepositories profileLogin={profileLogin} />
            </main>
        </div>
    )
}

export default ProfileDetailPage