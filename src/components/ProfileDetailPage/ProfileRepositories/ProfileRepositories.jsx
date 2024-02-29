import { useContext } from "react";
import { useEffect } from "react";
import ProfileContext from "../../../shared/ProfileContext";

const ProfileRepositories = ({ profileLogin }) => {

    const profileContext = useContext(ProfileContext);
    const { repos } = profileContext;

    useEffect(() => {
        if (profileLogin != '')
            profileContext.getRepos(profileLogin);
    }, [])

    return (
        <ul>
            {repos.map((item) => <li key={item.id} className="profile__box mb-1"><a href={item.html_url} target="_blank">{item.name}</a></li>)}
        </ul>
    )
}

export default ProfileRepositories;