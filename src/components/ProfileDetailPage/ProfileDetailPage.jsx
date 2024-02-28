import './ProfileDetailPage.css'
import { useParams, Link } from 'react-router-dom'
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import ProfileRepositories from "./ProfileRepositories/ProfileRepositories";

const ProfileDetailPage = () => {

    const { profileLogin } = useParams();

    return (
        <div className="container">
            <main className="profile_detail__page">
                <div className="mb-3 mt-3 profile_detail__page__header">
                    <Link to="/" className="btn btn-ghost">Back To Search</Link> <span>hireable: </span>
                </div>
                <ProfileDetail profileLogin={profileLogin} />
                <ProfileRepositories profileLogin={profileLogin} />
            </main>
        </div>
    )
}

export default ProfileDetailPage