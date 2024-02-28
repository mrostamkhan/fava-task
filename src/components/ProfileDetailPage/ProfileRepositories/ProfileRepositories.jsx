import { useState } from "react";
import { useEffect } from "react";

const ProfileRepositories = ({ profileLogin }) => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getRepos();
    }, [])

    const getRepos = async () => {
        const response = await fetch(`https://api.github.com/users/${profileLogin}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`)
        const responseData = await response.json();

        setRepos([...responseData]);
    }

    return (
        <ul>
            {repos.map((item) => <li key={item.id} className="profile__box"><a href={item.html_url} target="_blank">{item.name}</a></li>)}
        </ul>
    )
}

export default ProfileRepositories;