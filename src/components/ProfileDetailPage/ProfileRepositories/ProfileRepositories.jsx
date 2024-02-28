import { useState } from "react";
import { useEffect } from "react";
import { ProfileService } from "../../../services/ProfileService";

const ProfileRepositories = ({ profileLogin }) => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        ProfileService.getRepos(profileLogin).then((res) => {
            setRepos([...res]);
        });
    }, [])

    return (
        <ul>
            {repos.map((item) => <li key={item.id} className="profile__box mb-1"><a href={item.html_url} target="_blank">{item.name}</a></li>)}
        </ul>
    )
}

export default ProfileRepositories;