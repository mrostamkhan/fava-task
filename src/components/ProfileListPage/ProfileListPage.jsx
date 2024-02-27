import ProfileList from "./ProfileList/ProfileList"
import ProfileSearch from "./ProfileSearch/ProfileSearch"

const ProfileListPage = () => {
    return (
        <div className="container">
            <ProfileSearch />
            <ProfileList />
        </div>
    )
}

export default ProfileListPage