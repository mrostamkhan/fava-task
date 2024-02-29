import { useContext } from 'react';
import { useState } from 'react';
import ProfileContext from '../../../shared/ProfileContext';
import './ProfileSearch.css'

const ProfileSearch = () => {

    const profileContext = useContext(ProfileContext);
    const { profiles } = profileContext;

    const [term, setTerm] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (term)
            profileContext.setSearchTerm(term);
    }

    const clearSearch = () => {
        profileContext.clearSearch();
        setTerm('');
    }

    const onChangeHandler = (e) => setTerm(e.target.value);

    return (
        <form className="form__sec" onSubmit={onSubmitHandler}>
            <input type="text" value={term} onChange={onChangeHandler} placeholder="Search Users" />
            <button type="submit" className="btn-primary">Submit</button>
            {profiles.data.length > 0 && <button type="button" onClick={clearSearch} className="btn-ghost">Clear</button>}
        </form>
    )
}

export default ProfileSearch