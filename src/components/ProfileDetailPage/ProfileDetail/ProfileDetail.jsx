import './ProfileDetail.css'
import { useState } from "react";
import { useEffect } from "react";

const ProfileDetail = ({ profileLogin }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(profileLogin)
    }, [])

    const getProfile = async (profileLogin) => {
        const response = await fetch('https://api.github.com/users/alex?client_id=undefined&client_secret=undefined');
        const responseData = await response.json();
        console.log(responseData)
        setProfile({ ...responseData });
    }

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
                        <h3 class="bold">Bio:</h3>
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
                    <li class="profile_detail__followers">Followers: {profile.followers}</li>
                    <li class="profile_detail__following">Following: {profile.following}</li>
                    <li class="profile_detail__repos">Public Repos: {profile.public_repos}</li>
                    <li class="profile_detail__gists">Public Gists: {profile.public_gists}</li>
                </ul>
            </div>
        </>
    )
} 

export default ProfileDetail;