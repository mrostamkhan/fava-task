import './ProfileDetailPage.css'
import { useParams, Link } from 'react-router-dom'
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import ProfileRepositories from "./ProfileRepositories/ProfileRepositories";
import { useContext } from 'react';
import ProfileContext from '../../shared/ProfileContext';

const ProfileDetailPage = () => {

    const { profileLogin } = useParams();
    const profileContext = useContext(ProfileContext);
    const { profile } = profileContext;

    return (
        <div className="container">
            <main className="profile_detail__page">
                <div className="mb-3 mt-3 profile_detail__page__header">
                    <Link to="/" className="btn btn-ghost">Back To Search</Link>
                    <span>hireable: </span><span>{profile.hireable ? <svg className="svg-icon color-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg> : <svg className="svg-icon color-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>}</span>
                </div>
                <ProfileDetail profileLogin={profileLogin} />
                <ProfileRepositories profileLogin={profileLogin} />
            </main>
        </div>
    )
}

export default ProfileDetailPage