import './ProfileDetail.css'
import { useEffect } from "react";
import { useContext } from 'react';
import ProfileContext from '../../../shared/ProfileContext';

const ProfileDetail = ({ profileLogin }) => {

    const profileContext = useContext(ProfileContext);
    const { profile } = profileContext;

    useEffect(() => {
        if (profileLogin != '')
            profileContext.get(profileLogin);    }, [])

    return (
        <>
            <div className="profile_detail__sec profile__box">
                <div className="profile_detail__header">
                    <img src={profile.avatar_url} className="profile_detail__avatar" />
                    <h1 className="text-center">{profile.name}</h1>
                    <p>{profile.location}</p>
                </div>

                <div className="profile_detail__info">
                    <div>
                        <h3 className="bold">Bio:</h3>
                        <p>{profile.bio}</p>
                    </div>

                    <a href={profile.html_url} target="_blank" className="btn btn-primary">Visit Github Page</a>

                    <ul className="profile_detail__contact">
                        <li>Login: {profile.login}</li>
                        <li>Website: {profile.blog}</li>
                    </ul>
                </div>
            </div>

            <div className="profile__box">
                <ul className="profile_detail__activities">
                    <li className="profile_detail__followers">Followers: {profile.followers}</li>
                    <li className="profile_detail__following">Following: {profile.following}</li>
                    <li className="profile_detail__repos">Public Repos: {profile.public_repos}</li>
                    <li className="profile_detail__gists">Public Gists: {profile.public_gists}</li>
                </ul>
            </div>
        </>
    )
}

export default ProfileDetail;