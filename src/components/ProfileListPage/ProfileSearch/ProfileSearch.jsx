import './ProfileSearch.css'

const ProfileSearch = () => {
    return (
        <form className="form__sec">
            <input type="text" placeholder="Search Users" />
            <button className="btn-primary">Submit</button>
            <button className="btn-ghost">Clear</button>
        </form>
    )
}

export default ProfileSearch